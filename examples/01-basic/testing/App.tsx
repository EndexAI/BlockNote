import { uploadToTmpFilesDotOrg_DEV_ONLY } from "@endexai/blocknote-core";
import "@endexai/blocknote-core/fonts/inter.css";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";
import { useCreateBlockNote } from "@endexai/blocknote-react";

export default function App() {
  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    uploadFile: uploadToTmpFilesDotOrg_DEV_ONLY,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
