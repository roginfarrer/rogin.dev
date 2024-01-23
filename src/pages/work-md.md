# Work

I'm an experienced software engineering leader with a focus on web development, design systems, and developer productivity tooling. I enjoy working in open-source, and I currently maintain a few projects. Before now, I worked as a scenic carpenter and theatrical technician, and graduated from Vassar College. Read on for more on my

---

## Wayfair

<p class="subtitle">Staff Software Engineer, 2016-2024</p>

I joined [Wayfair](https://wayfair.com) to help grow the UI toolkit for internal and supplier facing applications into a component library built on a proprietary frontend framework.

- In 2017, I was promoted to Web Developer II. My team and I rewrote the design system into [React](https://react.dev) to support the technology organization's adoption of React. I started and emceed a monthly company meetup for all things frontend development. I helped grow the enterprise product design team through interviewing and bridging the gap between designers and developers.
- In 2019, I was promoted to Senior Software Engineer, now leading the Enterprise Homebase engineering team. I built a lot of new components to serve product teams' needs, facilitated office hours to provide hands-on support, and delivered monthly trainings to teach developers how to use the design system. I designed and organized the execution of a project to consolidate the "admin" and "supplier" component libraries into a single, theme-able library, effectively halving the team's management effort.
- In 2021, I was promoted to Staff Software Engineer, now leading the entire Homebase engineering team and the effort to consolidate the e-commerce and enterprise design systems into a single system. [I appeared on the Design Systems podcast][podcast] to discuss the evolution of design systems at Wayfair. I facilitated discussions, created RFCs, and drafted the decision records for Wayfair's officially supported CSS frameworks. I orchestrated the component library's backwards-compatible refactor to [TypeScript](https://typescriptlang.org) and [Vanilla Extract](https://vanilla-extract.style). I created the open-source library [Rainbow Sprinkles](https://github.com/wayfair/rainbow-sprinkles) to implement dynamic, theme-driven style props with zero-runtime CSS generation.

---

## Open-source Projects

### [react-collapsed](https://github.com/roginfarrer/collapsed)

A React custom hook for creating accessible and animated expand/collapse components. No animation framework dependencies required! Simply powered by CSS transitions. [Currently featured on React's new docs site.](https://react.dev)

### [rainbow-sprinkles](https://github.com/wayfair/rainbow-sprinkles)

Dynamic, theme-driven style props for Vanilla Extract. Addressed the need for a [styled-system](https://github.com/styled-system/styled-system) API, but without the need for a runtime CSS framework. Supported the design system's adoption of Vanilla Extract without requiring a significant refactor by the system's users.

### [system-props](https://github.com/system-props/system-props)

Responsive, type-safe, theme-based style props for building design systems with React. This library-a precursor to rainbow-sprinkles while Homebase used runtime CSS solutions-provided key utilities for styling flexibility in the system (with constraints).

### [eslint-plugin-react-server-components](https://github.com/roginfarrer/eslint-plugin-react-server-components)

Experiment in making an ESLint rule for enforcing "use client" in client components (and warning if it's not needed).

[podcast]: https://www.designsystemspodcast.com/episodes/episode/7c4cc37e/42-neva-corbo-hudak-and-rogin-farrer-from-wayfair-the-long-evolution-of-a-web-design-system
