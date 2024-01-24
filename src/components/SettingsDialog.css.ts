import { style } from "@vanilla-extract/css";
import { vars } from "../vars.css";

export const dialog = style({
  color: "inherit",
  width: "min(85dvw, 300px)",
  boxShadow: "0 25px 50px -12px rgb(0 0 0 / 0.25)",
  border: 0,
  padding: 0,
  "::backdrop": {
    backdropFilter: "blur(2px)",
    WebkitBackdropFilter: "blur(2px)",
    backgroundColor: "rgb(0 0 0 / 10%)",
  },
  selectors: {
    ".dark &": {
      backgroundColor: vars.colors.gray1,
    },
    ".dark &::backdrop": {
      backgroundColor: "rgb(255 255 255 / 10%)",
    },
  },
});
