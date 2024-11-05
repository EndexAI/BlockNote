import { BlockNoteSchema, defaultBlockSpecs } from "@endexai/blocknote-core";
import "@endexai/blocknote-core/fonts/inter.css";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";
import { useCreateBlockNote } from "@endexai/blocknote-react";

export default function App() {
  // Disable the Audio and Image blocks from the built-in schema
  const schema = BlockNoteSchema.create({
    blockSpecs: {
      //first pass all the blockspecs from the built in, default block schema
      ...defaultBlockSpecs,

      // disable blocks you don't want
      audio: undefined as any,
      image: undefined as any,
    },
  });

  // Creates a new editor instance with the schema
  const editor = useCreateBlockNote({
    schema,
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
