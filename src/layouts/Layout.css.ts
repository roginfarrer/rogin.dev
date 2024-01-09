import { createVar, style } from "@vanilla-extract/css";
import { vars } from "src/vars.css";

const color = createVar();

export const halo = style({
  vars: {
    [color]: vars.colors.accent5,
  },
  background: `radial-gradient(ellipse at top left, ${color}, rgba(255, 255, 255, 0) 25%)`,
  backgroundSize: "150%",
  position: "absolute",
  zIndex: "-1",
  inset: 0,
  selectors: {
    ".dark &": {
      vars: {
        [color]: vars.colors.accent3,
      },
    },
  },
});

export const halo2 = style({
  width: "800px",
  height: "250px",
  transform: "translateX(-50%)",
  backgroundColor: vars.colors.accent3,
  zIndex: -1,
  position: "absolute",
  left: "50%",
  top: 0,
  filter: "blur(50%)",
});

export const skipToContent = style({
  position: "fixed",
  left: vars.space[4],
  top: vars.space[4],
  borderRadius: vars.radii.base,
  padding: vars.space[4],
  backgroundColor: vars.colors.accent11,
  border: `2px solid ${vars.colors.accent10}`,
  color: vars.colors.gray1,
  opacity: 0,
  ":focus": {
    opacity: 1,
  },
});
