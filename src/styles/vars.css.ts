import { variants } from "@catppuccin/palette";
import { createTheme } from "@vanilla-extract/css";

const { macchiato, latte } = variants;

function mapValues<T, K>(
  obj: T,
  cb: (key: keyof T, value: T[keyof T]) => K,
): Record<keyof T, K> {
  const result: any = {};
  for (const key in obj) {
    result[key] = cb(key, obj[key]);
  }
  return result;
}

export const [darkTheme, vars] = createTheme(
  mapValues(macchiato, (key, value) => value.hex),
);
export const lightTheme = createTheme(
  vars,
  mapValues(latte, (_, value) => value.hex),
);
