# MCP-native inbound transfer

> GENERATED from runtime definition and limits. Do not edit manually.

[Canonical JSON](inbound-transfer-contract.json) · [Argument types](inbound-transfer-contract.d.ts)

[Canonical receipt fields, errors and shared lifecycle](inbound-staging-contract.json) · [Canvas mutation schema](mcp-mutation-contract.json)

Technical bounded PNG transfer in the already-connected helper; no image bytes through app bridge or Canvas mutations. Programmatically read/encode/submit bytes, never copy payload through model context or print it. Begin binds project/session/activation and this MCP connection. Append strict sequential offsets; accepted-handle append/finalize failures terminate that upload. Finalize returns canonical receipt only after validation; repeated finalize is rejected, use status after a lost response. Status never extends TTL. Cancel receiving uploads; disconnect abandons them. Use the generated native staging reference. Do not reuse transfer handles across connections. No file paths accepted.

## Limits and capability

| Field | Value |
|---|---|
| `bridgeVersion` | `v7` |
| `contractVersion` | `mcp-project-lifecycle-03` |
| `encoding` | `canonical-base64` |
| `maxActiveArtifacts` | `64` |
| `maxActiveArtifactsPerSession` | `8` |
| `maxBeginsPerMinutePerConnection` | `16` |
| `maxCompressedBytes` | `33554432` |
| `maxDecodedChunkBytes` | `8192` |
| `maxEncodedChunkBytes` | `10924` |
| `maxFailuresPerMinutePerConnection` | `16` |
| `maxFinalizesPerMinutePerConnection` | `8` |
| `maxHeight` | `8192` |
| `maxMetadataBytes` | `1048576` |
| `maxReceivingPerConnection` | `8` |
| `maxRecordsPerConnection` | `64` |
| `maxRequestBytes` | `1048576` |
| `maxTotalPixels` | `24000000` |
| `maxTotalStagedBytes` | `268435456` |
| `maxWidth` | `8192` |
| `partialRequestTimeoutSeconds` | `30` |
| `serverVersion` | `6.3.0` |
| `tool` | `transfer_inbound_artifact` |
| `ttlSeconds` | `300` |

## Lifecycle and programmatic boundary

- begin reserves canonical capacity and binds fresh project/session/activation plus this connection; transferRef is not stagedSourceRef.
- append uses exact nextOffset with canonical base64; no replay, missing/out-of-order chunk or size overflow. No synchronous wait for future chunks.
- finalize validates original bytes once and creates stagedSourceRef only after canonical validation; use status on lost response, never replay finalize.
- status returns receiving/finalized/cancelled/failed with original expiresAt; finalized includes canonical receipt while available. Expired/missing or consumed authority is an error, never revived.
- cancel releases receiving capacity. Disconnect cancels receiving files. A dead writer is swept on the next canonical store access; TTL bounds abandoned storage even if authority is unavailable.
- A receipt survives connection closure in the canonical store until original expiry or consumption; transferRef does not survive connection closure.
- Consumption is consumer-specific: successful Managed Image creation commits and successful Screenshot Source set/replace consume stagedSourceRef; Screenshot Source noChange also consumes it without a Canvas revision or Undo unit. Authorized source refs remain reusable while fresh. Proven harmless pre-commit failure retains staged retryability within the original TTL. Committed consumption may finish cleanup as pending, never making a successful or uncertain mutation replayable; observe uncertain mutations, never replay them.
- Rates use fixed 60-second windows per helper connection. Storage quotas and validation lock are shared by CLI and native adapters. No unlimited queue; receiving expires at original TTL.
- Local artifact reading/encoding/chunk submission must remain programmatic and off model context. No payload logs/examples. No local path accepted by this tool or Canvas mutation.
- Approval required, user decline/cancel, staging validation error, transport/process failure and Managed Image mutation failure are distinct. No import failure before an import was attempted; respect declined execution without repeat requests.

## Orchestration

Read the actual inputSchema/types above and current project/session authority. In code mode, keep reader output in runtime variables; programmatically compute total byte count and SHA-256 from a stable artifact, then begin, read/encode at most maxDecodedChunkBytes, append at nextOffset, and finalize. Validate each response before the next call. Emit only progress and sanitized receipt/error metadata, never reader output or encoded payload. Canvas mutations receive only the finalized receipt's stagedSourceRef.

If the host cannot read/encode/submit programmatically without exposing bytes to the model, stop. This contract grants no filesystem or execution permission. A local producer may require host execution approval; it is distinct from launching the signed Shipper staging CLI. Do not claim a no-subprocess path when a producer subprocess was used. A fresh approvals-disabled real-world acceptance run remains required after deployment.

After an uncertain append, status.nextOffset determines whether that chunk was accepted; do not blindly replay it. After an uncertain finalize, status retrieves the single receipt on the same connection. A lost connection loses transfer handles; re-observe any potentially sent Canvas mutation before restaging. Never infer Managed Image import failure from a staging failure.
