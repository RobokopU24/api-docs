const fs = require("fs");
const path = require("path");

const AUTOMAT_PATH = "./docs/automat/";

// Strings for .tag.mdx files
const oldStringTag = `\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
\`\`\``;

const newStringTag = `
## Query Endpoints
\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items.slice(0, 5)}/>
\`\`\`

## Metadata Endpoints    
\`\`\`mdx-code-block
<DocCardList items={useCurrentSidebarCategory().items.slice(5)}/>
\`\`\``;

// Strings for .api.mdx files
const insertBeforeRequest = "<details><summary>Schema</summary>\n\n";
const appendToEndOfFile = "\n</details>";

fs.readdir(AUTOMAT_PATH, (err, files) => {
  if (err) {
    console.error("Error reading files:", err);
    return;
  }

  files.forEach((file) => {
    const filePath = path.join(AUTOMAT_PATH, file);
    fs.readFile(filePath, "utf8", (err, data) => {
      if (err) {
        console.error(`Error reading file ${file}:`, err);
        return;
      }

      let newData = data;

      // Process .tag.mdx files
      if (file.endsWith(".tag.mdx")) {
        newData = data.replace(oldStringTag, newStringTag);
      }

      // Process .api.mdx files
      else if (file.endsWith(".api.mdx")) {
        const requestIndex = newData.indexOf("## Request");
        if (requestIndex !== -1) {
          newData =
            newData.slice(0, requestIndex) +
            insertBeforeRequest +
            newData.slice(requestIndex);
          newData += appendToEndOfFile;
        }
      }

      fs.writeFile(filePath, newData, "utf8", (err) => {
        if (err) {
          console.error(`Error writing file ${file}:`, err);
          return;
        }

        console.log(`Successfully updated ${file}`);
      });
    });
  });
});
