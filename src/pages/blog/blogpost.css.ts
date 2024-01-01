import { nestedGlobalStyle } from "@/nestedGlobalStyle";
import { mediaQueries, vars } from "@/vars.css";

export const mdWrapper = "prose";

function typeSize(size: keyof typeof vars.fontSize) {
  return { fontSize: vars.fontSize[size], lineHeight: vars.lineHeights[size] };
}

nestedGlobalStyle(`.${mdWrapper}`, {
  "p, h1, h2, h3, h4, h5, li": {
    wordBreak: "break-word",
    hyphens: "auto",
    display: "block",
    overflowWrap: "break-word",
  },
  "p, li": {
    marginBottom: "2em",
    lineHeight: vars.lineHeights.lg,
    fontSize: vars.fontSize.lg,
  },
  h1: {
    ...typeSize("2xl"),
    fontWeight: "bold",
    "@media": {
      [mediaQueries.md]: {
        ...typeSize("5xl"),
        fontWeight: "bolder",
      },
    },
  },
  h2: {
    fontSize: vars.fontSize["2xl"],
    lineHeight: vars.lineHeights["2xl"],
    fontWeight: "bold",
    margin: `${vars.space[5]} 0 ${vars.space[3]}`,
  },
  h3: {
    fontSize: vars.fontSize["2xl"],
    lineHeight: vars.lineHeights["2xl"],
    margin: `${vars.space[5]} 0 ${vars.space[3]}`,
  },
  h4: {
    fontSize: vars.fontSize.xl,
    lineHeight: vars.lineHeights.xl,
    fontWeight: "bold",
    margin: `${vars.space[5]} 0 ${vars.space[3]}`,
  },
  h5: {
    fontSize: vars.fontSize.lg,
    lineHeight: vars.lineHeights.lg,
    fontWeight: "bold",
    margin: `${vars.space[5]} 0 ${vars.space[3]}`,
  },
  h6: {
    fontSize: vars.fontSize.base,
    lineHeight: vars.lineHeights.base,
    textTransform: "uppercase",
    fontVariant: "small-caps",
    fontWeight: "bold",
    margin: `${vars.space[5]} 0 ${vars.space[3]}`,
  },
  "h2, h3, h4": {
    fontWeight: "bold",
    // margin: `${vars.space[8]} 0 ${vars.space[5]}`,
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
  // "ul, ol": {
  //   paddingLeft: "3em",
  //   counterReset: "listCounter",
  // },
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
  "ol, ul, li, abbr, sub, sup, kbd, mark": {
    all: "revert",
  },
  hr: {
    margin: "3em 0",
    borderTop: `1px solid ${vars.colors.gray7}`,
  },
  blockquote: {
    borderLeft: `4px solid ${vars.colors.accent10}`,
    padding: "0 0 0 1.25em",
    margin: "0",
    fontSize: vars.fontSize.xl,
    lineHeight: vars.lineHeights["4xl"],
    quotes: `"\\201C""\\201D""\\2018""\\2019"`,
  },
  "p code": {
    backgroundColor: vars.colors.accent3,
    color: vars.colors.accent11,
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
  figure: {
    textAlign: "center",
  },
  figcaption: {
    color: vars.colors.gray11,
    fontSize: vars.fontSize.sm,
  },
  pre: {
    // Overriding the style tag
    padding: "1.5rem",
    borderRadius: "10px",
  },
  tr: {
    border: `1px solid ${vars.colors.gray7}`,
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
    color: vars.colors.accent11,
    textDecoration: "underline",
    textDecorationSkipInk: "all",
    textDecorationColor: vars.colors.accent6,
    textDecorationThickness: "2px",
    textUnderlineOffset: "2px",
    "&:hover": {
      textDecoration: "none",
    },
  },
  sup: {
    lineHeight: 1,
    fontSize: vars.fontSize.sm,
  },
});
