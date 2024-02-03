import { globalStyle } from "@vanilla-extract/css";
import { vars, darkTheme } from "../vars.css";

function resetLayerStyle(...args: Parameters<typeof globalStyle>) {
  globalStyle(args[0], {
    "@layer": {
      reset: args[1],
    },
  });
}

/*
    Remove all the styles of the "User-Agent-Stylesheet", except for the 'display' property
    - The "symbol *" part is to solve Firefox SVG sprite bug
 */
globalStyle(
  `*:where(:not(html, iframe, canvas, img, svg, video, dialog, strong, em):not(svg *, symbol *, pre, pre *))`,
  {
    "@layer": {
      reset: {
        all: "unset",
        display: "revert",
      },
    },
  },
);

/* Preferred box-sizing value */
resetLayerStyle("*, *::before, *::after", {
  boxSizing: "border-box",
});

/* Reapply the pointer cursor for anchor tags */
resetLayerStyle("a", {
  cursor: "pointer",
});

/* Remove list styles (bullets/numbers) */
resetLayerStyle("ol, ul, menu", {
  listStyle: "none",
});

/* For images to not be able to exceed their container */
resetLayerStyle("img", {
  objectFit: "contain",
  height: "auto",
  borderRadius: vars.radii.xl,
});

/* removes spacing between cells in tables */
resetLayerStyle("table", {
  borderCollapse: "collapse",
});

/* revert the 'white-space' property for textarea elements on Safari */
resetLayerStyle("textarea", {
  whiteSpace: "revert",
});

/* reset default text opacity of input placeholder */
resetLayerStyle("::placeholder", {
  color: "unset",
});

/* fix the feature of 'hidden' attribute.
   display:revert, revert to element instead of attribute */
resetLayerStyle(":where([hidden])", {
  display: "none",
});

/* revert for bug in Chromium browsers
   - fix for the content editable attribute will work properly. */
resetLayerStyle(":where([contenteditable])", {
  MozUserModify: "read-write",
  WebkitUserModify: "read-write",
  overflowWrap: "break-word",
  // @ts-ignore
  WebkitLineBreak: "after-white-space",
});

/* apply back the draggable feature - exist only in Chromium and Safari */
resetLayerStyle(':where([draggable="true"])', {
  // @ts-ignore
  WebkitUserDrag: "element",
});

globalStyle("body", {
  minHeight: "100dvh",
  overflowWrap: "break-word",
  lineHeight: vars.lineHeights.base,
  color: vars.colors.gray12,
  margin: 0,
});

resetLayerStyle("html", {
  fontFamily: vars.fonts.base,
});

resetLayerStyle("h1, h2, h3, h4, h5, h6", {
  margin: 0,
  textWrap: "balance",
});

resetLayerStyle("h1", {
  mixBlendMode: "luminosity",
});

resetLayerStyle(`body`, {
  backgroundColor: "white",
});

resetLayerStyle(`.${darkTheme} body`, {
  backgroundColor: vars.colors.gray1,
  WebkitFontSmoothing: "antialiased",
});

resetLayerStyle(`.${darkTheme} img`, {
  filter: "brightness(0.85)",
});

// globalStyle("a:visited", {
//   color: "initial",
// });

const tabbableElements = [
  "button",
  "a",
  "input",
  "[contenteditable]",
  '[tabindex="0"]',
  "select",
];

resetLayerStyle(tabbableElements.join(", "), {
  outlineOffset: 3,
  transition: "outline-offset ease 0.5s",
});

resetLayerStyle(tabbableElements.map((e) => `${e}:focus`).join(", "), {
  outline: 0,
});

resetLayerStyle(tabbableElements.map((e) => `${e}:focus-visible`).join(", "), {
  outline: `2px solid ${vars.colors.accent9}`,
  outlineOffset: "1px",
});

// globalStyle('a', {
//   color: vars.colors.green10,
//   textDecoration: 'underline',
// })
// globalStyle('a:hover', {
//   textDecoration: 'none',
// })
