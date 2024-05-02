import type { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { icon } from "@fortawesome/fontawesome-svg-core";

import { For, type ComponentProps, mergeProps, splitProps } from "solid-js";
import { Dynamic } from "solid-js/web";

export interface Props extends ComponentProps<"svg"> {
  icon: IconDefinition;
}

export function SolidFa(props: Props) {
  const [faProps, rest] = splitProps(props, ["icon"]);
  // https://github.com/FortAwesome/react-fontawesome/blob/0.2.x/src/components/FontAwesomeIcon.js#L35
  const iconLookup = icon(faProps.icon);

  if (!iconLookup) {
    throw new Error("No icon found");
  }

  const { tag: Tag, children, attributes } = iconLookup.abstract[0];

  const svgProps = mergeProps(attributes, rest);

  return (
    <Dynamic component={Tag} {...svgProps}>
      <For each={children}>
        {(child) => {
          return <Dynamic component={child.tag} {...child.attributes} />;
        }}
      </For>
    </Dynamic>
  );
}
