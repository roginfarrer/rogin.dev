import { vars } from "@/vars.css";
import { keyframes, style } from "@vanilla-extract/css";

const inn = {
  transform: "translateY(-50%)",
  // Hack because animating ::backdrop in FireFox doesn't work well
  boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0.5);",
};
const out = {
  transform: "translateY(50%)",
  boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0);",
};
export const slideIn = keyframes({
  from: out,
  to: inn,
});

export const slideOut = keyframes({
  from: inn,
  to: out,
});

export const dialog = style({
  position: "fixed",
  top: "100%",
  transform: "translateY(-50%)",
  bottom: "env(safe-area-inset-bottom)",
  width: "100%",
  maxWidth: "100%",
  padding: 0,
  border: 0,
  borderRadius: `${vars.radii.xl} ${vars.radii.xl} 0 0`,
  animation: `${slideIn} 0.25s ease forwards`,
  "::backdrop": {
    display: "none",
  },
  selectors: {
    "&[data-closing]": {
      animation: `${slideOut} 0.25s ease forwards`,
    },
  },
});

export const menuItemText = style({
  display: "none",
  "@media": {
    "screen and (min-width: 400px)": {
      display: "block",
    },
  },
});
