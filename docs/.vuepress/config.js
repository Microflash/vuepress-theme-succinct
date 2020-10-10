module.exports = {
  title: 'Succinct',
  description: 'A slightly opinionated theme for Vuepress',
  dest: 'public',
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
          '/guide/compatibility',
          '/guide/configuration'
        ]
      }
    ]
  }
}
