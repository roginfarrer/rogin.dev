import { mediaQueries, vars } from "../vars.css";
import { style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridTemplateAreas: "'pic pic' 'bio bio' 'chips chips'",
  gap: vars.space[6],
  alignItems: "center",
  marginBottom: vars.space[3],
  paddingTop: vars.space[7],
  "@media": {
    [mediaQueries.sm]: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr",
      gridTemplateAreas: "'bio pic' 'bio pic' 'chips chips'",
      paddingTop: 0,
    },
    [mediaQueries.md]: {
      gap: `${vars.space[7]} ${vars.space[7]}`,
    },
  },
});

export const socialIcon = style({
  padding: vars.space[2],
  transitionProperty: "color, transform",
  transitionDuration: ".2s",
  transitionTimingFunction: "ease",
  ":hover": {
    color: vars.colors.accent10,
    transform: "translateY(-10%) scale(1.05)",
  },
});
