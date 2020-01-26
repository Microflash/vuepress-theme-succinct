---
title: Configuration
---

# Configuration

::: tip
Please have a look at the [Styling configuration reference](https://vuepress.vuejs.org/config/#styling) before diving into the styling options described below.
:::

A typical `palette.styl` would look like this.

```stylus
// .vuepress > styles > palette.styl

// colors - light theme
$accentColor = #3eaf7c
$textColor = #2c3e50
$borderColor = #eaecef
$codeBgColor = #282c34
$arrowBgColor = #ccc
$bodyBgColor = #fff
$badgeTipColor = #e7f1ec
$badgeWarningColor = #f8f2d1
$badgeErrorColor = #ffdadc

// colors - dark theme
$accentColorDark = #3eaf7c
$textColorDark = #e2e1db
$borderColorDark = #4c525c
$codeBgColorDark = #1a1c22
$arrowBgColorDark = #555
$bodyBgColorDark = #25262b
$badgeTipColorDark = #1b4b35
$badgeWarningColorDark = #574e21
$badgeErrorColorDark = #692025

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

::: tip
It is recommended that you define a color vaariable, say `$textColor` alongwith its dark variant `$textColorDark`.
:::

## Typography

Any web font can be configured in `.vuepress/styles/palette.styl` to override the default font. Set the `bodyFontFamily` and `monoFontFamily` variables with appropriate font-family names to make this work. 

A base font-size for the body can also be configured with `bodyFontSize` variable. Most of the font sizes inherit from this value.

```stylus
// .vuepress > styles > palette.styl

$themeFont = "https://fonts.googleapis.com/css?family=IBM+Plex+Mono:400,700|Lato:400,400i,700,700i&display=swap"
$bodyFontFamily = "Lato"
$monoFontFamily = "IBM Plex Mono"
$bodyFontSize = 18px
```
