module.exports = {
  base: '/JaB-UI/',
  title: 'JaB-UI',
  description: 'an elegant UI framework based on Vue 2.0',
  markdown: {
    anchor: { permalink: false },
  },
  themeConfig: {
    logo: '',
    nav: [
      { text: '主页', link: '/' },
      { text: '欢迎Star', link: 'https://github.com/jambo0624/JaB-UI', target: '_blank' },
      { text: 'GitHub', link: 'https://github.com/jambo0624', target:'_blank' },
    ],
    sidebar: [
      {
        title: '介绍',
        collapsable: false,
        children: ['/introduce/']
      },
      {
        title: '入门',
        collapsable: false,
        children: ['/install/','get-started/']
      },
      {
        title: '组件',
        collapsable: false,
        children: [
          "/components/button",
          "/components/collapse",
          "/components/grid",
          "/components/input",
          "/components/layout"
        ]
      }
    ]
  }
}
