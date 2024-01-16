import { rainbowSprinkles, type Sprinkles } from "components/Box.css";

export function box(
  props: Sprinkles,
  opts?: {
    class?: string;
    style?: astroHTML.JSX.CSSProperties | null | undefined;
  },
) {
  let { className, style, otherProps } = rainbowSprinkles(props);

  return {
    class: [className, opts?.class].join(" "),
    style: { ...opts?.style, ...style },
    ...otherProps,
  };
}
