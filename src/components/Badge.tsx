import { css } from "styled-system/css";
import { type JSX } from "solid-js";

export function Badge(props: { children: JSX.Element }) {
  return (
    <div class={css({ borderRadius: "9999px", textStyle: "sm", bg: "gray5" })}>
      {props.children}
    </div>
  );
}
