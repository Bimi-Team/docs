import { defineConfig } from 'vitepress'
import * as ArtalkCDN from '../code/ArtalkCDN.json'
import * as Versions from '../code/ArtalkVersion.json'

export default {
  // These are app level configs.
  lang: 'zh-CN',
  title: 'BimiLinux',
  description: '一个全新的linux系统',
  lastUpdated: true,

  head: [
     ['link', { href: ArtalkCDN.CSS, rel: 'stylesheet' }],
   ],
  themeConfig: {
    nav: [
      { text: 'Guide', link: 'guide/what-is-bimilinux.md' },
      { text: 'Configs', link: '/configs' },
      { text: 'Changelog', link: 'https://github.com/...' }
    ],
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ],
    sidebar: {
      // This sidebar gets displayed when user is
      // under `guide` directory.
      '/guide/': [
        {
          text: 'Guide',
          items: [
            // This shows `/guide/index.md` page.
            { text: '介绍', link: '/guide/' }, // /guide/
            { text: '开发计划', link: '/guide/1.md' },
          ]
        }
      ],

      // This sidebar gets displayed when user is
      // under `config` directory.
      '/config/': [
        {
          text: '镜像下载',
          items: [
            // This shows `/config/index.md` page.
            { text: 'Index', link: '/config/' }, // /config/index.md
          ]
        }
      ]
    },
  },
}
