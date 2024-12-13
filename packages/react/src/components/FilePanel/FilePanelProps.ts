import {
  DefaultInlineContentSchema,
  DefaultStyleSchema,
  FilePanelState,
  InlineContentSchema,
  StyleSchema,
  UiElementPosition,
} from "@endexai/blocknote-core";

export type FilePanelProps<
  I extends InlineContentSchema = DefaultInlineContentSchema,
  S extends StyleSchema = DefaultStyleSchema
> = Omit<FilePanelState<I, S>, keyof UiElementPosition>;
