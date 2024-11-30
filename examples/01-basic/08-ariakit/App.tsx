import "@endexai/blocknote-core/fonts/inter.css";
import { useCreateBlockNote } from "@endexai/blocknote-react";
import { BlockNoteView } from "@endexai/blocknote-ariakit";
import "@endexai/blocknote-ariakit/style.css";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
