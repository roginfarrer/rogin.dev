import { css } from "styled-system/css";
import { actions } from "../store";

const style = css({
  transition: ".15s background-color ease",
  borderRadius: "md",
  p: "1",
  bg: { base: "gray4", _hover: "gray6" },
  border: "2px solid {colors.gray6}",
  size: "32px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

export function ThemeToggle() {
  function handleClick() {
    const element = document.documentElement;
    const isDark = element.classList.contains("dark");
    actions.updateTheme(isDark ? "light" : "dark");
  }

  return (
    <button onClick={handleClick} class={style}>
      {/* @ts-ignore */}
      <MoonIcon className="moon" />
      {/* @ts-ignore */}
      <SunIcon className="sun" />
    </button>
  );
}
