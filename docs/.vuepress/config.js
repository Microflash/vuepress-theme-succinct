module.exports = {
  title: "Succinct",
  description: "A slightly opinionated theme for Vuepress",
  base: "/vuepress-theme-succinct/",
  dest: "docs/.vuepress/theme/docs",
  theme: "succinct",
  themeConfig: {
    lastUpdated: true,
    nav: [
      {
        text: "Home",
        link: "/"
      },
      {
        text: "GitHub",
        link: "https://github.com/Microflash/vuepress-theme-succinct"
      }
    ],
    sidebar: [
      {
        title: "Guides",
        collapsible: false,
        children: [
          "/guides/",
          "/guides/styling"
        ]
      }
    ]
  }
};

