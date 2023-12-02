// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: '롤체 공략',
  tagline: '전략적 팀 전투 공략',
  favicon: 'img/favicon-32x32.png',

  // Set the production url of your site here
  url: 'https://tftutils.com',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'gaki2', // Usually your GitHub org/user name.
  projectName: 'tft-docs', // Usually your repo name.

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/gaki2/tft-docs',
          lastVersion: 'current',
          versions: {
            current: {
              label: '시즌 10',
              path: 'season10',
            },
          },
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/poro.jpeg',
      navbar: {
        title: '롤체 공략',
        logo: {
          alt: 'poro',
          src: 'https://tft-utils.s3.ap-northeast-2.amazonaws.com/assets/poro.jpeg',
        },
        items: [
          {
            type: 'docsVersionDropdown',
          },
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: '공략',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Docs',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/season10/category/1티어-덱',
              },
            ],
          },
          {
            title: 'Community',
            items: [
              {
                label: '카카오톡',
                href: 'https://open.kakao.com/o/gMgieVSf',
              },
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'tft-docs GitHub',
                href: 'https://github.com/gaki2/tft-docs',
              },
              {
                label: 'tft-utils GitHub',
                href: 'https://github.com/gaki2/tft-utils',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} tft-docs, Inc. Built with gaki2.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
    }),
};

module.exports = config;
