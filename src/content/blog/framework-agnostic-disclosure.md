---
title: "Disclosure: "
description: "a description"
date: "June 24, 2024"
draft: true
---

I built [react-collapsed][repo] many years ago to address a work-related need: how do we create an accessible disclosure or accordion component that can support animating height to `auto` without installing a JS animation library? The powers-that-be put the kabash on installing [framer-motion](), and we didn't have the [CSS grid hack]() available to us, and the soon-to-be CSS support hadn't been released yet.

The early versions were inspired by an old [Tanner Linsley](https://tanstack.com) project, [react-show](https://github.com/tannerlinsley/react-show), which empowers React component animations of all sorts, and [Downshift.js](https://downshift.js.org), one of the originators of the prop-getter pattern. Creating `react-collapsed` early in my career was actually an awesome learning experience for diving deep into the React component lifecyle, orchestrating callback execution, and DOM manipulation.

[repo]: https://github.com/roginfarrer/collapsed
