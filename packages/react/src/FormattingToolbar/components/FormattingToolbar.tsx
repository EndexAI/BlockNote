import {
  RiBold,
  RiH1,
  RiH2,
  RiH3,
  RiIndentDecrease,
  RiIndentIncrease,
  RiItalic,
  RiLink,
  RiListOrdered,
  RiListUnordered,
  RiStrikethrough,
  RiText,
  RiUnderline,
} from "react-icons/ri";
import { Block, BlockUpdate } from "@blocknote/core";
import { Toolbar } from "../../SharedComponents/Toolbar/components/Toolbar";
import { ToolbarButton } from "../../SharedComponents/Toolbar/components/ToolbarButton";
import { ToolbarDropdown } from "../../SharedComponents/Toolbar/components/ToolbarDropdown";
import { formatKeyboardShortcut } from "../../utils";
import LinkToolbarButton from "./LinkToolbarButton";

export type FormattingToolbarProps = {
  boldIsActive: boolean;
  toggleBold: () => void;
  italicIsActive: boolean;
  toggleItalic: () => void;
  underlineIsActive: boolean;
  toggleUnderline: () => void;
  strikeIsActive: boolean;
  toggleStrike: () => void;
  hyperlinkIsActive: boolean;
  activeHyperlinkUrl: string;
  activeHyperlinkText: string;
  setHyperlink: (url: string, text?: string) => void;

  block: Block;
  updateBlock: (blockUpdate: BlockUpdate) => void;
};

// TODO: add list options, indentation
export const FormattingToolbar = (props: FormattingToolbarProps) => {
  const getActiveMarks = () => {
    const activeMarks = new Set<string>();

    props.boldIsActive && activeMarks.add("bold");
    props.italicIsActive && activeMarks.add("italic");
    props.underlineIsActive && activeMarks.add("underline");
    props.strikeIsActive && activeMarks.add("strike");
    props.hyperlinkIsActive && activeMarks.add("link");

    return activeMarks;
  };

  const getActiveBlock = () => {
    if (props.block.type === "heading") {
      if (props.block.props.level === "1") {
        return {
          text: "Heading 1",
          icon: RiH1,
        };
      }

      if (props.block.props.level === "2") {
        return {
          text: "Heading 2",
          icon: RiH2,
        };
      }

      if (props.block.props.level === "3") {
        return {
          text: "Heading 3",
          icon: RiH3,
        };
      }
    }

    if (props.block.type === "bulletListItem") {
      return {
        text: "Bullet List",
        icon: RiListUnordered,
      };
    }

    if (props.block.type === "numberedListItem") {
      return {
        text: "Numbered List",
        icon: RiListOrdered,
      };
    }

    return {
      text: "Paragraph",
      icon: RiText,
    };
  };

  const activeMarks = getActiveMarks();
  const activeBlock = getActiveBlock();

  return (
    <Toolbar>
      <ToolbarDropdown
        text={activeBlock!.text}
        icon={activeBlock!.icon}
        items={[
          {
            onClick: () =>
              props.updateBlock({
                type: "paragraph",
                props: {},
              }),
            text: "Paragraph",
            icon: RiText,
            isSelected: props.block.type === "paragraph",
          },
          {
            onClick: () =>
              props.updateBlock({
                type: "heading",
                props: { level: "1" },
              }),
            text: "Heading 1",
            icon: RiH1,
            isSelected:
              props.block.type === "heading" && props.block.props.level === "1",
          },
          {
            onClick: () =>
              props.updateBlock({
                type: "heading",
                props: { level: "2" },
              }),
            text: "Heading 2",
            icon: RiH2,
            isSelected:
              props.block.type === "heading" && props.block.props.level === "2",
          },
          {
            onClick: () =>
              props.updateBlock({
                type: "heading",
                props: { level: "3" },
              }),
            text: "Heading 3",
            icon: RiH3,
            isSelected:
              props.block.type === "heading" && props.block.props.level === "3",
          },
          {
            onClick: () =>
              props.updateBlock({
                type: "bulletListItem",
                props: {},
              }),
            text: "Bullet List",
            icon: RiListUnordered,
            isSelected: props.block.type === "bulletListItem",
          },
          {
            onClick: () =>
              props.updateBlock({
                type: "numberedListItem",
                props: {},
              }),
            text: "Numbered List",
            icon: RiListOrdered,
            isSelected: props.block.type === "numberedListItem",
          },
        ]}
      />
      <ToolbarButton
        onClick={props.toggleBold}
        isSelected={activeMarks.has("bold")}
        mainTooltip="Bold"
        secondaryTooltip={formatKeyboardShortcut("Mod+B")}
        icon={RiBold}
      />
      <ToolbarButton
        onClick={props.toggleItalic}
        isSelected={activeMarks.has("italic")}
        mainTooltip="Italic"
        secondaryTooltip={formatKeyboardShortcut("Mod+I")}
        icon={RiItalic}
      />
      <ToolbarButton
        onClick={props.toggleUnderline}
        isSelected={activeMarks.has("underline")}
        mainTooltip="Underline"
        secondaryTooltip={formatKeyboardShortcut("Mod+U")}
        icon={RiUnderline}
      />
      <ToolbarButton
        onClick={props.toggleStrike}
        isSelected={activeMarks.has("strike")}
        mainTooltip="Strike-through"
        secondaryTooltip={formatKeyboardShortcut("Mod+Shift+X")}
        icon={RiStrikethrough}
      />
      <ToolbarButton
        onClick={() => {
          // props.editor.view.focus();
          // props.editor.commands.sinkListItem("block");
        }}
        isDisabled={
          // !props.editor.can().sinkListItem("block")
          true
        }
        mainTooltip="Indent"
        secondaryTooltip={formatKeyboardShortcut("Tab")}
        icon={RiIndentIncrease}
      />

      <ToolbarButton
        onClick={() => {
          // props.editor.view.focus();
          // props.editor.commands.liftListItem("block");
        }}
        isDisabled={
          // !props.editor.can().command(({ state }) => {
          //   const block = findBlock(state.selection);
          //   if (!block) {
          //     return false;
          //   }
          //   // If the depth is greater than 2 you can lift
          //   return block.depth > 2;
          // })
          true
        }
        mainTooltip="Decrease Indent"
        secondaryTooltip={formatKeyboardShortcut("Shift+Tab")}
        icon={RiIndentDecrease}
      />

      <LinkToolbarButton
        isSelected={activeMarks.has("link")}
        mainTooltip="Link"
        secondaryTooltip={formatKeyboardShortcut("Mod+K")}
        icon={RiLink}
        hyperlinkIsActive={props.hyperlinkIsActive}
        activeHyperlinkUrl={props.activeHyperlinkUrl}
        activeHyperlinkText={props.activeHyperlinkText}
        setHyperlink={props.setHyperlink}
      />
      {/* <SimpleBubbleMenuButton
          editor={props.editor}
          onClick={() => {
            const comment = this.props.commentStore.createComment();
            props.editor.chain().focus().setComment(comment.id).run();
          }}
          styleDetails={comment}
        /> */}
    </Toolbar>
  );
};