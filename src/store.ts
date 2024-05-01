import { persistentMap } from "@nanostores/persistent";

export const supportedFonts = {
  karla: "Karla Variable",
  space: "Space Grotesk Variable",
  inter: "Inter Variable",
  crimson: "Crimson Pro Variable",
  bitter: "Bitter Variable",
  system: "System Default",
} as const;

export const fonts = [
  "inter",
  "karla",
  "space",
  "crimson",
  "bitter",
  "system",
] as const;

export const colors = [
  "violet",
  "red",
  "blue",
  "green",
  "purple",
  "orange",
] as const;

export type Store = {
  theme: "dark" | "light" | "system";
  color: (typeof colors)[number];
  font: (typeof fonts)[number];
};

export const store = persistentMap<Store>("settings:", {
  theme: "system",
  color: "violet",
  font: "karla",
});

export const actions = {
  updateColor(color?: Store["color"], doc = document) {
    const c = color ?? store.get().color;
    doc.documentElement.classList.remove(...colors);
    doc.documentElement.classList.add(c);
    store.setKey("color", c);
  },
  updateFont(font?: Store["font"], doc = document) {
    const f = font ?? store.get().font;
    doc.documentElement.classList.remove(...fonts);
    store.setKey("font", f);
    doc.documentElement.classList.add(f);
  },
  updateTheme(value?: Store["theme"], doc = document) {
    const v = value ?? store.get().theme;
    const element = doc.documentElement;
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;

    if (v !== "system") {
      if (v === "light") {
        element.classList.remove("dark");
      } else if (v === "dark") {
        element.classList.add("dark");
      }
      store.setKey("theme", v);
    } else {
      element.classList[prefersDark ? "add" : "remove"]("dark");
      store.setKey("theme", "system");
    }
  },
};
