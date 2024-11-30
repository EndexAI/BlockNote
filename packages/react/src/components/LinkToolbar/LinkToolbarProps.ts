import {
  BlockNoteEditor,
  BlockSchema,
  LinkToolbarState,
  InlineContentSchema,
  StyleSchema,
  UiElementPosition,
} from "@endexai/blocknote-core";

export type LinkToolbarProps = Omit<LinkToolbarState, keyof UiElementPosition> &
  Pick<
    BlockNoteEditor<
      BlockSchema,
      InlineContentSchema,
      StyleSchema
    >["linkToolbar"],
    "deleteLink" | "editLink" | "startHideTimer" | "stopHideTimer"
  >;
