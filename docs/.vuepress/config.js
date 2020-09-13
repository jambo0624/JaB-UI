module.exports = {
  title: 'Jab-UI',
  description: 'an elegant UI framework based on Vue 2.0',
  themeConfig: {
    logo: '/assets/img/logo.png',
    nav: [
      { text: '主页', link: '/' },
      { text: '欢迎Star', link: 'https://github.com/jambo0624/JaB-UI', target: '_blank' },
      { text: 'GitHub', link: 'https://github.com/jambo0624', target:'_blank' },
    ],
    sidebar: [
      {
        title: '介绍',
        collapse: false,
        children: ['/introduce/']
      },
      {
        title: '入门',
        collapse: false,
        children: ['/install/','get-started/']
      },
      {
        title: '组件',
        collapse: false,
        children: [
          "/components/button",
          "/components/input",
          "/components/tabs",
          "/components/grid",
          "/components/layout",
          "/components/popover",
          "/components/collapse",
          "/components/toast"
        ]
      }
    ]
  }
}
