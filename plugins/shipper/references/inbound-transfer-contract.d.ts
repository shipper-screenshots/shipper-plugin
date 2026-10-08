// GENERATED from canonical native MCP definition. Do not edit.
export type InboundTransferArgumentsVariant0 = {
  // JSON Schema: {"maximum": 33554432, "minimum": 1}
  "expectedByteCount": number;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "expectedSHA256": string;
  "mediaCategory": "image";
  "operation": "begin";
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
};

export type InboundTransferArgumentsVariant1 = {
  // JSON Schema: {"maxLength": 10924, "minLength": 4}
  "data": string;
  // JSON Schema: {"maximum": 33554432, "minimum": 0}
  "offset": number;
  "operation": "append";
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "transferRef": string;
};

export type InboundTransferArgumentsVariant2 = {
  "operation": "finalize";
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "transferRef": string;
};

export type InboundTransferArgumentsVariant3 = {
  "operation": "cancel";
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "transferRef": string;
};

export type InboundTransferArgumentsVariant4 = {
  "operation": "status";
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "transferRef": string;
};

export type InboundTransferResultVariant0 = {
  // JSON Schema: {"format": "date-time"}
  "expiresAt": string;
  // JSON Schema: {"minimum": 0}
  "maxDecodedChunkBytes"?: number;
  // JSON Schema: {"minimum": 0}
  "nextOffset": number;
  "state": "receiving";
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "transferRef"?: string;
};

export type InboundTransferResultVariant1 = {
  // JSON Schema: {"format": "date-time"}
  "expiresAt": string;
  // JSON Schema: {"minimum": 0}
  "nextOffset": number;
  "receipt": InboundTransferResultVariant1Receipt;
  "state": "finalized";
};

export type InboundTransferResultVariant1Receipt = {
  // JSON Schema: {"format": "date-time"}
  "expiresAt": string;
  "media": InboundTransferResultVariant1ReceiptMedia;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "stagedSourceRef": string;
  // JSON Schema: {"minimum": 0}
  "verifiedByteCount": number;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "verifiedSHA256": string;
};

export type InboundTransferResultVariant1ReceiptMedia = {
  // JSON Schema: {"minimum": 0}
  "height": number;
  "mimeType": "image/png";
  // JSON Schema: {"minimum": 0}
  "width": number;
};

export type InboundTransferResultVariant2 = {
  // JSON Schema: {"format": "date-time"}
  "expiresAt": string;
  // JSON Schema: {"minimum": 0}
  "nextOffset": number;
  "state": "cancelled" | "failed";
};

export type InboundTransferResultVariant3 = {
  "code": "transfer_too_large" | "transfer_incomplete" | "checksum_mismatch" | "unsupported_media" | "staged_source_not_found" | "staged_source_expired" | "staged_source_consumed" | "staging_capacity_reached" | "staging_write_failed" | "staged_source_wrong_session" | "staged_source_wrong_activation" | "staged_source_busy" | "invalid_argument" | "invalid_media" | "image_dimensions_exceeded" | "staged_source_integrity_failure" | "transfer_timed_out" | "staging_authority_unavailable";
  "ok": false;
};

export type InboundTransferArguments = InboundTransferArgumentsVariant0 | InboundTransferArgumentsVariant1 | InboundTransferArgumentsVariant2 | InboundTransferArgumentsVariant3 | InboundTransferArgumentsVariant4;
export type InboundTransferResult = InboundTransferResultVariant0 | InboundTransferResultVariant1 | InboundTransferResultVariant2 | InboundTransferResultVariant3;
