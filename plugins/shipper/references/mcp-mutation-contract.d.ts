// GENERATED from canonical MCP tools/list inputSchemas. Do not edit manually.
// MCP server: 6.4.0; tool count: 37.
// Companion mcp-mutation-contract.json preserves every JSON Schema constraint.
// This declaration exposes types, enums and required fields; numeric, array-size,
// exclusivity and runtime authority checks still belong to the canonical MCP validator.
// No value aliases or automatic mutation corrections are defined here.

export type CreateCanvasArguments = {
  "base": CreateCanvasArgumentsBaseVariant0 | CreateCanvasArgumentsBaseVariant1;
  "composition"?: CreateCanvasArgumentsComposition;
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"maxLength": 120, "minLength": 1}
  "name"?: string;
  "placement": CreateCanvasArgumentsPlacementVariant0 | CreateCanvasArgumentsPlacementVariant1 | CreateCanvasArgumentsPlacementVariant2 | CreateCanvasArgumentsPlacementVariant3;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
};

export type CreateCanvasArgumentsBaseVariant0 = {
  "kind": "blank";
};

export type CreateCanvasArgumentsBaseVariant1 = {
  "kind": "template";
  // JSON Schema: {"maxLength": 240, "minLength": 1}
  "templateID": string;
};

export type CreateCanvasArgumentsComposition = {
  // JSON Schema minProperties: 1
  "background"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "drawings"?: Array<CreateCanvasArgumentsCompositionDrawingsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "illustrations"?: Array<CreateCanvasArgumentsCompositionIllustrationsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "images"?: Array<CreateCanvasArgumentsCompositionImagesItem>;
  "mockup"?: CreateCanvasArgumentsCompositionMockup;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "symbols"?: Array<CreateCanvasArgumentsCompositionSymbolsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "texts"?: Array<CreateCanvasArgumentsCompositionTextsItem>;
};

export type CreateCanvasArgumentsCompositionBackgroundVariant0 = {
  "color": CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  "kind": "solid";
};

export type CreateCanvasArgumentsCompositionBackgroundVariant0Color = {
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "alpha": number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "blue": number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "green": number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "red": number;
};

export type CreateCanvasArgumentsCompositionBackgroundVariant1 = {
  "endColor": CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  "kind": "gradient";
  "startColor": CreateCanvasArgumentsCompositionBackgroundVariant0Color;
};

export type CreateCanvasArgumentsCompositionDrawingsItem = {
  "allowsOverflow"?: boolean;
  // JSON Schema: {"maxLength": 240, "minLength": 1}
  "assetID": string;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "zIndex"?: number;
};

export type CreateCanvasArgumentsCompositionDrawingsItemPlacement = {
  "horizontal": "left" | "center" | "right";
  "offsetX"?: number;
  "offsetY"?: number;
  "vertical": "top" | "center" | "bottom";
};

export type CreateCanvasArgumentsCompositionIllustrationsItem = {
  "allowsOverflow"?: boolean;
  // JSON Schema: {"maxLength": 240, "minLength": 1}
  "assetID": string;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "zIndex"?: number;
};

export type CreateCanvasArgumentsCompositionImagesItem = {
  "allowsOverflow"?: boolean;
  // JSON Schema: {"minimum": 0}
  "cornerRadius"?: number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionImagesItemPlacement;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "source": CreateCanvasArgumentsCompositionImagesItemSource;
  "zIndex"?: number;
};

export type CreateCanvasArgumentsCompositionImagesItemPlacement = {
  // JSON Schema minProperties: 1
  "horizontal"?: "left" | "center" | "right";
  "offsetX"?: number;
  "offsetY"?: number;
  "vertical"?: "top" | "center" | "bottom";
};

export type CreateCanvasArgumentsCompositionImagesItemSource = {
  "kind": "staged";
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "ref": string;
};

export type CreateCanvasArgumentsCompositionMockup = {
  "allowsOverflow"?: boolean;
  // JSON Schema: {"maxLength": 240, "minLength": 1}
  "deviceDefinitionID"?: string;
  "isVisible"?: boolean;
  "offset"?: CreateCanvasArgumentsCompositionMockupOffset;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationXDegrees"?: number;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationYDegrees"?: number;
  // JSON Schema: {"maximum": 100, "minimum": 0}
  "shadow"?: number;
  // JSON Schema: {"minimum": 0}
  "sizePercent"?: number;
  "style"?: "realDevice" | "basic";
  "zIndex"?: number;
};

export type CreateCanvasArgumentsCompositionMockupOffset = {
  "x": number;
  "y": number;
};

export type CreateCanvasArgumentsCompositionSymbolsItem = {
  "allowsOverflow"?: boolean;
  "color"?: CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  // JSON Schema: {"maxLength": 160, "minLength": 1}
  "symbolID": string;
  "zIndex"?: number;
};

export type CreateCanvasArgumentsCompositionTextsItem = {
  "alignToCanvas"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  "background"?: CreateCanvasArgumentsCompositionTextsItemBackground;
  "color"?: CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  // JSON Schema: {"maxLength": 10000, "minLength": 1}
  "content": string;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  "fitToOneLine"?: boolean;
  // JSON Schema: {"maxLength": 160, "minLength": 1}
  "fontID"?: string;
  // JSON Schema: {"minimum": 0}
  "fontSize"?: number;
  "fontWeight"?: "light" | "regular" | "semibold" | "bold" | "extraBold";
  "italic"?: boolean;
  // JSON Schema: {"maximum": 2, "minimum": 1}
  "lineHeight"?: number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "position"?: CreateCanvasArgumentsCompositionMockupOffset;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  "textAlignment"?: "left" | "center" | "right";
  "underline"?: boolean;
  "zIndex"?: number;
};

export type CreateCanvasArgumentsCompositionTextsItemBackground = {
  // JSON Schema minProperties: 1
  // JSON Schema: {"maximum": 240, "minimum": 0}
  "cornerRadius"?: number;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  // JSON Schema: {"maximum": 240, "minimum": 0}
  "padding"?: number;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
};

export type CreateCanvasArgumentsPlacementVariant0 = {
  "kind": "first";
};

export type CreateCanvasArgumentsPlacementVariant1 = {
  "kind": "last";
};

export type CreateCanvasArgumentsPlacementVariant2 = {
  // JSON Schema: {"format": "uuid"}
  "canvasID": string;
  "kind": "beforeCanvas";
};

export type CreateCanvasArgumentsPlacementVariant3 = {
  // JSON Schema: {"format": "uuid"}
  "canvasID": string;
  "kind": "afterCanvas";
};

export type EditCanvasArguments = {
  // JSON Schema: {"format": "uuid"}
  "canvasID": string;
  "changes": EditCanvasArgumentsChanges;
  // JSON Schema: {"minimum": 1}
  "expectedCanvasRevision": number;
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  "scope"?: EditCanvasArgumentsScope;
};

