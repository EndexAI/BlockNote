import { assertEmpty, mergeCSSClasses } from "@endexai/blocknote-core";
import { ComponentProps } from "@endexai/blocknote-react";
import { forwardRef } from "react";

export const GridSuggestionMenuEmptyItem = forwardRef<
  HTMLDivElement,
  ComponentProps["GridSuggestionMenu"]["EmptyItem"]
>((props, ref) => {
  const { className, children, columns, ...rest } = props;

  assertEmpty(rest);

  return (
    <div
      className={mergeCSSClasses("bn-ak-menu-item", className || "")}
      style={{ gridColumn: `1 / ${columns + 1}` }}
      ref={ref}>
      <div className="bn-ak-suggestion-menu-item-label">{children}</div>
    </div>
  );
});
