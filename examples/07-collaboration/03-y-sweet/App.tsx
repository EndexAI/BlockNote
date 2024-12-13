"use client";

import { useYDoc, useYjsProvider, YDocProvider } from "@y-sweet/react";
import { useCreateBlockNote } from "@endexai/blocknote-react";
import { BlockNoteView } from "@endexai/blocknote-mantine";

import "@endexai/blocknote-mantine/style.css";

export default function App() {
  const docId = "my-blocknote-document";

  return (
    <YDocProvider
      docId={docId}
      authEndpoint="https://demos.y-sweet.dev/api/auth">
      <Document />
    </YDocProvider>
  );
}

function Document() {
  const provider = useYjsProvider();
  const doc = useYDoc();

  const editor = useCreateBlockNote({
    collaboration: {
      provider,
      fragment: doc.getXmlFragment("blocknote"),
      user: { color: "#ff0000", name: "My Username" },
    },
  });

  return <BlockNoteView editor={editor} />;
}
