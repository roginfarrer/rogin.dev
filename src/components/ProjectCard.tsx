import { Badge } from "./Badge";
import { Card } from "./Card";
import { FiArrowUpRight } from "solid-icons/fi";
import { FaSolidStar } from "solid-icons/fa";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import { mergeProps, type JSX, type ParentComponent } from "solid-js";

type Props = {
  title: string;
  href: string;
  desc: string;
  star: JSX.Element;
  emoji: string;
  repo: string;
  tags: string[];
};

export const ProjectCard: ParentComponent<Props> = (props) => {
  const { href, title, emoji, tags, desc, repo } = mergeProps(
    { tags: [] },
    props,
  );
  const isExternalLink = !href.startsWith("/") || !href.startsWith("#");

  return (
    <Card
      href={href}
      class={css({ minHeight: { base: "250px", md: "275px" } })}
    >
      <span
        class={css({
          display: "block",
          textStyle: "xl",
          fontWeight: "bold",
          mb: "4",
        })}
      >
        <span class={flex({ justify: "space-between" })}>
          <span>
            <span
              class={css({
                mixBlendMode: "normal",
                textStyle: "2xl",
                display: "block",
              })}
            >
              {emoji}
            </span>
            {title}
          </span>
          <FiArrowUpRight />
        </span>
      </span>
      <span class={css({ display: "block", fontStyle: "italic" })}>{desc}</span>
      {tags.length > 0 && (
        <span class={flex({ gap: "2" })}>
          {tags.map((tag) => (
            <Badge>{tag}</Badge>
          ))}
        </span>
      )}
      {isExternalLink && (
        <span class={flex({ align: "center", gap: "2", mt: "auto" })}>
          <FaSolidStar class={css({ size: "1em" })} />
          {props.star ?? 0}
        </span>
      )}
    </Card>
  );
};
