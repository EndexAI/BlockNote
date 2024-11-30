import { locales } from "@endexai/blocknote-core";
import "@endexai/blocknote-core/fonts/inter.css";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";
import { useCreateBlockNote } from "@endexai/blocknote-react";

export default function App() {
  // We use the English, default dictionary
  const locale = locales["en"];

  // Creates a new editor instance.
  const editor = useCreateBlockNote({
    // We override the `placeholders` in our dictionary
    dictionary: {
      ...locale,
      placeholders: {
        ...locale.placeholders,
        // We override the default placeholder
        default: "This is a custom placeholder",
        // We override the heading placeholder
        heading: "This is a custom heading",
      },
    },
  });

  // Renders the editor instance using a React component.
  return <BlockNoteView editor={editor} />;
}
