import "@endexai/blocknote-core/fonts/inter.css";
import { useCreateBlockNote } from "@endexai/blocknote-react";
import { BlockNoteView } from "@endexai/blocknote-shadcn";
import "@endexai/blocknote-shadcn/style.css";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote();

  // Renders the editor instance using a React component.
  return (
    <BlockNoteView
      editor={editor}
      shadCNComponents={
        {
          // Pass modified ShadCN components from your project here.
          // Otherwise, the default ShadCN components will be used.
        }
      }
    />
  );
}
