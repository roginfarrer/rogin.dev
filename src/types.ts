import type { token } from "styled-system/tokens";

export type TokenString = Parameters<typeof token>[0];
export type ColorString<T> = T extends `colors.${infer R}` ? R : never;
export type Colors = ColorString<TokenString>;