export type EditCanvasArgumentsChanges = {
  // JSON Schema minProperties: 1
  "add"?: EditCanvasArgumentsChangesAdd;
  "background"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maxItems": 100, "minItems": 1}
  "delete"?: Array<EditCanvasArgumentsChangesDeleteItemVariant0 | EditCanvasArgumentsChangesDeleteItemVariant1 | EditCanvasArgumentsChangesDeleteItemVariant2 | EditCanvasArgumentsChangesDeleteItemVariant3 | EditCanvasArgumentsChangesDeleteItemVariant4 | EditCanvasArgumentsChangesDeleteItemVariant5 | EditCanvasArgumentsChangesDeleteItemVariant6>;
  "group"?: EditCanvasArgumentsChangesGroup;
  "helpers"?: EditCanvasArgumentsChangesHelpers;
  "update"?: EditCanvasArgumentsChangesUpdate;
};

export type EditCanvasArgumentsChangesAdd = {
  // JSON Schema minProperties: 1
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "drawings"?: Array<CreateCanvasArgumentsCompositionDrawingsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "illustrations"?: Array<CreateCanvasArgumentsCompositionIllustrationsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "images"?: Array<CreateCanvasArgumentsCompositionImagesItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "snippets"?: Array<EditCanvasArgumentsChangesAddSnippetsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "symbols"?: Array<CreateCanvasArgumentsCompositionSymbolsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "texts"?: Array<CreateCanvasArgumentsCompositionTextsItem>;
};

export type EditCanvasArgumentsChangesAddSnippetsItem = {
  "border"?: EditCanvasArgumentsChangesAddSnippetsItemBorder;
  // JSON Schema: {"minimum": 80}
  "height"?: number;
  "normalizedCrop": EditCanvasArgumentsChangesAddSnippetsItemNormalizedCrop;
  "position"?: EditCanvasArgumentsChangesAddSnippetsItemPosition;
  "shadow"?: EditCanvasArgumentsChangesAddSnippetsItemShadow;
  // JSON Schema: {"minimum": 80}
  "width"?: number;
};

export type EditCanvasArgumentsChangesAddSnippetsItemBorder = {
  // JSON Schema minProperties: 1
  "color"?: CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  // JSON Schema: {"minimum": 0}
  "radius"?: number;
  // JSON Schema: {"minimum": 0}
  "width"?: number;
};

export type EditCanvasArgumentsChangesAddSnippetsItemNormalizedCrop = {
  // JSON Schema: {"maximum": 1, "minimum": 0.01}
  "height": number;
  // JSON Schema: {"maximum": 1, "minimum": 0.01}
  "width": number;
  // JSON Schema: {"exclusiveMaximum": 1, "minimum": 0}
  "x": number;
  // JSON Schema: {"exclusiveMaximum": 1, "minimum": 0}
  "y": number;
};

export type EditCanvasArgumentsChangesAddSnippetsItemPosition = {
  // JSON Schema minProperties: 1
  "x"?: number;
  "y"?: number;
};

export type EditCanvasArgumentsChangesAddSnippetsItemShadow = {
  // JSON Schema minProperties: 1
  // JSON Schema: {"minimum": 0}
  "blur"?: number;
  "color"?: CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  "offsetY"?: number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
};

export type EditCanvasArgumentsChangesDeleteItemVariant0 = {
  // JSON Schema: {"format": "uuid"}
  "id": string;
  "kind": "text";
};

export type EditCanvasArgumentsChangesDeleteItemVariant1 = {
  // JSON Schema: {"format": "uuid"}
  "id": string;
  "kind": "symbol";
};

export type EditCanvasArgumentsChangesDeleteItemVariant2 = {
  // JSON Schema: {"format": "uuid"}
  "id": string;
  "kind": "illustration";
};

export type EditCanvasArgumentsChangesDeleteItemVariant3 = {
  // JSON Schema: {"format": "uuid"}
  "id": string;
  "kind": "drawing";
};

export type EditCanvasArgumentsChangesDeleteItemVariant4 = {
  // JSON Schema: {"format": "uuid"}
  "id": string;
  "kind": "image";
};

export type EditCanvasArgumentsChangesDeleteItemVariant5 = {
  "kind": "mockup";
};

export type EditCanvasArgumentsChangesDeleteItemVariant6 = {
  // JSON Schema: {"format": "uuid"}
  "id": string;
  "kind": "featureShowcaseSnippet";
};

export type EditCanvasArgumentsChangesGroup = {
  // JSON Schema minProperties: 1
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "create"?: Array<EditCanvasArgumentsChangesGroupCreateItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "duplicate"?: Array<EditCanvasArgumentsChangesGroupDuplicateItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "moveByDelta"?: Array<EditCanvasArgumentsChangesGroupMoveByDeltaItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "ungroup"?: Array<EditCanvasArgumentsChangesGroupUngroupItem>;
};

export type EditCanvasArgumentsChangesGroupCreateItem = {
  // JSON Schema: {"maxItems": 100, "minItems": 2}
  "members": Array<EditCanvasArgumentsChangesDeleteItemVariant0 | EditCanvasArgumentsChangesDeleteItemVariant1 | EditCanvasArgumentsChangesDeleteItemVariant2 | EditCanvasArgumentsChangesDeleteItemVariant3 | EditCanvasArgumentsChangesDeleteItemVariant4 | EditCanvasArgumentsChangesDeleteItemVariant5>;
};

export type EditCanvasArgumentsChangesGroupDuplicateItem = {
  // JSON Schema: {"format": "uuid"}
  "groupID": string;
};

export type EditCanvasArgumentsChangesGroupMoveByDeltaItem = {
  "deltaX": number;
  "deltaY": number;
  // JSON Schema: {"format": "uuid"}
  "groupID": string;
};

export type EditCanvasArgumentsChangesGroupUngroupItem = {
  // JSON Schema: {"format": "uuid"}
  "groupID": string;
};

export type EditCanvasArgumentsChangesHelpers = {
  // JSON Schema minProperties: 1
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "alignReferencesToCanvas"?: Array<EditCanvasArgumentsChangesHelpersAlignReferencesToCanvasItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "duplicateReferences"?: Array<EditCanvasArgumentsChangesHelpersDuplicateReferencesItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "moveReferencesByDelta"?: Array<EditCanvasArgumentsChangesHelpersMoveReferencesByDeltaItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "textStyleTransfer"?: Array<EditCanvasArgumentsChangesHelpersTextStyleTransferItem>;
};

export type EditCanvasArgumentsChangesHelpersAlignReferencesToCanvasItem = {
  // JSON Schema minProperties: 2
  "horizontal"?: "left" | "center" | "right";
  // JSON Schema: {"maxItems": 100, "minItems": 1, "uniqueItems": true}
  "references": Array<EditCanvasArgumentsChangesDeleteItemVariant0 | EditCanvasArgumentsChangesDeleteItemVariant1 | EditCanvasArgumentsChangesDeleteItemVariant2 | EditCanvasArgumentsChangesDeleteItemVariant3 | EditCanvasArgumentsChangesDeleteItemVariant4>;
  "vertical"?: "top" | "center" | "bottom";
};

export type EditCanvasArgumentsChangesHelpersDuplicateReferencesItem = {
  // JSON Schema: {"maxItems": 100, "minItems": 1, "uniqueItems": true}
  "references": Array<EditCanvasArgumentsChangesDeleteItemVariant0 | EditCanvasArgumentsChangesDeleteItemVariant1 | EditCanvasArgumentsChangesDeleteItemVariant2 | EditCanvasArgumentsChangesDeleteItemVariant3 | EditCanvasArgumentsChangesDeleteItemVariant4>;
};

