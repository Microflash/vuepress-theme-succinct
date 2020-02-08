# vuepress-theme-succinct

[![Vuepress 1.2.0](https://img.shields.io/badge/vuepress-1.2.0-blue.svg)](https://github.com/vuejs/vuepress)
[![npm](https://img.shields.io/npm/v/vuepress-theme-succinct)](https://www.npmjs.com/package/vuepress-theme-succinct)
[![License](https://img.shields.io/badge/license-MIT-green.svg)](./LICENSE)

A slightly opinionated theme for Vuepress

## Features

- **Customizable typography**: Import and use your favorite web-fonts. Customize font sizes and text-adjustment for body text
- **Dark and light themes**: With a theme-switcher and native theme detection to set the theme automatically as per the user preference
- **Accessible**: Succinct applies tweaks - deeper contrast, better legibility preferences, etc - to improve the readability

## Get Started

Add the dependency to your existing Vuepress project via Yarn or NPM.

```sh
yarn add -D vuepress-theme-succinct
npm install -D vuepress-theme-succinct
```

Update `.vuepress/config.js` as follows.

```js
module.exports = {
  theme: 'vuepress-theme-succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
}
```

`ThemeManager` provides theme-switching functionality across the app.

Note that you can also use the shorthand name for the theme.

```js
module.exports = {
  theme: 'succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
}
```

Check out the [documentation](https://microflash.github.io/vuepress-theme-succinct/) built with Vuepress and Succinct :smile: for more details.

## Plugins

This theme has the following plugins built in:

- [@vuepress/plugin-active-header-links](https://github.com/vuejs/vuepress/tree/master/packages/@vuepress/plugin-active-header-links)
- [@vuepress/plugin-google-analytics](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-google-analytics)
- [@vuepress/plugin-search](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/plugin-search)

## Acknowledgements

Nods to people and projects that made `succinct` possible.

- Official [Vuepress theme](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/theme-default) `succinct` is based on.
- [Tommy Vedvik](https://github.com/tomtev)'s implementation of theme switcher on the official [Gridsome](https://gridsome.org/) website.
