import "@endexai/blocknote-core/fonts/inter.css";
import {
  GridSuggestionMenuController,
  useCreateBlockNote,
} from "@endexai/blocknote-react";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    initialContent: [
      {
        type: "paragraph",
        content: "Welcome to this demo!",
      },
      {
        type: "paragraph",
        content: "Press the ':' key to open the Emoji Picker",
      },
      {
        type: "paragraph",
        content: "There are now 5 columns instead of 10",
      },
      {
        type: "paragraph",
      },
    ],
  });

  // Renders the editor instance.
  return (
    <BlockNoteView editor={editor} emojiPicker={false}>
      <GridSuggestionMenuController
        triggerCharacter={":"}
        // Changes the Emoji Picker to only have 5 columns.
        columns={5}
        minQueryLength={2}
      />
    </BlockNoteView>
  );
}
