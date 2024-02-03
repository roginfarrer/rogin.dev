---
title: "Create Astro components outside an .astro file"
description: "A short guide to modifying the behavior of an Astro component outside of an .astro file."
date: "January 15, 2024"
---

I'll explain more below, but here's the code to save you a scroll:

```astro
---
// Component.astro

// Make a polymorphic Astro component
const { as: Component = "div", ...attrs } = Astro.props;
---

<Component {...attrs}><slot /></Component>
```

```typescript
// Component.ts

// Create a proxy that wraps the Astro component, and do whatever you want to it
import Component from "./Component.astro";

export default new Proxy(Component, {
  get(target) {
    async function renderer(result, props, slots) {
      await target(result, props, slots);
    }
    renderer.isAstroComponentFactory = true;
    return renderer;
  },
});
```

As far as I can tell, there's no easy way to create an Astro component without an `.astro` file.

However, you can use a Proxy to act as middleware between the instance of the component and the component definition, which allows you to do some JavaScript-y things that you may not otherwise be able to do.

There's a few important characteristics about Astro components you might notice from reading the snippets above:

1. Astro components are async functions that have the following arguments:
   a. `result`: This is metadata about the instance of Astro. You probably don't need to access this.
   b. `props`: The props, or attributes, applied to the instance of the component.
   c. `slots`: The slots, or children, of the component.
2. This function requires the property `isAstroComponentFactory` in order to identify it as an Astro component.

## Why I went looking for this

I was trying to recreate this API, popularized by Chakra:

```tsx
import { chakra } from "chakra-ui";

function App() {
  return (
    <chakra.p color="primary" bg="purple">
      I can be any element, with style props!
    </chakra.p>
  );
}
```

Making this API for React can be accomplished with, among other things, `React.createElement`. There's no such similar API for Astro components.

I had no problem creating a "Box" Astro component with [rainbow-sprinkles](https://github.com/wayfair/rainbow-sprinkles), that gets me close:

```astro
---
import Box from "./Box.astro";
---

<Box as="p" color="primary" bg="purple" />
```

But it's not quite the same DX as using the `chakra` factory function in JSX. I wasn't able to find a way to inform Astro that any property on a similar `box` factory function should operate as an Astro component.

Thanks to a few open-source projects within the Astro community, I was able to find a couple of examples that helped point me to a solution. The first was this tweet by [Jonathan Neal](https://twitter.com/jon_neal).

<div style="display: flex; justify-content: center;">
<blockquote style="width: 100%;" class="twitter-tweet"><p lang="en" dir="ltr">It’s context, for Astro.<a href="https://t.co/I4i70BQJzm">https://t.co/I4i70BQJzm</a> <a href="https://t.co/98EN1g3WDo">pic.twitter.com/98EN1g3WDo</a></p>&mdash; Jonathan Neal (@jon_neal) <a href="https://twitter.com/jon_neal/status/1746008582569525350?ref_src=twsrc%5Etfw">January 13, 2024</a></blockquote> <script async src="https://platform.twitter.com/widgets.js" charset="utf-8"></script></div>

This project showed me this was possible. However, this project wasn't helpful in finding how to tell Astro what to render. But then I stumbled about [XElement](https://github.com/astro-community/xelement), a web-component generator for Astro. It uses a Proxy intercept and modify the behavior of an existing Astro component. Not quite the ideal outcome, but it helped me accomplish what I set out to do:

```typescript
// box.ts
import type { HTMLTag, HTMLAttributes } from "astro/types";
import Box, { type RainbowSprinkles } from "./Box.astro";

type StyledComponent<T extends HTMLTag> = (
  _props: HTMLAttributes<T> & RainbowSprinkles,
) => any;

type BoxFactory = {
  [T in HTMLTag]: StyledComponent<T>;
};

export default new Proxy(Box, {
  get(
    /** The Box itself */
    target,
    /** The element being used */
    name,
  ) {
    const renderer = async (result, props, slots) => {
      await target(result, { ...props, as: name }, slots);
    };
    renderer.isAstroComponentFactory = true;
  },
}) as BoxFactory;
```

And it works!

```astro
---
import box from "./box";
---

{/* eh voila! */}
<box.p color="primary" bg="purple" />
```
