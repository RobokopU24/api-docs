// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "ROBOKOP",
  tagline: "Documentation for Automat data sources and endpoints",
  url: "https://robokop.renci.org",
  baseUrl: "/api-docs/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",
  trailingSlash: false,

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "RobokopU24", // Usually your GitHub org/user name.
  projectName: "api-docs", // Usually your repo name.

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          docLayoutComponent: "@theme/DocPage",
          docItemComponent: "@theme/ApiItem", // Derived from docusaurus-theme-openapi
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            "https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/",
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      docs: {
        sidebar: {
          hideable: true,
        },
      },
      navbar: {
        title: "ROBOKOP",
        logo: {
          alt: "ROBOKOP",
          src: "img/logo.png",
          href: "https://robokop.renci.org",
          target: "_self",
        },
        items: [
          // {
          //   label: "Automat",
          //   position: "left",
          //   to: "/docs/category/automat"
          // },
          {
            href: "https://github.com/RobokopU24/",
            label: "GitHub",
            position: "right",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Automat API",
                to: "/docs/category/automat",
              },
            ],
          },
          {
            title: "Tools",
            items: [
              {
                label: "Robokop Question Builder",
                href: "https://robokop.renci.org/question-builder",
              },
              {
                label: "ExEmPLAR",
                href: "https://www.exemplar.mml.unc.edu/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "ROBOKOP U24 Github",
                href: "https://github.com/robokopu24/",
              },
            ],
          },
        ],
        // copyright: `Copyright © ${new Date().getFullYear()}`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
        additionalLanguages: ["ruby", "csharp", "php"],
      },
    }),

  plugins: [
    [
      "docusaurus-plugin-openapi-docs",
      {
        id: "openapi",
        docsPluginId: "classic",
        config: {
          automat: {
            // specPath: "https://automat.renci.org/openapi.yml",
            specPath: "api/openapi.json",
            outputDir: "docs/automat",
            // downloadUrl:
            //   "https://automat.renci.org/openapi.yml",
            sidebarOptions: {
              groupPathsBy: "tag",
              categoryLinkSource: "tag",
            },
          },
        },
      },
    ],
  ],

  themes: ["docusaurus-theme-openapi-docs"],
};

module.exports = config;
