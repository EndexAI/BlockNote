import { assertEmpty } from "@endexai/blocknote-core";
import { ComponentProps } from "@endexai/blocknote-react";
import { forwardRef } from "react";

export const SuggestionMenuLoader = forwardRef<
  HTMLDivElement,
  ComponentProps["SuggestionMenu"]["Loader"]
>((props, ref) => {
  const { className, children, ...rest } = props;

  assertEmpty(rest);

  return (
    <div className={className} ref={ref}>
      {children}
    </div>
  );
});
