import { style } from "@vanilla-extract/css";
import { vars } from "src/vars.css";

export const toggle = style({
  transition: ".15s background-color ease",
  borderRadius: vars.radii.md,
  padding: vars.space[1],
  backgroundColor: vars.colors.gray4,
  border: `2px solid ${vars.colors.gray6}`,
  height: 32,
  width: 32,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  ":hover": {
    backgroundColor: vars.colors.gray4,
  },
});

export const moon = style({
  display: "block",
  selectors: {
    ".dark &": {
      display: "none",
    },
  },
});

export const sun = style({
  display: "none",
  selectors: {
    ".dark &": {
      display: "block",
    },
  },
});
