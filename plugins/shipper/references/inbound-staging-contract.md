# Inbound staging technical contract

> GENERATED from canonical staging parser, wire DTOs and lifecycle configuration. Do not edit manually.

MCP server: `6.4.0`. Internal CLI protocol; no additional MCP tool.

Machine-readable companion: [inbound-staging-contract.json](inbound-staging-contract.json).
Mutation schemas: [mcp-mutation-contract.json](mcp-mutation-contract.json) and [types](mcp-mutation-contract.d.ts).

## Invoke

Read `get_connection_status.inboundStaging.executablePath` and `get_connection_status.inboundStaging.mode` from live status.
Use fresh project/session authority. All flag/value pairs below are required in exactly this order.

```text
<executablePath> <mode> --project-id <uuid> --project-session-id <uuid> --expected-byte-count <positiveInteger> --expected-sha256 <lowercaseSHA256> --media-category image
```

The advertised mode for this contract is `--stage-inbound`.

| Required flag | Value | Authority/source |
|---|---|---|
| `--project-id` | `uuid` | Fresh inspect_project.projectID for the intended active project. |
| `--project-session-id` | `uuid` | The same fresh inspect_project.projectSessionID. |
| `--expected-byte-count` | `positiveInteger` | Exact byte count of the authorized local PNG bytes that will be streamed. |
| `--expected-sha256` | `lowercaseSHA256` | SHA-256 of those same bytes, encoded as 64 lowercase hexadecimal characters. |
| `--media-category` | `image` | Canonical literal: image. |

## STDIN

Raw authorized PNG bytes, exactly those used for byte count and SHA-256. No JSON, framing or base64. Close STDIN at EOF; stream the entire artifact.

Read one stable byte sequence, compute count/hash from it, then stream that same sequence. Do not reread a changed file between hashing and transfer.

## Verify success

Exit `0`; JSON on `stdout`.

One JSON object followed by a newline; dates use ISO-8601 UTC.

Require every field below, matching verified count/hash and positive dimensions, before treating staging as accepted. Successful staging returns no diagnostic on stderr.

| Field | Type | Meaning |
|---|---|---|
| `expiresAt` | string | ISO-8601 UTC expiration; do not reuse at or after this time. |
| `media.height` | integer | Validated image dimension in pixels; positive integer. |
| `media.mimeType` | string | Validated media type; currently image/png, including PNG alpha. |
| `media.width` | integer | Validated image dimension in pixels; positive integer. |
| `stagedSourceRef` | string | Opaque one-shot reference; pass as source {kind: staged, ref: stagedSourceRef}. |
| `verifiedByteCount` | integer | Must equal the byte count computed from the streamed artifact. |
| `verifiedSHA256` | string | Must equal the lowercase SHA-256 computed from the streamed artifact. |

## Deterministic failure

Exit `1`; JSON on `stderr`.

| Field | Type | Meaning |
|---|---|---|
| `code` | string | Canonical InboundArtifactError code; see error table. |
| `message` | string | Sanitized diagnostic; not filesystem authority. |
| `ok` | boolean | false on a deterministic CLI failure. |

Error codes below cover transfer and later staged-ref use; they are not all CLI-argument errors. A failed CLI call does not return a usable success receipt.

| Code | Meaning |
|---|---|
| `transfer_too_large` | Declared size exceeds limits, or STDIN exceeds the declared byte count. |
| `transfer_incomplete` | STDIN ended before the declared byte count. |
| `checksum_mismatch` | Bytes failed the expected SHA-256/integrity check. |
| `unsupported_media` | Unsupported format or PNG feature/chunk; PNG-only staging. |
| `staged_source_not_found` | Reference no longer exists; it is not reusable authority. |
| `staged_source_expired` | Reference expired; never reuse it. |
| `staged_source_consumed` | Reference already consumed; never replay the import. |
| `staging_capacity_reached` | Staging item/byte capacity reached; no generation loop or blind retry. |
| `staging_write_failed` | Staging storage or sanitized unexpected failure. |
| `staged_source_wrong_session` | Project/session authority mismatch; observe current authority. |
| `staged_source_wrong_activation` | App/helper activation changed; observe authority again. |
| `staged_source_busy` | Reference has an active consumer; do not replay. |
| `invalid_argument` | Missing, extra, reordered or invalid CLI argument/value. Correct the invocation before staging. |
| `invalid_media` | Malformed PNG, invalid decode/CRC/scanlines or metadata budget exceeded. |
| `image_dimensions_exceeded` | Image dimensions or pixel count exceed the staging limits. |
| `staged_source_integrity_failure` | Staged artifact integrity/secure access failed; do not reuse. |
| `transfer_timed_out` | Transfer deadline exceeded. |
| `staging_authority_unavailable` | Active authenticated Shipper authority could not be obtained. |

## Lifecycle and restaging

- Stage close to the intended import. Expiration starts at reservation; retries and lookups do not extend it. Use returned expiresAt, not a locally invented deadline.
- References are bound to the active project, session and helper/app activation. Shipper must be running with MCP enabled and the intended project active. The helper resolves authority internally; do not supply secrets or a staging-root override.
- A ready ref is one-shot. Successful image commit acquires independent bytes and consumes the ref; final cleanup may be pending. Never repeat a ref within one mutation or replay a successful/uncertain mutation.
- A proven harmless pre-commit rejection can leave the ref retryable until its original expiration. Refresh conflicting authority and re-observe canonical state before deciding what still needs execution.
- Never reuse an expired, consumed, missing, corrupt or wrong-session/activation ref. After resolving the cause, restage the same authorized bytes if still needed. Do not regenerate an image merely to refresh its ref.
- A busy ref or uncertain mutation outcome is not permission to restage and replay. Re-observe first; stop if the outcome cannot be established. Staging alone is not a Canvas mutation or a document save.

## Security and mutation boundary

- Only the authorized local producer reads the external artifact and streams bytes to the helper. Canvas mutations receive ONLY opaque staged authority, never the external path, file:// URL, CODEX_HOME path, raw bytes or base64.
- Import through create_canvas.composition.images[] or edit_canvas.changes.add.images[], using source {kind: staged, ref: stagedSourceRef}; obtain all other IDs/revisions and schema from current MCP authority and the generated mutation reference.
- Invoke the advertised executable exactly; never search PATH or invent a helper location. Compare this reference serverVersion with live status before use; stop on a mismatch.
- The signed helper must be allowed to initialize its existing App Sandbox. If an enclosing execution sandbox blocks startup, use the host's explicit execution-approval mechanism; never change entitlements, add exceptions or silently bypass approval. Abnormal termination/empty stdout is not success.

## Current default staging limits

These are internal runtime ceilings, not a generation budget. The returned expiration remains authoritative.

| Limit | Value |
|---|---|
| `maxActiveArtifacts` | 64 |
| `maxActiveArtifactsPerSession` | 8 |
| `maxCompressedBytes` | 33554432 |
| `maxHeight` | 8192 |
| `maxMetadataBytes` | 1048576 |
| `maxTotalPixels` | 24000000 |
| `maxTotalStagedBytes` | 268435456 |
| `maxWidth` | 8192 |
| `streamTimeoutSeconds` | 30 |
| `ttlSeconds` | 300 |