export type EditCanvasArgumentsChangesHelpersMoveReferencesByDeltaItem = {
  "deltaX": number;
  "deltaY": number;
  // JSON Schema: {"maxItems": 100, "minItems": 1, "uniqueItems": true}
  "references": Array<EditCanvasArgumentsChangesDeleteItemVariant0 | EditCanvasArgumentsChangesDeleteItemVariant1 | EditCanvasArgumentsChangesDeleteItemVariant2 | EditCanvasArgumentsChangesDeleteItemVariant3 | EditCanvasArgumentsChangesDeleteItemVariant4 | EditCanvasArgumentsChangesDeleteItemVariant5>;
};

export type EditCanvasArgumentsChangesHelpersTextStyleTransferItem = {
  "source": EditCanvasArgumentsChangesDeleteItemVariant0;
  // JSON Schema: {"maxItems": 100, "minItems": 1, "uniqueItems": true}
  "targets": Array<EditCanvasArgumentsChangesDeleteItemVariant0>;
};

export type EditCanvasArgumentsChangesUpdate = {
  // JSON Schema minProperties: 1
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "drawings"?: Array<EditCanvasArgumentsChangesUpdateDrawingsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "illustrations"?: Array<EditCanvasArgumentsChangesUpdateIllustrationsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "images"?: Array<EditCanvasArgumentsChangesUpdateImagesItem>;
  "mockup"?: EditCanvasArgumentsChangesUpdateMockup;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "snippets"?: Array<EditCanvasArgumentsChangesUpdateSnippetsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "symbols"?: Array<EditCanvasArgumentsChangesUpdateSymbolsItem>;
  // JSON Schema: {"maxItems": 50, "minItems": 1}
  "texts"?: Array<EditCanvasArgumentsChangesUpdateTextsItem>;
};

export type EditCanvasArgumentsChangesUpdateDrawingsItem = {
  // JSON Schema minProperties: 2
  "allowsOverflow"?: boolean;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant3;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "zIndex"?: number;
};

export type EditCanvasArgumentsChangesUpdateIllustrationsItem = {
  // JSON Schema minProperties: 2
  "allowsOverflow"?: boolean;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant2;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "zIndex"?: number;
};

export type EditCanvasArgumentsChangesUpdateImagesItem = {
  // JSON Schema minProperties: 2
  "allowsOverflow"?: boolean;
  // JSON Schema: {"minimum": 0}
  "cornerRadius"?: number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionImagesItemPlacement;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant4;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "zIndex"?: number;
};

export type EditCanvasArgumentsChangesUpdateMockup = {
  // JSON Schema minProperties: 2
  "allowsOverflow"?: boolean;
  // JSON Schema: {"maxLength": 240, "minLength": 1}
  "deviceDefinitionID"?: string;
  "isVisible"?: boolean;
  "offset"?: CreateCanvasArgumentsCompositionMockupOffset;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant5;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationXDegrees"?: number;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationYDegrees"?: number;
  // JSON Schema: {"maximum": 100, "minimum": 0}
  "shadow"?: number;
  // JSON Schema: {"minimum": 0}
  "sizePercent"?: number;
  "style"?: "realDevice" | "basic";
  "zIndex"?: number;
};

export type EditCanvasArgumentsChangesUpdateSnippetsItem = {
  // JSON Schema minProperties: 2
  "border"?: EditCanvasArgumentsChangesAddSnippetsItemBorder;
  // JSON Schema: {"minimum": 80}
  "height"?: number;
  "normalizedCrop"?: EditCanvasArgumentsChangesAddSnippetsItemNormalizedCrop;
  "position"?: EditCanvasArgumentsChangesAddSnippetsItemPosition;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant6;
  "shadow"?: EditCanvasArgumentsChangesAddSnippetsItemShadow;
  // JSON Schema: {"minimum": 80}
  "width"?: number;
};

export type EditCanvasArgumentsChangesUpdateSymbolsItem = {
  // JSON Schema minProperties: 2
  "allowsOverflow"?: boolean;
  "color"?: CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "placement"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant1;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  // JSON Schema: {"minimum": 0}
  "size"?: number;
  "zIndex"?: number;
};

export type EditCanvasArgumentsChangesUpdateTextsItem = {
  // JSON Schema minProperties: 2
  "alignToCanvas"?: CreateCanvasArgumentsCompositionDrawingsItemPlacement;
  "background"?: CreateCanvasArgumentsCompositionTextsItemBackground;
  "color"?: CreateCanvasArgumentsCompositionBackgroundVariant0Color;
  // JSON Schema: {"maxLength": 10000, "minLength": 1}
  "content"?: string;
  "fill"?: CreateCanvasArgumentsCompositionBackgroundVariant0 | CreateCanvasArgumentsCompositionBackgroundVariant1;
  "fitToOneLine"?: boolean;
  // JSON Schema: {"maxLength": 160, "minLength": 1}
  "fontID"?: string;
  // JSON Schema: {"minimum": 0}
  "fontSize"?: number;
  "fontWeight"?: "light" | "regular" | "semibold" | "bold" | "extraBold";
  "italic"?: boolean;
  // JSON Schema: {"maximum": 2, "minimum": 1}
  "lineHeight"?: number;
  // JSON Schema: {"maximum": 1, "minimum": 0}
  "opacity"?: number;
  "position"?: CreateCanvasArgumentsCompositionMockupOffset;
  "reference": EditCanvasArgumentsChangesDeleteItemVariant0;
  // JSON Schema: {"maximum": 360, "minimum": -360}
  "rotationDegrees"?: number;
  "textAlignment"?: "left" | "center" | "right";
  "underline"?: boolean;
  "zIndex"?: number;
};

export type EditCanvasArgumentsScope = {
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "locale": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "specification": string;
};

export type InspectLocalizationArguments = {
  // JSON Schema: {"minimum": 0}
  "cursor"?: number;
  // JSON Schema: {"maximum": 50, "minimum": 1}
  "limit"?: number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef"?: string;
  "sourceMetadata"?: InspectLocalizationArgumentsSourceMetadata;
  // JSON Schema: {"maxLength": 128, "minLength": 1}
  "targetIntent"?: string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "targetLocale"?: string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID"?: string;
};

export type InspectLocalizationArgumentsSourceMetadata = {
  "mode": "observe" | "validate" | "reconcile";
  // JSON Schema: {"maxItems": 6}
  "patch"?: Array<InspectLocalizationArgumentsSourceMetadataPatchItem>;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "resolvedSourceLanguage"?: string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef"?: string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID"?: string;
  "transactionMode"?: "fill" | "update";
};

export type InspectLocalizationArgumentsSourceMetadataPatchItem = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "authorizationRef"?: string;
  "field": "appName" | "subtitle" | "promotionalText" | "description" | "whatsNew" | "keywords";
  "operation": "set" | "clear";
  // JSON Schema: {"maxLength": 65536}
  "value"?: string;
};

