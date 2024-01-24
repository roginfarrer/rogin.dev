import type { HTMLTag, HTMLAttributes } from "astro/types";
import Box from "./Box.astro";
import type { Sprinkles } from "./Box.css";

type BaseComp<T extends HTMLTag> = (
  _props: HTMLAttributes<T> & { css?: Sprinkles },
) => any;

type DSElements = {
  [T in HTMLTag]: BaseComp<T>;
};

// https://github.com/astro-community/xelement/blob/6356629ffbd4a129496308127ce4cd4425770cc0/packages/XElement/XElement.js#L27C1-L48C3
const prox = new Proxy(Box, {
  get(target, name) {
    return Object.assign(
      async (result: any, props: any, slots: any) =>
        await target(result, { ...props, as: name }, slots),
      // identify this function as an astro component
      {
        isAstroComponentFactory: true,
      },
    );
  },
});

const box = prox as DSElements;

export default box;
