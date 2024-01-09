import { style } from "@vanilla-extract/css";
import { mediaQueries, vars } from "src/vars.css";

export const bar = style({
  border: `1px solid ${vars.colors.gray8}`,
  width: "90dvw",
  borderRadius: "60vw",
  overflow: "hidden",
  position: "fixed",
  left: "50%",
  translate: "-50% 0",
  bottom: vars.space[2],
  display: "flex",
  zIndex: 10,
  boxShadow: `0 5px 10px ${vars.colors.gray11}`,
  selectors: {
    ".dark &": {
      boxShadow: `0 5px 10px ${vars.colors.gray3}`,
    },
  },
  "@media": {
    [mediaQueries.sm]: {
      display: "none",
    },
  },
});

export const item = style({
  backgroundColor: vars.colors.gray6,
  flex: "1 1 100%",
  placeContent: "center center",
  textAlign: "center",
  display: "flex",
  gap: vars.space[2],
  borderLeft: `1px solid ${vars.colors.gray8}`,
  fontSize: "0.75rem",
  ":first-of-type": {
    borderLeft: 0,
  },
  selectors: {
    "&[data-active]": {
      backgroundColor: vars.colors.gray8,
    },
  },
});
