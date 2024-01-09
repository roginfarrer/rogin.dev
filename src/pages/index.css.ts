import { mediaQueries, vars } from "../vars.css";
import { keyframes, style } from "@vanilla-extract/css";

export const grid = style({
  display: "grid",
  gridTemplateAreas: "'pic pic' 'bio bio' 'chips chips'",
  gap: vars.space[6],
  alignItems: "center",
  marginBottom: vars.space[3],
  paddingTop: vars.space[7],
  "@media": {
    // [mediaQueries.xs]: {},
    // [mediaQueries.sm]: {
    //   paddingTop: 0,
    // },
    [mediaQueries.md]: {
      gridTemplateColumns: "1fr 1fr",
      gridTemplateRows: "1fr 1fr 1fr",
      gridTemplateAreas: "'bio pic' 'bio pic' 'chips chips'",
      gap: `${vars.space[9]} ${vars.space[7]}`,
    },
    [mediaQueries.lg]: {
      gridTemplateColumns: "2fr 1fr",
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

const thing = keyframes({
  from: {
    transform: "scale(1.3) translate(30%, -30%)",
  },
  to: {
    transform: "scale(1.3) translate(34%, 30%)",
  },
});

const newThings = keyframes({
  to: {
    transform: "translateY(-25%)",
  },
});

export const lights2 = style({
  background: `radial-gradient(circle at 50% 50%, ${vars.colors.accent5}, rgba(255, 255, 255, 0) 25%)`,
  position: "fixed",
  zIndex: "-1",
  inset: 0,
  animation: `${thing} 15s linear infinite alternate`,
  selectors: {
    ".dark &": {
      background: `radial-gradient(circle at 50% 50%, ${vars.colors.accent3}, rgba(255, 255, 255, 0) 25%)`,
    },
  },
});
export const lights = style({
  background: `radial-gradient(circle at 15% 50%, ${vars.colors.accent3}, rgba(255, 255, 255, 0) 25%)`,
  position: "fixed",
  zIndex: "-1",
  inset: 0,
  animation: `${newThings} 15s ease-in-out infinite alternate`,
});
