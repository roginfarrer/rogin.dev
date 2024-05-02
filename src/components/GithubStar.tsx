import { FaSolidStar } from "solid-icons/fa";
import { css } from "styled-system/css";
import { flex } from "styled-system/patterns";
import {
  mergeProps,
  type Component,
  createResource,
  createSignal,
  type JSX,
  type ParentComponent,
  onMount,
} from "solid-js";
import { cachedFetch } from "src/cache";

export const GithubStar = (props: { repo: string }) => {
  const [stars, setStars] = createSignal<number>(0);

  onMount(async () => {
    const data = await cachedFetch<{ stargazers_count: number }>(
      `https://api.github.com/repos/${props.repo}`,
      {
        duration: 21600000,
      },
    );
    setStars(data.stargazers_count);
  });

  console.log(stars());

  return <>{stars()}</>;
};