export type ApplyLocalizationArgumentsVariant0 = {
  // JSON Schema: {"maxItems": 100}
  "canvases"?: Array<ApplyLocalizationArgumentsVariant0CanvasesItem>;
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"maxItems": 6}
  "metadata"?: Array<ApplyLocalizationArgumentsVariant0MetadataItem>;
  "mode": "create";
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 2, "pattern": "^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$"}
  "resolvedSourceLanguage"?: string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
  // JSON Schema: {"maxLength": 64, "minLength": 2, "pattern": "^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$"}
  "sourceLocale": string;
  // JSON Schema: {"maxItems": 100}
  "sources"?: Array<ApplyLocalizationArgumentsVariant0SourcesItem>;
  // JSON Schema: {"maxLength": 64, "minLength": 2, "pattern": "^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$"}
  "targetLocale": string;
  // JSON Schema: {"maxItems": 500}
  "text"?: Array<ApplyLocalizationArgumentsVariant0TextItem>;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID": string;
};

export type ApplyLocalizationArgumentsVariant0CanvasesItem = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "canvasID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "specification": string;
};

export type ApplyLocalizationArgumentsVariant0MetadataItem = {
  "content": ApplyLocalizationArgumentsVariant0MetadataItemContent;
  "field": "appName" | "subtitle" | "promotionalText" | "description" | "keywords" | "whatsNew";
};

export type ApplyLocalizationArgumentsVariant0MetadataItemContent = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "authorizationRef"?: string;
  "decision": "value" | "preserve";
  // JSON Schema: {"maxItems": 64}
  "exceptions"?: Array<ApplyLocalizationArgumentsVariant0MetadataItemContentExceptionsItem>;
  "overwrite"?: boolean;
  // JSON Schema: {"maxLength": 65536}
  "value"?: string;
};

export type ApplyLocalizationArgumentsVariant0MetadataItemContentExceptionsItem = {
  // JSON Schema: {"minimum": 0}
  "occurrence": number;
  // JSON Schema: {"maxLength": 4096, "minLength": 1}
  "spelling": string;
};

export type ApplyLocalizationArgumentsVariant0SourcesItem = {
  "address": ApplyLocalizationArgumentsVariant0CanvasesItem;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "authorizedSourceRef"?: string;
  "decision": "primary" | "authorized";
};

export type ApplyLocalizationArgumentsVariant0TextItem = {
  "address": ApplyLocalizationArgumentsVariant0TextItemAddress;
  "content": ApplyLocalizationArgumentsVariant0TextItemContent;
};

export type ApplyLocalizationArgumentsVariant0TextItemAddress = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "canvasID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "specification": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "textID": string;
};

export type ApplyLocalizationArgumentsVariant0TextItemContent = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "authorizationRef"?: string;
  "decision": "value" | "preserve";
  // JSON Schema: {"maxItems": 64}
  "exceptions"?: Array<ApplyLocalizationArgumentsVariant0MetadataItemContentExceptionsItem>;
  "overwrite"?: boolean;
  // JSON Schema: {"maxLength": 65536}
  "value"?: string;
};

export type ApplyLocalizationArgumentsVariant1 = {
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"maxItems": 6}
  "metadata"?: Array<ApplyLocalizationArgumentsVariant0MetadataItem>;
  "mode": "update";
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 2, "pattern": "^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$"}
  "resolvedSourceLanguage"?: string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
  // JSON Schema: {"maxLength": 64, "minLength": 2, "pattern": "^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$"}
  "sourceLocale": string;
  // JSON Schema: {"maxItems": 100}
  "sources"?: Array<ApplyLocalizationArgumentsVariant0SourcesItem>;
  // JSON Schema: {"maxLength": 64, "minLength": 2, "pattern": "^[A-Za-z]{2,3}(-[A-Za-z0-9]{2,8})*$"}
  "targetLocale": string;
  // JSON Schema: {"maxItems": 500}
  "text"?: Array<ApplyLocalizationArgumentsVariant0TextItem>;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID": string;
};

export type SetSourceMetadataArguments = {
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  "mode": "fill" | "update";
  // JSON Schema: {"maxItems": 6}
  "patch": Array<InspectLocalizationArgumentsSourceMetadataPatchItem>;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "resolvedSourceLanguage": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "sourceLocale": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID": string;
};

export type InspectLocalizationResultVariant0 = {
  // JSON Schema: {"maxItems": 10000}
  "availableLocales": Array<InspectLocalizationResultVariant0AvailableLocalesItem>;
  "completeness": InspectLocalizationResultVariant0Completeness;
  // JSON Schema: {"maxItems": 128}
  "diagnostics": Array<string>;
  "localeAuthority": "project" | "selected_target";
  "pagination": InspectLocalizationResultVariant0Pagination;
  "persistence": InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"maxItems": 10000}
  "preservedWords": Array<string>;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
  "sourceLanguageRequired": boolean;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "sourceLocale": string;
  "targetExists": boolean;
  "targetLocale": string | null;
  "targetResolution": InspectLocalizationResultVariant0TargetResolution;
  "transaction"?: InspectLocalizationResultVariant0TransactionVariant0 | InspectLocalizationResultVariant0TransactionVariant1;
  // JSON Schema: {"maxItems": 50}
  "values": Array<InspectLocalizationResultVariant0ValuesItemVariant0 | InspectLocalizationResultVariant0ValuesItemVariant1 | InspectLocalizationResultVariant0ValuesItemVariant2>;
};

export type InspectLocalizationResultVariant0AvailableLocalesItem = {
  "available": boolean;
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "displayName": string;
  "existsInProject": boolean;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "id": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "language": string;
  // JSON Schema: {"maxLength": 128, "minLength": 1}
  "languageName": string;
  "region": string | null;
  "script": string | null;
};

export type InspectLocalizationResultVariant0Completeness = {
  "silentTruncation": boolean;
  "snapshotBound": boolean;
  // JSON Schema: {"minimum": 0}
  "totalRecords": number;
};

export type InspectLocalizationResultVariant0Pagination = {
  "complete": boolean;
  "nextCursor": number | null;
  // JSON Schema: {"minimum": 0}
  "offset": number;
  // JSON Schema: {"minimum": 0}
  "returned": number;
  // JSON Schema: {"minimum": 0}
  "total": number;
};

export type InspectLocalizationResultVariant0Persistence = {
  // JSON Schema: {"minimum": 0}
  "committedGeneration": number;
  "needsUserAction": boolean;
  "reason"?: "chooseDestination" | "authorizeAccess" | "destinationUnavailable" | "serializationFailed" | "writeFailed" | null;
  "savedGeneration"?: number | null;
  "savingGeneration"?: number | null;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "sessionID": string;
  "state": "pending" | "saving" | "saved" | "failed" | "needsUserAction";
};

export type InspectLocalizationResultVariant0TargetResolution = {
  // JSON Schema: {"maxItems": 10000}
  "candidates": Array<string>;
  "status": "discovery" | "resolved" | "target_locale_ambiguous" | "target_locale_unavailable";
};

export type InspectLocalizationResultVariant0TransactionVariant0 = {
  "committedGeneration": number | null;
  // JSON Schema: {"minimum": 1}
  "committedRevision": number;
  "isApplied": boolean;
  "isPersisted": boolean;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  "replayAllowed": boolean;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "targetLocale": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID": string;
};

