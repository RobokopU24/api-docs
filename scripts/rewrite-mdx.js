const fs = require("fs");
const path = require("path");

const AUTOMAT_PATH = "./docs/automat/";

const oldString = `\
\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items}/>
\`\`\``;

const newString = `\
## Query Endpoints
\`\`\`mdx-code-block
import DocCardList from '@theme/DocCardList';
import {useCurrentSidebarCategory} from '@docusaurus/theme-common';

<DocCardList items={useCurrentSidebarCategory().items.slice(0, 6)}/>
\`\`\`

## Metadata Endpoints    
\`\`\`mdx-code-block
<DocCardList items={useCurrentSidebarCategory().items.slice(6)}/>
\`\`\``;

fs.readdir(AUTOMAT_PATH, (err, files) => {
  if (err) {
    console.error("Error reading files:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".tag.mdx")) {
      const filePath = path.join(AUTOMAT_PATH, file);
      fs.readFile(filePath, "utf8", (err, data) => {
        if (err) {
          console.error(`Error reading file ${file}:`, err);
          return;
        }

        const newData = data.replace(oldString, newString);

        fs.writeFile(filePath, newData, "utf8", (err) => {
          if (err) {
            console.error(`Error writing file ${file}:`, err);
            return;
          }

          console.log(`Successfully updated ${file}`);
        });
      });
    }
  });
});
