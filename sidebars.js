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
  openApiSidebar: [
    "intro/intro",
    {
      type: "category",
      label: "Automat",
      link: {
        type: "generated-index",
        title: "Automat",
        description:
          "Automat hosts a diverse set of knowledge sources that support the open-source ROBOKOP application. The Automat system uses a standardized pipeline, Operational Routine for the Ingest and Output of Networks (ORION), to provide automated ingestion, curation, and harmonization across new knowledge sources, represented as graphs and accessible via application programming interfaces (APIs). The Automat APIs are configured as dockerized Plater instances on the backend. ",
        slug: "/category/automat",
      },
      // @ts-ignore
      items: require("./docs/automat/sidebar.js"),
    },
  ],
};

module.exports = sidebars;
