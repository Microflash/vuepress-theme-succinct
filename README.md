# vuepress-theme-succinct

[![Vuepress 1.2.0](https://img.shields.io/badge/vuepress-1.2.0-blue.svg)](https://github.com/vuejs/vuepress)
[![npm](https://img.shields.io/npm/v/vuepress-theme-succinct)](https://www.npmjs.com/package/vuepress-theme-succinct)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A slightly opinionated theme for Vuepress

## Features

- Custom font support via URL imports
- Minor tweaks to default Vuepress theme

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
