# vuepress-theme-succinct

[![Node 8 or higher](https://img.shields.io/badge/node-%3E%3D%208-blue.svg)](https://nodejs.org/en/download/)
[![Vuepress 1.0.4](https://img.shields.io/badge/vuepress-1.0.4-blue.svg)](https://vuepress.vuejs.org/)
[![npm v1.0.4](https://img.shields.io/badge/npm-1.0.4-orange.svg)](https://www.npmjs.com/package/vuepress-theme-succinct)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A slightly opinionated theme for Vuepress

## Features

- Custom font support via URL imports
- Minor tweaks to default Vuepress theme

### Planned
- Dark theme

Check out the [documentation](https://microflash.github.io/vuepress-theme-succinct/) built with Vuepress and Succinct, obviously :smirk:

## Get Started

Add the dependency to your existing Vuepress project via Yarn or NPM.

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
- [@vuepress/plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search)