export type InspectLocalizationResultVariant0TransactionVariant1 = {
  "replayAllowed": boolean;
  "status": "not_found_in_session";
};

export type InspectLocalizationResultVariant0ValuesItemVariant0 = {
  "address": ApplyLocalizationArgumentsVariant0TextItemAddress;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "authorizationRef": string;
  // JSON Schema: {"maxItems": 128}
  "diagnostics": Array<string>;
  "kind": "text";
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "locale": string;
  // JSON Schema: {"maxItems": 10000}
  "preservedOccurrences": Array<string>;
  "requiresOverwriteAuthorization": boolean;
  "sourceAddress"?: ApplyLocalizationArgumentsVariant0TextItemAddress;
  "sourceValue": string | null;
  "state": "inherited" | "translated" | "edited" | "untracked" | "unmatched";
  // JSON Schema: {"maxLength": 393216}
  "value": string;
};

export type InspectLocalizationResultVariant0ValuesItemVariant1 = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "authorizationRef": string;
  // JSON Schema: {"maxLength": 128, "minLength": 1}
  "counting": string;
  // JSON Schema: {"maxItems": 128}
  "diagnostics": Array<string>;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "field": string;
  "kind": "metadata";
  // JSON Schema: {"minimum": 1}
  "limit": number;
  // JSON Schema: {"maxItems": 10000}
  "preservedOccurrences": Array<string>;
  "requiresOverwriteAuthorization": boolean;
  "sourceValue": string | null;
  "state": "inherited" | "translated" | "edited" | "untracked" | "unmatched";
  "targetValue": string | null;
  "valid": boolean;
};

export type InspectLocalizationResultVariant0ValuesItemVariant2 = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "canvasID": string;
  "currentSourceChecksum": string | null;
  "hasScreenshotSource": boolean;
  "kind": "canvas";
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "locale": string;
  "primarySourceChecksum": string | null;
  "sourceCanvasID": string | null;
  "sourceRelationship": "source" | "durable_mapping" | "unmatched";
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "specification": string;
  // JSON Schema: {"minimum": 0}
  "textCount": number;
};

export type InspectLocalizationResultVariant1 = {
  // JSON Schema: {"maxItems": 10000}
  "availableLocales": Array<string>;
  "candidateValidation": InspectLocalizationResultVariant1CandidateValidationVariant0 | null;
  "completeness": InspectLocalizationResultVariant1Completeness;
  // JSON Schema: {"maxItems": 6, "minItems": 6}
  "fields": Array<InspectLocalizationResultVariant1FieldsItem>;
  "kind": "source_metadata";
  "localeAuthority": "project" | "selected_target";
  "metadataEntitlement": InspectLocalizationResultVariant1MetadataEntitlement;
  "operation": "observe" | "validate" | "reconcile";
  "persistence": InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"maxItems": 10000}
  "preservedWords": Array<string>;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  "resolvedSourceLanguage": string | null;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
  "sourceLanguageProvenance": "target_primary" | "source_locale" | "explicit" | "unresolved";
  "sourceLanguageRequired": boolean;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "sourceLocale": string;
  "targetContext": InspectLocalizationResultVariant1TargetContext;
  "transaction": InspectLocalizationResultVariant1TransactionVariant0 | InspectLocalizationResultVariant0TransactionVariant1 | null;
  "whatsNewApplicability": "applicable" | "not_applicable" | "unknown";
};

export type InspectLocalizationResultVariant1CandidateValidationVariant0 = {
  // JSON Schema: {"maxItems": 6}
  "fields": Array<InspectLocalizationResultVariant1CandidateValidationVariant0FieldsItem>;
  "historyChanged": boolean;
  "mutation": "none";
  "overwriteAuthorizationMinted": boolean;
  "persistenceGenerationChanged": boolean;
  "revisionChanged": boolean;
  "valid": boolean;
};

export type InspectLocalizationResultVariant1CandidateValidationVariant0FieldsItem = {
  // JSON Schema: {"minimum": 0}
  "count": number;
  // JSON Schema: {"maxItems": 16}
  "diagnostics": Array<InspectLocalizationResultVariant1CandidateValidationVariant0FieldsItemDiagnosticsItem>;
  "field": "appName" | "subtitle" | "promotionalText" | "description" | "whatsNew" | "keywords";
  // JSON Schema: {"minimum": 1}
  "limit": number;
  "valid": boolean;
};

export type InspectLocalizationResultVariant1CandidateValidationVariant0FieldsItemDiagnosticsItem = {
  // JSON Schema: {"maxLength": 128, "minLength": 1}
  "code": string;
  // JSON Schema: {"maxLength": 2048, "minLength": 1}
  "message": string;
};

export type InspectLocalizationResultVariant1Completeness = {
  "complete": boolean;
  "silentTruncation": boolean;
  "snapshotBound": boolean;
};

export type InspectLocalizationResultVariant1FieldsItem = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "authorizationRef": string;
  // JSON Schema: {"minimum": 0}
  "count": number;
  // JSON Schema: {"maxItems": 16}
  "diagnostics": Array<InspectLocalizationResultVariant1CandidateValidationVariant0FieldsItemDiagnosticsItem>;
  "field": "appName" | "subtitle" | "promotionalText" | "description" | "whatsNew" | "keywords";
  // JSON Schema: {"maxLength": 128, "minLength": 1}
  "label": string;
  // JSON Schema: {"minimum": 1}
  "limit": number;
  "state": "missing" | "empty" | "existing";
  "valid": boolean;
  // JSON Schema: {"maxLength": 393216}
  "value": string;
};

export type InspectLocalizationResultVariant1MetadataEntitlement = {
  "available": boolean;
  "supported": boolean;
  "unavailableReason": "requires_pro" | "entitlement_unknown" | null;
};

export type InspectLocalizationResultVariant1TargetContext = {
  "appAssociated": boolean;
  "primaryLocale": string | null;
  "verification": "NO_TARGET" | "TARGET_ASSOCIATED_BUT_NOT_FRESHLY_VERIFIED";
  "versionAssociated": boolean;
};

export type InspectLocalizationResultVariant1TransactionVariant0 = {
  // JSON Schema: {"minimum": 0}
  "committedGeneration": number;
  // JSON Schema: {"minimum": 1}
  "committedRevision": number;
  // JSON Schema: {"minimum": 0}
  "currentEffectGeneration": number;
  "isApplied": boolean;
  "isPersisted": boolean;
  "outcome": "applied" | "no_change";
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "persistenceSessionID": string;
  "replayAllowed": boolean;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "transactionID": string;
};

export type ApplyLocalizationResult = {
  // JSON Schema: {"maxItems": 100}
  "affectedCanvasIDs": Array<string>;
  // JSON Schema: {"maxItems": 6}
  "affectedMetadataFields": Array<string>;
  // JSON Schema: {"maxItems": 128}
  "diagnostics": Array<string>;
  // JSON Schema: {"maxItems": 100}
  "mappings": Array<ApplyLocalizationResultMappingsItem>;
  "persistence": InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  "status": "applied";
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "targetLocale": string;
  "transaction": InspectLocalizationResultVariant0TransactionVariant0;
  "visualReviewRequired": boolean;
};

