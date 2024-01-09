import { keyframes, style } from "@vanilla-extract/css";

const inn = {
  transform: "translateY(-50%)",
  // Hack because animating ::backdrop in FireFox doesn't work well
  boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0.5)",
};
const out = {
  transform: "translateY(calc(50% - 36px))",
  boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0)",
};
export const slideIn = keyframes({
  from: out,
  to: inn,
});

export const slideOut = keyframes({
  from: inn,
  to: out,
});

export const floatingChevron = keyframes({
  from: {
    transform: "translateY(-10%)",
  },
  to: {
    transform: "translateY(10%)",
  },
});

export const chevron = style({
  animation: `${floatingChevron} 0.5s ease infinite`,
});

export const dialog = style({
  position: "fixed",
  top: "100%",
  bottom: "env(safe-area-inset-bottom)",
  width: "100%",
  maxWidth: "100%",
  padding: 0,
  border: 0,
  maxHeight: "unset",
  borderRadius: "35px 35px 0 0",
  animation: `${slideIn} 0.3s ease forwards`,
  background: "transparent",
  overscrollBehavior: "none",
  "::backdrop": {
    display: "none",
  },
  selectors: {
    "&[data-closing]": {
      animation: `${slideOut} 0.3s ease forwards`,
    },
  },
});
