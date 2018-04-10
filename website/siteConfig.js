/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

/* List of projects/orgs using your project for the users page */
const users = [
  {
    caption: "User1",
    image: "/test-site/img/docusaurus.svg",
    infoLink: "https://www.facebook.com",
    pinned: true
  }
];

const siteConfig = {
  title: "BlackBird API" /* title for your website */,
  tagline:
    "The Quantum3D BlackBird API lets you write simple, fast and quality type safe code while leveraging both the UI & Unity3D ecosystems. Join a community of developers building with Quantum.",
  url: "http://www.developer.finallyfreeproductions.com" /* your website url */,
  // baseUrl: "/test-site/",
  baseUrl: "/test-site/",
  /* base url for your project */

  projectName: "Documentation",
  headerLinks: [
    { doc: "doc1", label: "Docs" },
    // { doc: 'doc4', label: 'API' },
    { page: "help", label: "Help" }
    // { blog: true, label: 'Blog' }
  ],
  users,
  /* path to images for header/footer */
  headerIcon: "img/docusaurus.svg",
  footerIcon: "img/docusaurus.svg",
  favicon: "img/favicon.png",
  /* colors for website */
  colors: {
    primaryColor: "#f27d00",
    secondaryColor: "#205C3B"
  },
  /* custom fonts for website */
  /*fonts: {
    myFont: [
      "Times New Roman",
      "Serif"
    ],
    myOtherFont: [
      "-apple-system",
      "system-ui"
    ]
  },*/
  // This copyright info is used in /core/Footer.js and blog rss/atom feeds.
  copyright: "Copyright © " + new Date().getFullYear() + "Quantum3D",
  // organizationName: 'deltice', // or set an env variable ORGANIZATION_NAME
  // projectName: 'test-site', // or set an env variable PROJECT_NAME
  highlight: {
    // Highlight.js theme to use for syntax highlighting in code blocks
    theme: "default"
  },
  scripts: ["https://buttons.github.io/buttons.js"],
  // You may provide arbitrary config keys to be used as needed by your template.
  repoUrl: "https://github.com/facebook/test-site"
};

module.exports = siteConfig;
