import { globalStyle, type GlobalStyleRule } from "@vanilla-extract/css";

interface RecursiveGlobalStyle {
  [k: string]: GlobalStyleRule | RecursiveGlobalStyle;
}

const handleAmpersand = (key: string, nestedKey: string): string => {
  let finalSelector = nestedKey;
  if (nestedKey.startsWith("&")) {
    finalSelector = nestedKey.replace("&", key);
  } else {
    finalSelector = `${key} ${nestedKey.replace("&", key)}`;
  }
  return finalSelector;
};

export function bareNestedGlobalStyle(globalStyle: any) {
  return function globalUtil(selector: string, styles: RecursiveGlobalStyle) {
    const write = (
      key: string[],
      value: RecursiveGlobalStyle | GlobalStyleRule,
    ) => {
      const init: {
        rules: Record<string, string | number>;
        nestedRules: [string, any][];
      } = { rules: {}, nestedRules: [] };
      const parts = Object.entries(value).reduce((acc, [nestedK, nestedV]) => {
        if (typeof nestedV === "string" || typeof nestedV === "number") {
          acc.rules[nestedK] = nestedV;
        } else if (nestedK === "@media") {
          acc.rules["@media"] = nestedV;
        } else {
          write(
            key.map((k) => handleAmpersand(k, nestedK)),
            nestedV,
          );
        }
        return acc;
      }, init);
      globalStyle(
        key.map((k) => handleAmpersand(selector, k)).join(", "),
        parts.rules,
      );
    };

    Object.entries(styles).forEach(([key, value]) => {
      write(
        key.split(",").map((k) => k.trim()),
        value,
      );
    });
  };
}

export const nestedGlobalStyle = bareNestedGlobalStyle(globalStyle);
