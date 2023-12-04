/**
 * Creating a sidebar enables you to:
 - create an ordered group of docs
 - render a sidebar for each doc of that group
 - provide next/previous navigation

 The sidebars can be generated from the filesystem, or explicitly defined here.

 Create as many sidebars as you want.
 */

// @ts-check

/** @type {import('@docusaurus/plugin-content-docs').SidebarsConfig} */
const sidebars = {
  // By default, Docusaurus generates a sidebar from the docs folder structure
  // tutorialSidebar: [{type: 'autogenerated', dirName: '.'}],
  tutorialSidebar: [
    {
      type: 'category',
      label: '1티어 덱',
      link: {
        type: 'generated-index',
        title: '1티어 덱',
        description:
            "1티어 덱 목록입니다. 매주 수요일 업데이트 됩니다.",
        keywords: ['1tier', 'op'],
        image: '/img/poro1.png',
      },
      items: ['jazz_reroll', 'stage_diver','guardian_emo', 'country_reroll', 'disco', '7kda_ahri_akali'],
    },
  ],

};

module.exports = sidebars;
