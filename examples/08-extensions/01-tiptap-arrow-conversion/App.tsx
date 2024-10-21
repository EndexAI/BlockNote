import "@endexai/blocknote-core/fonts/inter.css";
import { useCreateBlockNote } from "@endexai/blocknote-react";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";
import { ArrowConversionExtension } from "./ArrowConversionExtension";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    _tiptapOptions: {
      extensions: [ArrowConversionExtension]
    }
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
