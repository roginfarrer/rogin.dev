import { defineGlobalStyles } from "@pandacss/dev";
import type { SystemProperties } from "styled-system/types";

function typeSize(size: SystemProperties["fontSize"]) {
  return { fontSize: size, lineHeight: size };
}

export const prose = defineGlobalStyles({
  ".prose": {
    "ol, ul, li, abbr, sub, sup, kbd, mark": {
      all: "revert",
    },
    "p, h1, h2, h3, h4, h5, li": {
      wordBreak: "break-word",
      hyphens: "auto",
      overflowWrap: "break-word",
    },
    p: {
      marginBottom: "2em",
    },
    "h1, h2, h3, h4": {
      marginBottom: "1em",
    },
    "p, li": {
      ...typeSize("lg"),
      fontSize: "clamp(1rem, 0.96rem + 0.22vw, 1.125rem)",
    },
    h1: {
      ...typeSize("3xl"),
      fontWeight: "bold",
      md: {
        ...typeSize("5xl"),
        fontWeight: "bolder",
      },
    },
    h2: {
      ...typeSize("2xl"),
      fontWeight: "bold",
      mt: 5,
      mb: 3,
      md: {
        ...typeSize("3xl"),
        marginTop: "7",
        fontWeight: "bolder",
      },
    },
    h3: {
      ...typeSize("2xl"),
      mt: 5,
      mb: 3,
    },
    h4: {
      ...typeSize("xl"),
      mt: 5,
      mb: 3,
      fontWeight: "bold",
    },
    h5: {
      ...typeSize("lg"),
      fontWeight: "bold",
      mt: 5,
      mb: 3,
    },
    h6: {
      fontSize: "md",
      lineHeight: "md",
      textTransform: "uppercase",
      fontVariant: "small-caps",
      fontWeight: "bold",
      mt: 5,
      mb: 3,
    },
    "h2, h3, h4": {
      fontWeight: "bold",
    },
    // li: {
    //   listStyle: "none",
    //   marginBottom: "0.5em",
    //   "&::before": {
    //     color: vars.colors.blue10,
    //     position: "absolute",
    //   },
    //   counterIncrement: "listCounter",
    //   position: "relative",
    // },
    "ul, ol": {
      paddingLeft: "1em",
    },
    "ul li::marker": {
      color: "gray8",
    },
    "ol li": {
      paddingLeft: "2",
    },
    // "ol li": {
    //   listStyle: "none",
    //   "&::before": {
    //     content: "counter(listCounter, decimal-leading-zero)",
    //     left: "-1.5rem",
    //     top: "0.25rem",
    //     fontSize: "0.8rem",
    //     fontWeight: "bold",
    //     position: "absolute",
    //   },
    // },
    // "ul li::before": {
    //   content: "counter(listCounter, disc)",
    //   left: "-1.25em",
    //   fontWeight: "bold",
    // },
    li: {
      marginBottom: 0,
      marginTop: "1rem",
      ":first-child": {
        marginTop: 0,
      },
    },
    hr: {
      margin: "3em 0",
      borderTop: "1px solid token(colors.gray7)",
    },
    blockquote: {
      borderLeft: "4px solid token(colors.accent10)",
      padding: "0 0 0 1.25em",
      margin: "0",
      fontSize: "xl",
      lineHeight: "4xl",
      quotes: `"\\201C""\\201D""\\2018""\\2019"`,
    },
    ":not(pre) code": {
      backgroundColor: "accent3",
      color: "accent11",
      fontFamily: '"Consolas", "Courier Prime", menlo, monospace',
      fontSize: ".95rem",
      padding: "0 0.2rem",
    },
    "table, pre, iframe, figure, img, p, ul, ol": {
      marginBottom: "1.25em",
    },
    "table, iframe, figure": {
      display: "block",
      overflowX: "auto",
      maxWidth: "fit-content",
    },
    iframe: {
      minWidth: "100%",
    },
    figure: {
      textAlign: "center",
    },
    figcaption: {
      color: "gray11",
      fontSize: "sm",
    },
    pre: {
      // Overriding the style tag
      padding: "1.5rem",
      borderRadius: "10px",
    },
    tr: {
      border: "1px solid token(colors.gray7)",
    },
    th: {
      fontWeight: "bold",
    },
    "td, th": {
      padding: "0.25em",
    },
    "pre > code": {
      all: "unset",
      lineHeight: "1.5",
    },
    a: {
      color: "accent11",
      textDecoration: "underline",
      textDecorationSkipInk: "all",
      textDecorationColor: "accent6",
      textDecorationThickness: "0.3ex",
      textUnderlineOffset: "0.3ex",
      "&:hover": {
        textDecorationThickness: "0.35ex",
        textDecorationColor: "accent7",
      },
    },
    sup: {
      lineHeight: 1,
      fontSize: "sm",
    },
    img: {
      width: "100%",
    },
    "figure, img": {
      display: "block",
      sm: {
        marginLeft: "-10%",
        minWidth: "120%",
      },
    },
    "figure img": {
      marginLeft: "auto",
      marginRight: "auto",
      minWidth: "auto",
    },
  },
});
