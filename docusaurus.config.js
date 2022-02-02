const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const math = require('remark-math');
const katex = require('rehype-katex');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: '🔭 Telescope',
  tagline: 'The Future in the Present!',
  url: 'https://git.lunes.io/',
  baseUrl: '/telescope/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'lunes-platform',
  projectName: 'telescope',
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: false,
      switchConfig: {
        darkIcon: '🌙',
        darkIconStyle: {
          marginLeft: '1px',
        },
        lightIcon: '☀️',
        lightIconStyle: {
          marginLeft: '1px',
        },
      },
    },
    navbar: {
      title: 'Home',
      logo: {
        alt: 'Lunes logo',
        src: 'img/lunes.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'releases',
          label: 'Documentation',
          position: 'left',
        },
        {
          label: 'Lunes Blockchain',
          href: 'https://blockexplorer.lunes.io',
          position: 'right'
        },
        {
          label: 'GitHub',
          href: 'https://github.com/lunes-platform/',
          position: 'right'
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'API',
          items: [
            {
              label: 'mainnet',
              href: 'https://lunesnode.lunes.io/',
            },
            {
              label: 'testnet',
              href: 'https://lunesnode-testnet.lunes.io/',
            }
          ],
        },
      ],
      logo: {
        alt: 'Lunes Platform Logo',
        src: 'img/lunes.png',
        href: 'https://lunes.io',
        width: 50,
        height: 50,
      },
      copyright: `Copyright © ${new Date().getFullYear()} Lunes 🔭 Telescope. Build with 💜 and Docusaurus.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['systemd']
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: 'docs',
          remarkPlugins: [math],
          rehypePlugins: [katex]
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  stylesheets: [
    {
      href: 'https://cdn.jsdelivr.net/npm/katex@0.13.11/dist/katex.min.css',
      integrity:
        'sha384-Um5gpz1odJg5Z4HAmzPtgZKdTBHZdw8S29IecapCSB31ligYPhHQZMIlWLYQGVoc',
      crossorigin: 'anonymous',
    },
  ],
};
