import { keyframes, style } from "@vanilla-extract/css";
import { mediaQueries, vars } from "src/vars.css";

export const halo = style({
  background: `radial-gradient(circle at 23% 2%, ${vars.colors.accent3}, rgba(255, 255, 255, 0) 25%)`,
  position: "fixed",
  zIndex: "-1",
  inset: 0,
  "@media": {
    [mediaQueries.md]: {
      background: `radial-gradient(circle at 50% 50%, ${vars.colors.accent3}, rgba(255, 255, 255, 0) 25%)`,
      transform: "translate(-33%, -55%)",
      backgroundSize: "150%",
    },
  },
});
