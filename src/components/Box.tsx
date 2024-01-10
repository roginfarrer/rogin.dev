import {
  type Component,
  type JSX,
  type ComponentProps,
  splitProps,
} from "solid-js";
import { Dynamic } from "solid-js/web";

import { rainbowSprinkles, type Sprinkles } from "./Box.css";

type ElementType = keyof JSX.IntrinsicElements | Component<any>;
type PropsOf<T extends ElementType> = ComponentProps<T> & {
  as?: ElementType;
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
type DistributiveOmit<T, K extends keyof any> = T extends any
  ? Omit<T, K>
  : never;

/**
 * Assign property types from right to left.
 * Think `Object.assign` for types.
 *
 * @see https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
 */
export type Assign<A, B> = DistributiveOmit<A, keyof B> & B;

export type BoxProps<T extends ElementType> = Assign<PropsOf<T>, Sprinkles>;

export function Box<T extends ElementType = "div">({
  as: Component = "div",
  ...props
}: BoxProps<T>) {
  const { className, style, otherProps } = rainbowSprinkles(props);
  return <Component class={className} style={style} {...otherProps} />;
}
