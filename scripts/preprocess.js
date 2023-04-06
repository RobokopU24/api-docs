/*
 * Call with `node utils/make_id_unique api/openapi.json` to make each `operationId` unique (OVERWRITES FILE)
 */

const fs = require("fs");
const { v4 } = require("uuid");

const filePath = process.argv[2]; // path to JSON file passed as command line argument

async function main() {
  fs.readFile(filePath, async (err, data) => {
    if (err) throw err;
    let jsonData = JSON.parse(data);

    addServer(jsonData);
    addUuidToOperationId(jsonData);
    await writeSourceMetadata(jsonData);

    fs.writeFile(filePath, JSON.stringify(jsonData, null, 2), (err) => {
      if (err) throw err;
    });
  });
}
main();

function addServer(jsonData) {
  jsonData["servers"] = [{ url: "https://automat.renci.org" }];
}

function addUuidToOperationId(jsonData) {
  for (let key in jsonData) {
    if (jsonData.hasOwnProperty(key)) {
      if (key === "operationId") {
        jsonData[key] += "-" + v4();
      } else if (typeof jsonData[key] === "object") {
        jsonData[key] = addUuidToOperationId(jsonData[key]);
      }
    }
  }
  return jsonData;
}

async function writeSourceMetadata(jsonData) {
  const SOURCES = [
    "biolink",
    "ctd",
    "drugcentral",
    "gtex",
    "gtopdb",
    "gwas-catalog",
    "hetio",
    "hgnc",
    "hmdb",
    "human-goa",
    "icees-kg",
    "intact",
    "ontological-hierarchy",
    "panther",
    "pharos",
    "sri-reference-kg",
    "robokopkg",
    "string-db",
    "uberongraph",
    "viral-proteome",
  ];

  const metadata = new Map();

  for (const source of SOURCES) {
    const res = await fetch(`https://automat.renci.org/${source}/metadata`);
    if (!res.ok)
      throw new Error(`Something went wrong fetching the ${source} metadata`);
    const json = await res.json();
    metadata.set(source, json);
  }

  const traverseJson = (node) => {
    for (let key in node) {
      if (node.hasOwnProperty(key)) {
        if (key === "tags") {
          // replace all tags with their display name
          const tags = node[key];

          // [ 'translator', 'viral-proteome' ]
          if (Array.isArray(tags) && tags.every((t) => typeof t === "string")) {
            for (let i = 0; i < tags.length; ++i) {
              if (metadata.has(tags[i]) && metadata.get(tags[i])?.graph_name) {
                tags[i] = metadata.get(tags[i]).graph_name;
              }
            }
          }

          // [{ name: "blah", description: "blahblahblah" }]
          else if (
            Array.isArray(tags) &&
            tags.every((t) => typeof t === "object")
          ) {
            for (const tag of tags) {
              if (
                !tag?.name ||
                !metadata.has(tag.name) ||
                !metadata.get(tag.name).graph_name ||
                !tag?.description
              ) {
                console.log(`${tag.name} does not have a name/description`);
                continue;
              }

              const tagMd = metadata.get(tag.name);

              tag.name = tagMd.graph_name;

              const {
                graph_version,
                graph_description,
                graph_url,
                neo4j_dump,
                final_node_count,
                final_edge_count,
              } = tagMd;

              tag.description = `
${graph_description ?? ""}\n
${graph_version ? `**Version:** ${graph_version}` : ""}\n
${graph_url ? `**URL:** [${graph_url}](${graph_url})` : ""}\n
${neo4j_dump ? `**Neo4J:** [${neo4j_dump}](${neo4j_dump})` : ""}\n
${
  final_node_count
    ? `**Nodes:** ${parseInt(final_node_count).toLocaleString()}`
    : ""
}\n
${
  final_edge_count
    ? `**Edges:** ${parseInt(final_edge_count).toLocaleString()}`
    : ""
}\n
`;
            }
          }
        } else if (typeof node[key] === "object") {
          node[key] = traverseJson(node[key]);
        }
      }
    }
    return node;
  };
  traverseJson(jsonData);
}