import { defineGlobalStyles } from "@pandacss/dev";

const tabbableElements = [
  "button",
  "a",
  "input",
  "[contenteditable]",
  '[tabindex="0"]',
  "select",
];

// eslint-disable-next-line @pandacss/no-config-function-in-source
export const reset = defineGlobalStyles({
  "@layer reset": {
    [`*:where(:not(html, iframe, canvas, img, svg, video, dialog, strong, em):not(svg *, symbol *, pre, pre *))`]:
      { all: "unset", display: "revert" },
    "*, *::before, *::after": {
      boxSizing: "border-box",
    },
    a: {
      cursor: "pointer",
    },
    "ol, ul, menu": {
      listStyle: "none",
    },
    img: {
      objectFit: "contain",
      height: "auto",
      borderRadius: "xl",
    },
    table: {
      borderCollapse: "collapse",
    },
    textarea: {
      whiteSpace: "revert",
    },
    "::placeholder": {
      color: "unset",
    },
    ":where([hidden])": {
      display: "none",
    },
    ":where([contenteditable])": {
      MozUserModify: "read-write",
      WebkitUserModify: "read-write",
      overflowWrap: "break-word",
      // @ts-ignore
      WebkitLineBreak: "after-white-space",
    },
    ':where([draggable="true"])': {
      WebkitUserDrag: "element",
    },
    body: {
      bg: "white",
      minHeight: "100dvh",
      overflowWrap: "break-word",
      lineHeight: "base",
      color: "gray12",
      margin: 0,
    },
    html: {
      fontFamily: "base",
    },
    "h1, h2, h3, h4, h5, h6": {
      margin: 0,
      textWrap: "balance",
    },
    h1: {
      mixBlendMode: "luminosity",
    },
    ".dark body": {
      backgroundColor: "gray1",
      WebkitFontSmoothing: "antialiased",
    },
    ".dark img": {
      filter: "brightness(0.85)",
    },
    [tabbableElements.join(", ")]: {
      outlineOffset: 3,
      transition: "outline-offset ease 0.5s",
    },
    [tabbableElements.map((e) => `${e}:focus`).join(", ")]: {
      outline: 0,
    },
    [tabbableElements.map((e) => `${e}:focus-visible`).join(", ")]: {
      outline: `2px solid token(colors.accent9)`,
      outlineOffset: "1px",
    },
  },
});
