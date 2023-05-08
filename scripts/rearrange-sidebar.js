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

const stringified = `module.exports=${JSON.stringify(sidebar)};`;

fs.writeFile(SIDEBAR_PATH, stringified, (err) => {
  if (err) throw err;
});
