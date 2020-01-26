module.exports = {
  title: 'Succinct',
  description: 'A slightly opinionated theme for Vuepress',
  base: '/vuepress-theme-succinct/',
  dest: 'docs/.vuepress/theme/docs',
  theme: 'succinct',
  themeConfig: {
    lastUpdated: 'Last Updated',
    nav: [
      { text: 'Home', link: '/' },
      { text: 'GitHub', link: 'https://github.com/Microflash/vuepress-theme-succinct' }
    ],
    sidebar: [
      {
        title: 'Guide',
        collapsable: false,
        children: [
          '/guide/',
          '/guide/configuration'
        ]
      }
    ]
  }
}
