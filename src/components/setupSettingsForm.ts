import { store, actions } from "../store";

export function setupForm(container: HTMLElement) {
  const fontSwitcher = container.querySelector(
    '[data-id="font"]',
  ) as HTMLSelectElement;
  const colorSwitcher = container.querySelector(
    '[data-id="color"]',
  ) as HTMLSelectElement;
  const themeSwitcher = container.querySelector(
    '[data-id="theme"]',
  ) as HTMLSelectElement;

  store.subscribe((data) => {
    colorSwitcher.value = data.color;
    fontSwitcher.value = data.font;
    themeSwitcher.value = data.theme;

    document.querySelectorAll(".theme-toggle").forEach((toggle) => {
      toggle.setAttribute(
        "title",
        `Switch to ${
          document.documentElement.classList.contains("dark") ? "light" : "dark"
        } theme`,
      );
    });
  });

  themeSwitcher.addEventListener("change", (ev) => {
    // @ts-expect-error
    const newValue = ev.target.value;
    actions.updateTheme(newValue);
  });
  fontSwitcher.addEventListener("change", (ev) => {
    // @ts-expect-error
    const newValue = ev.target.value;
    actions.updateFont(newValue);
  });
  colorSwitcher.addEventListener("change", (ev) => {
    // @ts-expect-error
    const newColor = ev.target.value;
    actions.updateColor(newColor);
  });
}
