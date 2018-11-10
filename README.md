# vuepress-theme-succinct

[![Supported Node Version](https://img.shields.io/badge/node-%3E%3D%208-blue.svg)](https://nodejs.org/en/download/)
[![Vuepress 1.0.0-alpha.20](https://img.shields.io/badge/vuepress-1.0.0--alpha.20-blue.svg)](https://vuepress.vuejs.org/)
[![npm](https://img.shields.io/badge/npm-1.0.0--alpha.21-orange.svg)](https://www.npmjs.com/package/vuepress-theme-succinct)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A slightly opinionated theme for Vuepress

> **Warning** This theme is for Vuepress 1.x which is currently in alpha. I plan to mirror the official versions as it readies for GA. Until then, use this only if you feel adventurous.

## Features

- [x] Roboto and Roboto Mono set as default fonts
- [ ] Support for Dark theme
- [x] Minor tweaks to default Vuepress theme

See it in action [here](https://microflash.github.io/vuepress-theme-succinct/)

## Get Started

Add the dependency to your existing project via Yarn or NPM.

```bash
yarn add -D vuepress-theme-succinct
npm install -D vuepress-theme-succinct
```

Update `.vuepress/config.js` as follows.

```bash
module.exports = {
  theme: 'vuepress-theme-succinct'
}
```

You can also use the shorthand.

```bash
module.exports = {
  theme: 'succinct'
}
```

## Plugins

This theme has the following plugins built in:

- [@vuepress/plugin-active-header-links](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-active-header-links)
- [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics)
