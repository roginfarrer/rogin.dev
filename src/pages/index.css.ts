import { vars } from "@/vars.css";
import { style } from "@vanilla-extract/css";

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
