import "@endexai/blocknote-core/fonts/inter.css";
import { BlockNoteView } from "@endexai/blocknote-mantine";
import "@endexai/blocknote-mantine/style.css";
import {
  DragHandleButton,
  SideMenu,
  SideMenuController,
  useCreateBlockNote,
} from "@endexai/blocknote-react";

import { RemoveBlockButton } from "./RemoveBlockButton";

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
        content: "<- Notice the new button in the side menu",
      },
      {
        type: "paragraph",
        content: "Click it to remove the hovered block",
      },
      {
        type: "paragraph",
      },
    ],
  });

  // Renders the editor instance.
  return (
    <BlockNoteView editor={editor} sideMenu={false}>
      <SideMenuController
        sideMenu={(props) => (
          <SideMenu {...props}>
            {/* Button which removes the hovered block. */}
            <RemoveBlockButton {...props} />
            <DragHandleButton {...props} />
          </SideMenu>
        )}
      />
    </BlockNoteView>
  );
}
