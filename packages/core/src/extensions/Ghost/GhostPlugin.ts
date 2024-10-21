import { Extension } from "@tiptap/core";
import { Plugin, PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

interface GhostOptions {
  emptyNodeClass: string;
  autocomplete: string | null;
  placeholder: string;
  showOnlyWhenEditable: boolean;
  showOnlyCurrent: boolean;
  includeChildren: boolean;
}

export const Ghost = Extension.create<GhostOptions>({
  name: "ghost",

  addOptions() {
    return {
      emptyNodeClass: "is-empty",
      autocomplete: null,
      placeholder: "Write something...",
      showOnlyWhenEditable: true,
      showOnlyCurrent: true,
      includeChildren: false,
    };
  },

  // Tab Auto-Complete
  addKeyboardShortcuts() {
    return {
      Tab: () => {
        if (this.options.autocomplete) {
          return this.editor
            .chain()
            .focus()
            .command(({ tr }) => {
              tr.insertText(this.options.autocomplete || "");
              this.options.autocomplete = null;
              return true;
            })
            .run();
        }
        return false;
      },
    };
  },

  addProseMirrorPlugins() {
    return [
      new Plugin({
        key: new PluginKey("ghost"),
        props: {
          decorations: ({ doc, selection }) => {
            const active =
              this.editor.isEditable || !this.options.showOnlyWhenEditable;
            const { anchor } = selection;
            const decorations: Decoration[] = [];

            if (!active) {
              return null;
            }

            const blockGroupNode = doc.firstChild

            if(!blockGroupNode) {
              return null
            }
               
            blockGroupNode.descendants((node, pos) => {
              if(node.type.name === 'paragraph') {
                // Inline decoration
                const isParagraphFocused = anchor >= pos && anchor <= pos + node.nodeSize;
                const hasContentToRight = node.textContent.slice(anchor - pos).trim().length > 0;

                if(isParagraphFocused && !hasContentToRight) {
                  const inlineDecoration = Decoration.inline(pos, pos + node.nodeSize, {
                    class: 'ghost-inline',
                    'data-ghost': this.options.autocomplete ?? '',
                  });
                  decorations.push(inlineDecoration);
                }
              }
              
              return true;
            });

            // blockGroupNode.descendants((node, pos) => {
            //   const hasAnchor = anchor >= pos && anchor <= pos + node.nodeSize;
            //   const isLeafNode = node.isLeaf;
            //   const isEmpty = isLeafNode && node.content.size === 0;
              
            //   if ((hasAnchor || !this.options.showOnlyCurrent) && isLeafNode) {
            //     const classes = [this.options.emptyNodeClass];
            //     console.log(node, pos, classes);
            //     const decoration = Decoration.node(pos, pos + node.nodeSize, {
            //       class: classes.join(" "),
            //       "data-placeholder": isEditorEmpty
            //         ? this.options.placeholder
            //         : `${node.textContent}${this.options.autocomplete || ""}`,
            //     });

            //     decorations.push(decoration);
            //   }

            //   return this.options.includeChildren;
            // });

            return DecorationSet.create(doc, decorations);
          },
        },
      }),
    ];
  },
});