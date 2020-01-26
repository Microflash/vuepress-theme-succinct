---
title: Configuration
---

# Configuration

::: tip
Please have a look at the [Styling configuration reference](https://vuepress.vuejs.org/config/#styling) before diving into the styling options described below.
:::

`vuepress-theme-succinct` directly relies on your `palette.styl` file for initializing the variables. If not found, it falls back to the variables defined by `@vuepress/core`.

A typical `palette.styl` would look like this.

```stylus
// colors
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$bodyBgColor = #fff
$badgeTipColor = #42b983
$badgeWarningColor = darken(#ffe564, 35%)
$badgeErrorColor = #da5961

// layout
$navbarHeight = 3.6rem
$sidebarWidth = 20rem
$contentWidth = 740px
$homePageWidth = 960px

// responsive breakpoints
$MQNarrow = 959px
$MQMobile = 719px
$MQMobileNarrow = 419px
```

## Typography

Any web font can be configured in `.vuepress/styles/palette.styl` to override the default font. Set the `bodyFontFamily` and `monoFontFamily` variables with appropriate font-family names to make this work. 

A base font-size for the body can also be configured with `bodyFontSize` variable. Most of the font sizes inherit from this value.

```stylus
$themeFont = "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700|Lato:400,400i,700,700i&display=swap"
$bodyFontFamily = "Lato"
$monoFontFamily = "IBM Plex Mono"
$bodyFontSize = 18px
```
