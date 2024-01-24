import { createVar, style } from "@vanilla-extract/css";
import { mediaQueries, vars } from "src/vars.css";

export const bar = style({
  border: `1px solid ${vars.colors.gray8}`,
  width: "90dvw",
  borderRadius: "60vw",
  overflow: "hidden",
  position: "fixed",
  left: "50%",
  translate: "-50% 0",
  bottom: vars.space[4],
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
  fontSize: "0.85rem",
  ":first-of-type": {
    borderLeft: 0,
  },
  selectors: {
    "&[data-active]": {
      backgroundColor: vars.colors.gray8,
    },
  },
});

const filter = createVar();
export const newBar = style({
  vars: {
    [filter]: "blur(7px)",
  },
  borderTop: `1px solid ${vars.colors.gray4}`,
  // background: "rgba(255,255,255,0.8)",
  backgroundColor: "rgb(255 255 255 / 70%)",
  WebkitBackdropFilter: filter,
  backdropFilter: filter,
  position: "fixed",
  width: "100dvw",
  overflow: "hidden",
  bottom: "env(safe-area-inset-bottom)",
  display: "flex",
  zIndex: 10,
  transition: "opacity ease-out 0.3s",
  selectors: {
    ".dark &": {
      backgroundColor: "rgb(0 0 0 / 10%)",
    },
  },
  "@media": {
    [mediaQueries.sm]: {
      display: "none",
    },
  },
});

export const newItem = style({
  height: "56px",
  flex: "1 1 100%",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
  display: "flex",
  gap: vars.space[2],
});
