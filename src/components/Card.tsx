import { css } from "styled-system/css";
import { type ComponentProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export type Props = ComponentProps<"a"> & {
  preview?: boolean;
};

export function Card(props: Props) {
  const Element = props.preview ? "span" : "a";
  return (
    <Dynamic
      component={Element}
      {...props}
      class={[
        css({
          position: "relative",
          borderRadius: "xl",
          bg: "gray4",
          p: "4",
          display: "flex",
          transitionProperty: "all",
          transitionTimingFunction: "ease-out",
          transitionDuration: ".2s",
          flexDirection: "column",
          justifyContent: "space-between",
          flex: "1",
          overflow: "hidden",
          "--shadow-color": { base: "colors.gray6", _dark: "colors.gray4" },
          _hover: {
            "&:is(a)": {
              bg: "gray5",
              boxShadow: "0 4px 20px 0 var(--shadow-color)",
              borderColor: "transparent",
            },
          },
        }),
        props.class,
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}
