import { globalFontFace } from "@vanilla-extract/css";

globalFontFace("Space Grotesk", {
  src: "url(fonts/space-grotesk.woff2) format('woff2')",
  fontDisplay: "swap",
});

globalFontFace("Inter", {
  src: "url(fonts/inter.ttf) format('truetype')",
  fontDisplay: "swap",
});

globalFontFace("Inter", {
  src: "url(fonts/inter-italic.ttf) format('truetype')",
  fontDisplay: "swap",
  fontStyle: "italic",
});

globalFontFace("Karla", {
  src: "url(fonts/karla-variable.ttf) format('truetype')",
  fontDisplay: "swap",
});

globalFontFace("Karla", {
  src: "url(fonts/karla-variable-italic.ttf) format('truetype')",
  fontDisplay: "swap",
  fontStyle: "italic",
});