export type ApplyLocalizationResultMappingsItem = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "sourceCanvasID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "sourceLocale": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "specification": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "targetCanvasID": string;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "targetLocale": string;
  // JSON Schema: {"maxItems": 500}
  "texts": Array<ApplyLocalizationResultMappingsItemTextsItem>;
};

export type ApplyLocalizationResultMappingsItemTextsItem = {
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "sourceTextID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "targetTextID": string;
};

export type SetSourceMetadataResult = {
  "canonical": InspectLocalizationResultVariant1;
  "persistence": InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  "reconciliationRequired": boolean;
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "sourceLocale": string;
  "status": "applied" | "no_change";
  "transaction": InspectLocalizationResultVariant1TransactionVariant0;
};

export type ListProjectsArguments = {
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "cursor"?: string;
  // JSON Schema: {"maxLength": 4096, "minLength": 1}
  "name"?: string;
};

export type ListProjectsResult = {
  "nextCursor": string | null;
  // JSON Schema: {"maxItems": 50}
  "projects": Array<ListProjectsResultProjectsItem>;
};

export type ListProjectsResultProjectsItem = {
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "candidateRef": string;
  "isOpen": boolean;
  "name": string;
  // JSON Schema: {"minimum": 0}
  "openSessionCount": number;
  "resolution": "EXACT_UNIQUE" | "AMBIGUOUS";
};

export type OpenProjectArguments = {
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "candidateRef": string;
};

export type OpenProjectResultVariant0 = {
  "committedGeneration": number | null;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  "status": "OPENED";
};

export type OpenProjectResultVariant1 = {
  "reason": "PROJECT_ACCESS_REQUIRED" | "USER_ACTION_REQUIRED" | "INVALID_PROJECT_REF" | "STALE_PROJECT_REF" | "AMBIGUOUS_PROJECT" | "PROJECT_IDENTITY_MISMATCH" | "PROJECT_SESSION_TIMEOUT" | "CANCELLED";
  "status": "USER_ACTION_REQUIRED" | "REFUSED";
};

export type CreateProjectArguments = {
  // JSON Schema: {"maxLength": 36, "minLength": 36, "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"}
  "creationAttemptID": string;
  // JSON Schema: {"maxLength": 120, "minLength": 1}
  "name": string;
};

export type CreateProjectResultVariant1 = {
  "reason": "INVALID_PROJECT_NAME" | "INVALID_CREATION_ATTEMPT" | "CREATION_ATTEMPT_EXPIRED" | "CREATION_INTENT_MISMATCH" | "PROJECT_NAME_CONFLICT" | "PROJECTS_DESTINATION_UNAVAILABLE" | "CREATION_RECEIPT_UNAVAILABLE" | "CREATION_RECEIPT_CAPACITY" | "CREATION_UNRESOLVED" | "CREATION_FAILED" | "TEMPLATE_NOT_FOUND" | "TEMPLATE_AMBIGUOUS";
  "status": "REFUSED" | "UNRESOLVED";
};

export type ListProjectTemplatesArguments = {
  // JSON Schema: {"maxLength": 120, "minLength": 1}
  "query"?: string;
};

export type ListProjectTemplatesResult = {
  // JSON Schema: {"maxItems": 100}
  "templates": Array<ListProjectTemplatesResultTemplatesItem>;
};

export type ListProjectTemplatesResultTemplatesItem = {
  // JSON Schema: {"minimum": 1}
  "canvasCount": number;
  "category": string;
  "name": string;
  "platform": string;
  "resolution": "EXACT_UNIQUE" | "AMBIGUOUS";
  "screenshotSpecification": string;
  "templateID": string;
};

export type CreateProjectFromTemplateArguments = {
  // JSON Schema: {"maxLength": 36, "minLength": 36, "pattern": "^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$"}
  "creationAttemptID": string;
  // JSON Schema: {"maxLength": 120, "minLength": 1}
  "name": string;
  // JSON Schema: {"maxLength": 240, "minLength": 1, "pattern": "^[A-Za-z0-9][A-Za-z0-9._-]{0,239}$"}
  "templateID": string;
};

export type ReadTargetContextArguments = {
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
};

export type ReadTargetContextResult = {
  // JSON Schema: {"maxItems": 200}
  "candidates": Array<ReadTargetContextResultCandidatesItem>;
  "context": ReadTargetContextResultContext;
  "contract": "mcp-target-01";
  "exhaustiveAccountDiscovery": false;
  "expectedContext": ReadTargetContextResultExpectedContext;
  "localEffect": boolean;
  "observedCandidate": ReadTargetContextResultContext | null;
  "persistence": ReadTargetContextResultPersistence;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  "reason": "candidate_observed_not_bound" | "busy" | "staleContext" | "selectionChanged" | "invalidCandidate" | "unavailableHost" | "cancelled" | "invalidResponse" | "credential_interaction_unavailable" | "credential_access_cancelled" | "credential_context_changed" | "asc_read_failed" | null;
  "reconciliationRequired": boolean;
  "status": "TARGET_CONTEXT_AVAILABLE" | "NO_TARGET_CONFIGURED" | "TARGET_ASSOCIATED_BUT_NOT_FRESHLY_VERIFIED" | "CANDIDATE_OBSERVED_NOT_BOUND" | "APP_NOT_FOUND_IN_LOADED_APPS" | "APP_AMBIGUOUS" | "PRODUCT_DECISION_REQUIRED" | "NO_USABLE_VERSION" | "USER_SECURITY_ACTION_REQUIRED" | "CREDENTIALS_UNAVAILABLE" | "ASC_UNAVAILABLE" | "TARGET_NO_LONGER_AVAILABLE" | "FAILED";
  "verification": "NO_TARGET" | "TARGET_ASSOCIATED_BUT_NOT_FRESHLY_VERIFIED" | "VERIFIED_TARGET_CONTEXT";
  // JSON Schema: {"maxItems": 200}
  "versions": Array<ReadTargetContextResultContextVersionVariant0>;
};

export type ReadTargetContextResultCandidatesItem = {
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "appID": string;
  "bundleID": string | null;
  // JSON Schema: {"maxLength": 1024}
  "name": string;
  "primaryLanguage": string | null;
};

export type ReadTargetContextResultContext = {
  "app": ReadTargetContextResultCandidatesItem | null;
  // JSON Schema: {"maxItems": 200}
  "locales": Array<ReadTargetContextResultContextLocalesItem>;
  "version": ReadTargetContextResultContextVersionVariant0 | null;
};

export type ReadTargetContextResultContextLocalesItem = {
  // JSON Schema: {"maxLength": 1024}
  "locale": string;
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "localizationID": string;
};

export type ReadTargetContextResultContextVersionVariant0 = {
  "platform": string | null;
  "state": string | null;
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "versionID": string;
  // JSON Schema: {"maxLength": 1024}
  "versionString": string;
};

export type ReadTargetContextResultExpectedContext = {
  "appID": string | null;
  // JSON Schema: {"minimum": 0}
  "projectRevision": number;
  "versionID": string | null;
};

