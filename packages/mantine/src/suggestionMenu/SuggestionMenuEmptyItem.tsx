import { Group as MantineGroup } from "@mantine/core";

import { assertEmpty } from "@endexai/blocknote-core";
import { ComponentProps } from "@endexai/blocknote-react";
import { forwardRef } from "react";

export const SuggestionMenuEmptyItem = forwardRef<
  HTMLDivElement,
  ComponentProps["SuggestionMenu"]["EmptyItem"]
>((props, ref) => {
  const { className, children, ...rest } = props;

  assertEmpty(rest);

  return (
    <MantineGroup className={className} ref={ref}>
      <MantineGroup className="bn-mt-suggestion-menu-item-title">
        {children}
      </MantineGroup>
    </MantineGroup>
  );
});
