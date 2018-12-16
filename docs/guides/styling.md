---
title: Styling
---

# Styling

::: tip
Please have a look at the [Styling configuration reference](https://vuepress.vuejs.org/config/#styling) before diving into the styling options described below.
:::

::: warning
These options are experimental and not part of the official Vuepress releases.
:::

## Custom Fonts

Any web font (including those from Google Fonts) can be configured in `.vuepress/styles/palette.styl` to override the default font. Set the `bodyFontFamily` and `monoFontFamily` variables with appropriate font-family names to make this work. 

A base font-size for the body can also be configured with `bodyFontSize` variable. Most of the font sizes inherit from this value.

```stylus
// configuration provided by vuepress-theme-succinct
$themeFont = "https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,400i,700,700i"
$bodyFontFamily = "Roboto"
$monoFontFamily = "Roboto Mono"
$bodyFontSize = 18px
```