export type ReadTargetContextResultPersistence = {
  // JSON Schema: {"minimum": 0}
  "committedGeneration": number;
  "needsUserAction": boolean;
  "reason": "chooseDestination" | "authorizeAccess" | "destinationUnavailable" | "serializationFailed" | "writeFailed" | null;
  "savedGeneration": number | null;
  "savingGeneration": number | null;
  "state": "pending" | "saving" | "saved" | "failed" | "needsUserAction";
};

export type RefreshTargetContextArguments = {
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "candidateAppID"?: string;
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "exactAppName"?: string;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "versionID"?: string;
};

export type BindTargetArguments = {
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "appID": string;
  "expectedContext": ReadTargetContextResultExpectedContext;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 256, "minLength": 1}
  "versionID": string;
};

export type AdaptScreenshotSpecArguments = {
  "destinationSpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
};

export type AdaptScreenshotSpecResult = {
  "activeLocale": string;
  "activeSpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  // JSON Schema: {"minimum": 0}
  "committedGeneration": number;
  "completeness": InspectLocalizationResultVariant0Completeness;
  "contract": "mcp-adaptive-01";
  "created": boolean;
  "defaultLocale": string;
  "destinationSpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  "exists": boolean;
  // JSON Schema: {"maxItems": 50}
  "locales": Array<AdaptScreenshotSpecResultLocalesItem>;
  "pagination": InspectLocalizationResultVariant0Pagination;
  "persistence": InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"maxItems": 50}
  "primaryLocales": Array<AdaptScreenshotSpecResultLocalesItem>;
  "primarySpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  "selectionChanged": boolean;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
  "status": "applied";
};

export type AdaptScreenshotSpecResultLocalesItem = {
  // JSON Schema: {"maxItems": 50}
  "canvases": Array<AdaptScreenshotSpecResultLocalesItemCanvasesItem>;
  "locale": string;
};

export type AdaptScreenshotSpecResultLocalesItemCanvasesItem = {
  "activeCanvasRevision": number | null;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "canvasID": string;
  "customName": string | null;
  "hasCaptureProvenance": boolean;
  "hasDescriptor": boolean;
  "hasSource": boolean;
  "mockupCompatible": boolean;
  "mockupVisible": boolean;
  // JSON Schema: {"minimum": 0}
  "order": number;
  "resolvedMockupID": string | null;
  // JSON Schema: {"minimum": 1}
  "scopedRevision": number;
  "storedMockupID": string | null;
};

export type InspectProjectArgumentsVariant0 = {
  [key: string]: never;
};

export type InspectProjectArgumentsVariant1 = {
  // JSON Schema: {"minimum": 0}
  "cursor"?: number;
  "destinationSpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  // JSON Schema: {"maximum": 50, "minimum": 1}
  "limit"?: number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef"?: string;
};

export type InspectProjectResultVariant0 = {
  "activeLocale": string;
  "activeSpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  "completeness": InspectLocalizationResultVariant0Completeness;
  "contract": "mcp-adaptive-01";
  "defaultLocale": string;
  "destinationSpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  "exists": boolean;
  // JSON Schema: {"maxItems": 50}
  "locales": Array<AdaptScreenshotSpecResultLocalesItem>;
  "pagination": InspectLocalizationResultVariant0Pagination;
  "persistence": InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"maxItems": 50}
  "primaryLocales": Array<AdaptScreenshotSpecResultLocalesItem>;
  "primarySpecification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectID": string;
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36, "minLength": 36}
  "snapshotRef": string;
};

export type InspectProjectResultVariant1 = {
  // JSON Schema: {"format": "uuid"}
  "activeCanvasID"?: string;
  "activeLocalization": string;
  "activeSpecification": string;
  "canvases": Array<InspectProjectResultVariant1CanvasesItem>;
  "defaultLocalization": string;
  "hasUnsavedChanges": boolean;
  "locales": Array<InspectProjectResultVariant1LocalesItem>;
  "persistence"?: InspectLocalizationResultVariant0Persistence;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  "projectRevision": number;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  "sources": Array<InspectProjectResultVariant1SourcesItem>;
  "title": string;
};

export type InspectProjectResultVariant1CanvasesItem = {
  // JSON Schema: {"format": "uuid"}
  "canvasID": string;
  "customName": string | null;
  "displayName": string;
  "isBlank": boolean;
  "isSelected": boolean;
  "order": number;
  "revision": number;
};

export type InspectProjectResultVariant1LocalesItem = {
  "code": string;
  "hasCanvasData": boolean;
  "isActive": boolean;
  "isDefault": boolean;
  "name": string;
};

export type InspectProjectResultVariant1SourcesItem = {
  // JSON Schema: {"format": "uuid"}
  "canvasID": string;
  "checksum"?: string | null;
  "height"?: number | null;
  "id": string;
  "orientation"?: string | null;
  "slot": string;
  "width"?: number | null;
};

export type ListScreenshotSpecsResult = {
  "defaults": ListScreenshotSpecsResultDefaults;
  "specifications": Array<ListScreenshotSpecsResultSpecificationsItem>;
};

export type ListScreenshotSpecsResultDefaults = {
  "devices": ListScreenshotSpecsResultDefaultsDevices;
  "global": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
};

export type ListScreenshotSpecsResultDefaultsDevices = {
  "iPad": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  "iPhone": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
  "mac": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
};

export type ListScreenshotSpecsResultSpecificationsItem = {
  "device": string;
  "height": number;
  "id": string;
  "name": string;
  "orientation": string;
  "width": number;
};

export type SetScreenshotSourceArgumentsVariant0 = {
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"minimum": 1}
  "expectedTargetCanvasRevision": number;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  "scope"?: SetScreenshotSourceArgumentsVariant0Scope;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "stagedSourceRef": string;
  // JSON Schema: {"format": "uuid"}
  "targetCanvasID": string;
};

export type SetScreenshotSourceArgumentsVariant0Scope = {
  // JSON Schema: {"maxLength": 64, "minLength": 1}
  "locale": string;
  "specification": "iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600";
};

export type SetScreenshotSourceArgumentsVariant1 = {
  // JSON Schema: {"minimum": 1}
  "expectedProjectRevision": number;
  // JSON Schema: {"minimum": 1}
  "expectedTargetCanvasRevision": number;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  "scope"?: SetScreenshotSourceArgumentsVariant0Scope;
  "source": CreateCanvasArgumentsCompositionImagesItemSource | SetScreenshotSourceArgumentsVariant1SourceVariant1;
  // JSON Schema: {"format": "uuid"}
  "targetCanvasID": string;
};

export type SetScreenshotSourceArgumentsVariant1SourceVariant1 = {
  "kind": "authorized";
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "ref": string;
};

export type SetScreenshotSourceResult = {
  "artifactFinalizationState": "consumed" | "pending" | "not_applicable";
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[0-9a-f]{64}$"}
  "checksum": string;
  "diagnostics": Array<SetScreenshotSourceResultDiagnosticsItem>;
  "dimensions": SetScreenshotSourceResultDimensions;
  "operation": "set" | "replace" | "noChange";
  // JSON Schema: {"minimum": 1}
  "projectRevision": number;
  "screenshotSource": SetScreenshotSourceResultScreenshotSource;
  // JSON Schema: {"format": "uuid"}
  "targetCanvasID": string;
  // JSON Schema: {"minimum": 1}
  "targetCanvasRevision": number;
};

