---
title: Styling
---

# Styling

::: tip
Please have a look at the [Styling configuration reference](https://vuepress.vuejs.org/config/#styling) before delving into the styling options described below.
:::

::: warning
These options are experimental and not part of the official Vuepress releases.
:::

You can provide Google fonts URL (or any external font URL) in `.vuepress/styles/palette.styl` to override the default font. You'll have to provide the font name as well to make this work. Further, you can also specify the base font-size for the body. Most of the font sizes inherit from this value.

```stylus
// configuration provided by vuepress-theme-succinct
$themeFont = "https://fonts.googleapis.com/css?family=Roboto+Mono:400,700|Roboto:400,400i,700,700i"
$bodyFontFamily = "Roboto"
$monoFontFamily = "Roboto Mono"
$bodyFontSize = 18px
```
