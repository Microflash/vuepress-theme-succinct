module.exports = {
  title: 'Succinct',
  description: 'A slightly opinionated theme for Vuepress',
  base: '/vuepress-theme-succinct/',
  dest: 'docs/.vuepress/theme/docs',
  theme: 'succinct',
  globalUIComponents: [
    'ThemeManager'
  ],
  themeConfig: {
    lastUpdated: 'Last Updated',
    repo: 'Microflash/vuepress-theme-succinct',
    nav: [
      { text: 'Home', link: '/' }
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
