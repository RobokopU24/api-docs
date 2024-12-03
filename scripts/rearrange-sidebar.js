let fs = require("fs");

const SIDEBAR_PATH = "./docs/automat/sidebar.js";

let sidebar = require("../docs/automat/sidebar");

// Remove trapi, translator and automat sidebar items, as well as introduction
sidebar = sidebar.filter(
  (item) =>
    item.id !== "automat/automat" &&
    !["trapi", "translator", "automat"].includes(item.label)
);

// Make ROBOKOP KG the first item
const robokopKGIndex = sidebar.findIndex((item) => item.label === "ROBOKOP KG");
if (robokopKGIndex !== -1) {
  const [robokopKg] = sidebar.splice(robokopKGIndex, 1);
  sidebar.unshift(robokopKg);
}

// Rearrange sidebar endpoints
const labelOrder = [
  "Accepts TRAPI Queries.",
  "Run a Neo4j cypher query.",
  "Find `node` by `curie`",
  "Get one hop results from source type to target type. ",
  "Get one-hop connection schema",
  "Metadata about the knowledge graph.",
  "Meta knowledge graph representation of this TRAPI web service.",
  "Test data for usage by the SRI Testing Harness.",
];

sidebar.forEach((category) => {
  if (category.items && category.items.length) {
    const orderedItems = [];

    labelOrder.forEach((label) => {
      const foundItem = category.items.find((item) => item.label === label);
      if (foundItem) {
        orderedItems.push(foundItem);
      }
    });

    category.items = orderedItems;
  }
});

const stringified = `module.exports=${JSON.stringify(sidebar)};`;

fs.writeFile(SIDEBAR_PATH, stringified, (err) => {
  if (err) throw err;
});
