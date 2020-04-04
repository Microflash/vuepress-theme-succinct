---
title: Installation
---

# Installation

![Vuepress](https://img.shields.io/github/package-json/dependency-version/Microflash/vuepress-theme-succinct/@vuepress/plugin-search?label=vuepress)
![npm](https://img.shields.io/npm/v/vuepress-theme-succinct)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

[Succinct](https://github.com/Microflash/vuepress-theme-succinct) uses [prefers-color-scheme](https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-color-scheme) media query and [CSS variables](https://developer.mozilla.org/en-US/docs/Web/CSS/--*) to generate dark and light themes.

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