export type SetScreenshotSourceResultDiagnosticsItem = {
  // JSON Schema: {"maxItems": 5, "minItems": 1}
  "blockingStates"?: Array<"pending_text_content_edit" | "active_undo_transaction" | "inline_text_edit_in_progress" | "undo_restore_in_progress" | "undo_group_open">;
  "code": string;
  "field"?: string | null;
  "message": string;
  "operationIndex"?: number | null;
  "reference"?: string | null;
  "severity": string;
};

export type SetScreenshotSourceResultDimensions = {
  // JSON Schema: {"minimum": 1}
  "height": number;
  "orientation": "portrait" | "landscape" | "square";
  // JSON Schema: {"minimum": 1}
  "width": number;
};

export type SetScreenshotSourceResultScreenshotSource = {
  // JSON Schema: {"maxLength": 80, "minLength": 1}
  "id": string;
  "slot": "mockup";
};

export type ListMockupsArguments = {
  // JSON Schema: {"maxLength": 4096, "minLength": 1}
  "cursor"?: string;
  // JSON Schema: {"maximum": 100, "minimum": 1}
  "limit"?: number;
  // JSON Schema: {"format": "uuid"}
  "projectID": string;
  // JSON Schema: {"format": "uuid"}
  "projectSessionID": string;
  // JSON Schema: {"maxLength": 120}
  "query"?: string;
  "scope"?: SetScreenshotSourceArgumentsVariant0Scope;
};

export type ListMockupsResult = {
  "items": Array<ListMockupsResultItemsItem>;
  "nextCursor"?: string | null;
  "totalCount": number;
};

export type ListMockupsResultItemsItem = {
  "canonicalHeight": number;
  "canonicalWidth": number;
  "color"?: string | null;
  "deviceName": string;
  "displayName": string;
  "family": string;
  "id": string;
  "maximumRotationX": number;
  "maximumRotationY": number;
  "orientation": string;
  "variantName"?: string | null;
};

export type PrepareShippingArguments = {
  "content"?: "screenshots" | "metadata" | "both" | "infer";
  // JSON Schema: {"maxItems": 50}
  "locales"?: Array<string>;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectSessionID": string;
  // JSON Schema: {"maxItems": 6}
  "specifications"?: Array<"iPhoneDynamicIslandMediumPortrait" | "iPhoneDynamicIslandMediumLandscape" | "iPhone65Portrait" | "iPhone65Landscape" | "iPhone69Portrait" | "iPad13Portrait" | "mac1280x800" | "mac2560x1600">;
};

export type PrepareShippingResult = {
  "continuationRef": string | null;
  "contract": "mcp-shipping-01";
  "operationRef": string | null;
  // JSON Schema: {"maxItems": 4096}
  "outcomes": Array<PrepareShippingResultOutcomesItem>;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectSessionID": string;
  "reason": string | null;
  "reconciling": boolean;
  "review": PrepareShippingResultReviewVariant0 | null;
  "status": "preparing" | "prepared" | "blocked" | "no_change" | "executing" | "applied" | "partial" | "unknown" | "failed" | "cancelled" | "reprepare_required";
};

export type PrepareShippingResultOutcomesItem = {
  // JSON Schema: {"maxLength": 1024}
  "category": string;
  "field": string | null;
  // JSON Schema: {"maxLength": 1024}
  "locale": string;
  "progress": PrepareShippingResultOutcomesItemProgressVariant0 | null;
  "reason": string | null;
  "recoveryState": string | null;
  "rootCause": string | null;
  "specification": string | null;
  // JSON Schema: {"maxLength": 1024}
  "state": string;
};

export type PrepareShippingResultOutcomesItemProgressVariant0 = {
  // JSON Schema: {"minimum": 0}
  "committed": number;
  // JSON Schema: {"minimum": 0}
  "deleted": number;
  // JSON Schema: {"minimum": 0}
  "planned": number;
  // JSON Schema: {"minimum": 0}
  "processed": number;
  // JSON Schema: {"minimum": 0}
  "reserved": number;
  // JSON Schema: {"minimum": 0}
  "uploaded": number;
  // JSON Schema: {"minimum": 0}
  "verified": number;
};

export type PrepareShippingResultReviewVariant0 = {
  // JSON Schema: {"maxLength": 1024}
  "appName": string;
  // JSON Schema: {"maxLength": 1024}
  "content": string;
  // JSON Schema: {"maxItems": 4096}
  "facts": Array<PrepareShippingResultReviewVariant0FactsItem>;
  // JSON Schema: {"maxItems": 4096}
  "locales": Array<string>;
  // JSON Schema: {"maxItems": 4096}
  "localesToCreate": Array<string>;
  // JSON Schema: {"maxLength": 1024}
  "platform": string;
  // JSON Schema: {"maxItems": 4096}
  "screenshots": Array<PrepareShippingResultReviewVariant0ScreenshotsItem>;
  // JSON Schema: {"maxLength": 1024}
  "version": string;
};

export type PrepareShippingResultReviewVariant0FactsItem = {
  "field": string | null;
  // JSON Schema: {"maxLength": 1024}
  "locale": string;
  // JSON Schema: {"maxLength": 1024}
  "reason": string;
  "specification": string | null;
  // JSON Schema: {"maxLength": 1024}
  "state": string;
};

export type PrepareShippingResultReviewVariant0ScreenshotsItem = {
  // JSON Schema: {"minimum": 0}
  "count": number;
  // JSON Schema: {"maxLength": 1024}
  "displayType": string;
  // JSON Schema: {"maxLength": 1024}
  "locale": string;
  // JSON Schema: {"minimum": 0}
  "replacementCount": number;
  // JSON Schema: {"maxLength": 1024}
  "specification": string;
};

export type ExecuteShippingArguments = {
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[a-f0-9]{64}$"}
  "continuationRef"?: string;
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[a-f0-9]{64}$"}
  "operationRef": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectSessionID": string;
};

export type ObserveShippingArguments = {
  // JSON Schema: {"maxLength": 64, "minLength": 64, "pattern": "^[a-f0-9]{64}$"}
  "operationRef": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectID": string;
  // JSON Schema: {"format": "uuid", "maxLength": 36}
  "projectSessionID": string;
};

export type OpenProjectResult = OpenProjectResultVariant0 | OpenProjectResultVariant1;

export type CreateProjectResult = OpenProjectResultVariant0 | CreateProjectResultVariant1;

export type CreateProjectFromTemplateResult = OpenProjectResultVariant0 | CreateProjectResultVariant1;

export type RefreshTargetContextResult = ReadTargetContextResult;

export type BindTargetResult = ReadTargetContextResult;

export type InspectProjectArguments = InspectProjectArgumentsVariant0 | InspectProjectArgumentsVariant1;

export type InspectProjectResult = InspectProjectResultVariant0 | InspectProjectResultVariant1;

export type ListScreenshotSpecsArguments = InspectProjectArgumentsVariant0;

export type SetScreenshotSourceArguments = SetScreenshotSourceArgumentsVariant0 | SetScreenshotSourceArgumentsVariant1;

export type ExecuteShippingResult = PrepareShippingResult;

export type ObserveShippingResult = PrepareShippingResult;
