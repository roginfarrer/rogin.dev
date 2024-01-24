const fonts = ["inter", "karla", "space", "crimson", "bitter", "system"];

const colors = ["violet", "red", "blue", "green", "purple", "orange"];

function setupTheme(doc = document) {
  const storedTheme = localStorage.getItem("settings:theme");

  if (storedTheme && storedTheme !== "system") {
    if (storedTheme === "light") {
      doc.documentElement.classList.remove("dark");
    } else if (storedTheme === "dark") {
      doc.documentElement.classList.add("dark");
    }
  } else {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)",
    ).matches;
    doc.documentElement.classList[prefersDark ? "add" : "remove"]("dark");
    window.localStorage.setItem("settings:theme", "system");
  }
}

function setupFont(doc = document) {
  const storedFont = window.localStorage.getItem("settings:font") ?? "karla";
  doc.documentElement.classList.remove(...fonts);
  doc.documentElement.classList.add(storedFont);
  window.localStorage.setItem("settings:font", storedFont);
}

function setupColor(doc = document) {
  const storedColor = window.localStorage.getItem("settings:color") ?? "violet";
  doc.documentElement.classList.remove(...colors);
  doc.documentElement.classList.add(storedColor);
  window.localStorage.setItem("settings:color", storedColor);
}

setupColor();
setupFont();
setupTheme();
