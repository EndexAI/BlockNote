import { Plugin, PluginKey } from "prosemirror-state";
import { Decoration, DecorationSet } from "prosemirror-view";

const blockSelectPluginKey = new PluginKey("blockSelect");

export const BlockSelectPlugin = () => {
  return new Plugin({
    key: blockSelectPluginKey,
    state: {
      init() {
        return { selectedBlocks: [] as string[] };
      },
      apply(tr, value) {
        const meta = tr.getMeta('blockSelect') as {type: string, ids: string[]};
        
        if (meta) {
          if (meta.type === "select") {
            return { selectedBlocks: [...meta.ids] };
          } else if (meta.type === "deselect") {
            return { selectedBlocks: value.selectedBlocks.filter(block => !meta.ids.includes(block)) };
          } else if (meta.type === "clear") {
            return { selectedBlocks: [] };
          }
        }

        return value;
      },
    },
    props: {
      decorations(state) {
        const pluginState = this.getState(state);
        if (!pluginState || pluginState.selectedBlocks.length === 0) return DecorationSet.empty;

        const { selectedBlocks } = pluginState;
        const decorations: Decoration[] = [];

        state.doc.descendants((node, pos) => {
          if (node.type.name === "blockContainer" && selectedBlocks.includes(node.attrs.id)) {
            decorations.push(
              Decoration.node(pos, pos + node.nodeSize, {
                class: "bn-block-selected",
                "data-selected": "true"
              }, { inclusiveStart: true, inclusiveEnd: true })
            );
          }
        });

        return DecorationSet.create(state.doc, decorations);
      },
    },
  });
};