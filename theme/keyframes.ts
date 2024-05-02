import { defineKeyframes } from "@pandacss/dev";

export const keyframes = defineKeyframes({
  moveBg: {
    to: {
      backgroundPosition: "var(--bg-size) calc(var(--bg-size) / 2)",
    },
  },
  light1: {
    to: {
      transform: "translateY(-25%)",
    },
  },
  light2: {
    from: {
      transform: "scale(1.3) translate(30%, -30%)",
    },
    to: {
      transform: "scale(1.3) translate(34%, 30%)",
    },
  },
  mobileHeaderSlideIn: {
    from: {
      transform: "translateY(calc(50% - 36px))",
      boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0)",
    },
    to: {
      transform: "translateY(-50%)",
      // Hack because animating ::backdrop in FireFox doesn't work well
      boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0.5)",
    },
  },
  mobileHeaderSlideOut: {
    from: {
      transform: "translateY(-50%)",
      // Hack because animating ::backdrop in FireFox doesn't work well
      boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0.5)",
    },
    to: {
      transform: "translateY(calc(50% - 36px))",
      boxShadow: "0 0 0 100vmax rgba(0, 0, 0, 0)",
    },
  },
  floatingChevron: {
    from: {
      transform: "translateY(-10%)",
    },
    to: {
      transform: "translateY(10%)",
    },
  },
});
