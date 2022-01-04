const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Lunes Docs',
  tagline: 'The Future in the Present!',
  url: 'https://lunes.gitlab.io/blockchain/docs-lunesblock/',
  baseUrl: '/docs/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lunes-platform',
  projectName: 'docs-lunes',
  themeConfig: {
    navbar: {
      title: 'Lunes Docs',
      logo: {
        alt: 'Lunes logo',
        src: 'img/lunes.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        { href: '/blog', label: 'Blog', position: 'left' },
        {
          label: 'GitLab',
          href: 'https://git.lunes.io/blockchain/production/docs',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Development',
          items: [
            {
              label: 'Blockchain API mainnet',
              href: 'https://lunesnode.lunes.io/',
            },
            {
              label: 'Blockchain API testnet',
              href: 'https://lunesnode-testnet.lunes.io/',
            },
            {
              label: 'BlockExplorer mainnet',
              href: 'https://blockexplorer.lunes.io/',
            },
            {
              label: 'BlockExplorer testnet',
              href: 'https://blockexplorer-testnet.lunes.io/',
            },
            {
              label: 'DEX API mainnet',
              href: 'https://5.196.155.34:4444',
            },
            {
              label: 'DEX API testnet',
              href: 'http://5.196.155.46:4444',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Facebook',
              href: 'https://www.facebook.com/lunesplatform/',
            },
            {
              label: 'Instagram',
              href: 'https://www.instagram.com/lunesplatform/',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/LunesPlatformPT',
            },
            {
              label: 'Linkedin',
              href: 'https://www.linkedin.com/company/lunes-platform',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lunesplatform',
            },
          ],
        },
        {
          title: 'Exchanges',
          items: [
            {
              label: 'Coin Market Cap',
              href: 'https://coinmarketcap.com/pt-br/currencies/lunes/',
            },
            {
              label: 'BankCex',
              href: 'https://bankcex.com/exchange-advanced.html?symbol=LUNES-BTC',
            },
            {
              label: 'Vindax',
              href: 'https://bankcex.com/exchange-advanced.html?symbol=LUNES-BTC',
            },
            {
              label: 'CatEx',
              href: 'https://www.catex.io/trading/LUNES/BTC',
            },
          ],
        },
        {
          title: 'Projects',
          items: [
            {
              label: 'Lunes Node',
              href: 'https://github.com/lunes-platform/lunesnode',
            },
            {
              label: 'Lunes Py',
              href: 'https://github.com/lunes-platform/lunespy',
            },
            {
              label: 'Lunes Js',
              href: 'https://github.com/lunes-platform/lunesjs',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Lunes Doc, Inc. Built with Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
