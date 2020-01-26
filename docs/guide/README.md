---
title: Installation
---

# Installation

![Vuepress 1.2.0](https://img.shields.io/badge/vuepress-1.2.0-blue.svg)
![npm](https://img.shields.io/npm/v/vuepress-theme-succinct)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

[vuepress-theme-succinct](https://github.com/Microflash/vuepress-theme-succinct) uses [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query and [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to generate dark and light themes.

### Compatibility

The support for [prefers-color-scheme](https://caniuse.com/#feat=prefers-color-scheme) and [CSS Variables](https://caniuse.com/#feat=css-variables) may vary depending on your browser and operating system.

## Get Started

Add the dependency to your existing Vuepress project via Yarn or NPM.

```sh
yarn add -D vuepress-theme-succinct
npm install -D vuepress-theme-succinct
```

::: tip
Refer to [Getting Started Guide](https://vuepress.vuejs.org/guide/getting-started.html) to create a Vuepress project.
:::

Update `.vuepress/config.js` as follows.

```js{3-6}
// .vuepress > config.js
module.exports = {
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
}
```

`ThemeManager` provides theme-switching functionality across the app.

Note that you can also use the shorthand name for the theme.

```js{3}
// .vuepress > config.js
module.exports = {
  theme: 'succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
}
```
