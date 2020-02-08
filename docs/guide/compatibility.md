---
title: Compatibility
---

# Compatibility

The support for `prefers-color-scheme` and `CSS variables` may vary depending on your browser and operating system. 

You can check the level of support on [caniuse](https://caniuse.com/):

- [prefers-color-scheme](https://caniuse.com/#feat=prefers-color-scheme)
- [CSS Variables](https://caniuse.com/#feat=css-variables)

In case the support for these specifications is not available, `vuepress-theme-succinct` will fallback to the light theme. You can override this behavior through `$fallbackTheme` in `palette.styl` file.

```stylus{4}
// .vuepress > styles > palette.styl

// fallback theme
$fallbackTheme = 'dark'
```
