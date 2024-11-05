import { BlockNoteSchema, filterSuggestionItems } from "@endexai/blocknote-core";
import "@endexai/blocknote-core/style.css";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";
import {
  BlockNoteDefaultUI,
  SuggestionMenuController,
  getDefaultReactSlashMenuItems,
  useCreateBlockNote,
} from "@endexai/blocknote-react";

import { Alert, insertAlert } from "../customblocks/Alert.js";
import { Button } from "../customblocks/Button.js";

type WindowWithProseMirror = Window & typeof globalThis & { ProseMirror: any };

const schema = BlockNoteSchema.create({
  blockSpecs: {
    alert: Alert,
    button: Button,
  },
});

export default function Editor() {
  const editor = useCreateBlockNote({ schema });

  // Give tests a way to get prosemirror instance
  (window as WindowWithProseMirror).ProseMirror = editor?._tiptapEditor;
  // editor.insertBlocks([{
  //   type:""
  // }])
  // TODO: how to customize slashmenu
  return (
    <BlockNoteView editor={editor}>
      <BlockNoteDefaultUI slashMenu={false} />
      <SuggestionMenuController
        getItems={async (query) =>
          filterSuggestionItems(
            [...getDefaultReactSlashMenuItems(editor), insertAlert(editor)],
            query
          )
        }
        // suggestionMenuComponent={MantineSuggestionMenu}
        triggerCharacter="/"
      />
    </BlockNoteView>
  );
}
