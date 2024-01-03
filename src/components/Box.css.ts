import { createRainbowSprinkles, defineProperties } from "rainbow-sprinkles";
import { vars } from "../vars.css";

const responsiveProperties = defineProperties({
  conditions: {
    _: {},
    xs: { "@media": "screen and (min-width: 480px)" },
    sm: { "@media": "screen and (min-width: 640px)" },
    md: { "@media": "screen and (min-width: 768px)" },
    // lg: { "@media": "screen and (min-width: 1024px)" },
    // xl: { "@media": "screen and (min-width: 1280px)" },
    // "2xl": { "@media": "screen and (min-width: 1536)" },
  },
  defaultCondition: "_",
  dynamicProperties: {
    margin: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    padding: vars.space,
    paddingRight: vars.space,
    paddingLeft: vars.space,
    paddingTop: vars.space,
    paddingBottom: vars.space,
    fontSize: vars.fontSize,
    lineHeight: vars.lineHeights,
    width: true,
    minWidth: true,
    maxWidth: true,
    height: true,
    gap: vars.space,
    justifyContent: true,
    alignItems: true,
    flex: true,
    flexWrap: true,
    textAlign: true,
    position: true,
    top: vars.space,
    left: vars.space,
    right: vars.space,
    bottom: vars.space,
    flexDirection: true,
  },
  staticProperties: {
    display: ["block", "inline-block", "grid", "inline-flex", "flex", "none"],
    flexDirection: ["row", "column"],
    margin: vars.space,
    marginRight: vars.space,
    marginLeft: vars.space,
    marginTop: vars.space,
    marginBottom: vars.space,
    fontStyle: ["italic"],
    fontWeight: {
      bold: "600",
      bolder: "700",
    },
    overflow: ["hidden"],
  },
  shorthands: {
    m: ["margin"],
    ml: ["marginLeft"],
    mr: ["marginRight"],
    mb: ["marginBottom"],
    mt: ["marginTop"],
    mx: ["marginLeft", "marginRight"],
    my: ["marginTop", "marginBottom"],
    p: ["padding"],
    pl: ["paddingLeft"],
    pr: ["paddingRight"],
    pb: ["paddingBottom"],
    pt: ["paddingTop"],
    px: ["paddingLeft", "paddingRight"],
    py: ["paddingTop", "paddingBottom"],
    type: ["fontSize", "lineHeight"],
    size: ["height", "width"],
    placeItems: ["alignItems", "justifyContent"],
  },
});

const interactiveProperties = defineProperties({
  conditions: {
    _: {},
    hover: { selector: "&:hover" },
    active: { selector: "&:active" },
    darkMode: { selector: ".dark &" },
  },
  defaultCondition: "_",
  dynamicProperties: {
    color: vars.colors,
    backgroundColor: vars.colors,
    borderColor: vars.colors,
    background: vars.colors,
    transform: true,
    boxShadow: true,
  },
  staticProperties: {
    textDecoration: ["none", "underline"],
  },
  shorthands: {
    bg: ["backgroundColor"],
  },
});

const nonResponsiveProperties = defineProperties({
  dynamicProperties: {
    zIndex: true,
    borderRadius: vars.radii,
    gridArea: true,
    border: true,
    borderTop: true,
    transition: true,
    animation: true,
  },
});

export const rainbowSprinkles = createRainbowSprinkles(
  responsiveProperties,
  interactiveProperties,
  nonResponsiveProperties,
);

export type Sprinkles = Parameters<typeof rainbowSprinkles>[0];
