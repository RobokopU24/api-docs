# ROBOKOP API Docs

This website hosts documentation about the Automat API service, which contains information about each source and its endpoints.

## Development

This site is statically generated, and hosted on Sterling. This means that all of the data presented on the site is ingested at build time, and won't be updated unless the site is built again (there is one exception to this, data on the overview page at `/api-docs/docs/category/automat` is loaded on the client side).

### Docusaurus

The framework behind this is [Docusaurus](https://docusaurus.io/). At a high level, Docusaurus takes MDX files (Markdown which can also include React code), and generates a documentation site, handling all the routing and styling for you. For this site, the content files all live in `/docs/automat`. These docs can be built into a site using the Docusaurus commands listed in the NPM scripts (`package.json`):

- `npm run start` or `docusaurus start`: builds the site and serves it on a local development server, including hot-module reloading
- `npm run build` or `docusaurus build`: builds the site's and puts the static files in the `/build` directory, use `npm run serve` or `docusaurus serve` to serve this directory locally for testing
- `npm run deploy` or `docusaurus deploy`: builds the site and deploys it to gh-pages. [Docs](https://docusaurus.io/docs/deployment#deploying-to-github-pages)
- `npm run clear` or `docusaurus clear`: clears the docusaurus working cache `/.docusaurus`. This can be useful if things break and you want a clear start or you're noticing stale data

For more commands, see the [docs](https://docusaurus.io/docs/cli)

### docusaurus-openapi-docs

Docusaurus's origianl usecase was for maintainers of libraries to write their own documentation content and have it built into a site, without having to worry about designing a website from scratch. However, the Automat API is documented by an OpenAPI doc describing available endpoints and the expected types and data returned by each endpoint. If you look in the `/docs` directory, there are a bunch of MDX files, at least one for each endpoint. As there is a lot of information, we use a plugin on top of Docusaurus to generate the MDX files automatically based on this OpenAPI doc (which lives at [`/api/openapi.json`](/api/openapi.json)). The plugin we used is [PaloAltoNetworks/docusaurus-openapi-docs](https://github.com/PaloAltoNetworks/docusaurus-openapi-docs). It takes an OpenAPI doc and generates the MDX files automatically. To generate the docs and place them in the `/docs/automat` directory, run:

```
npm run clean-api-docs automat
npm run gen-api-docs automat
```

The location of the OpenAPI spec file is specified in `docusaurus.config.js` under `specPath`. _Note that this can also be a network path, but we're referencing the local copy in `/api/openapi.json`_

### Deployment Github Action

Note that running the above commands to clean and generate the MDX doc files based on the `/api/openapi.json` file, but **does not** fetch the newest openapi.json from Automat. Thus, in order to update the docs site, you must update the `openapi.json` before generating. In order to ease this process, there is a Github Action script at `/.github/workflows/generate-docs.yml`.

> **Note**
> To update the site, click the "Actions" in this github repo, select "Generate docs" and click the "Run workflow" dropdown. Ensure the branch is running on main, and click the "Run workflow" button. This will automatically fetch the latest data from Automat and generate the MDX files.
>
> To publish this on Sterling, create an image by creating a [release](https://github.com/RobokopU24/api-docs/releases). This triggers the ["Build and push image to Github Container Registry"](/.github/workflows/build-and-push-image.yml) action based on the state of the repository where the release is created.
>
> **Warning**
> Don't create a release until the "Generate docs" script has completed, otherwise the image will not have the up-to-date data. It may take a minute to complete.

#### Understanding the generate docs script

[`/.github/workflows/deploy.yml`](/.github/workflows/generate-docs.yml)

The GH Action script takes several steps to generate the MDX files. These are documented here to aid in debugging:

| `step`(s)                                          | description                                                                                                      |
| -------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------- |
| Cache node modules                                 | Save the node_modules folder so GH Actions doesn't have to download it from npm each time if nothing has changed |
| Write current date to environment variable         | Stores the current datetime, to be used in the commit message                                                    |
| Add git user configuration                         | The update commit will be from a "Github Actions" bot user, set up in this step                                  |
| Fetch staging from remote                          | Base the update from the `staging` branch                                                                        |
| Install dependencies                               | Install all node modules, these are cached, so this step will use the cache if GH has reference to them          |
| Fetch newest Automat OpenAPI document and metadata | See "Description of preprocess.js" below                                                                         |
| Generate Docusaurus mdx files                      | Clean and generate the `/docs` folder                                                                            |
| Rewrite sidebar.js                                 | See "Description of rearrange-sidebar.js" below                                                                  |
| Remove "Introduction" page                         | Removes the MDX file that is autogenerated for an "introduction" page that we're not using                       |
| Check for untracked files                          | Checks if there were any changes to the openapi.json file. If not, the deploy script will have no effect.        |
| Commit changes to staging                          | (only if there were untracked files)                                                                             |

#### Description of preprocess.js

[`/scripts/preprocess.js`](/scripts/preprocess.js)

The preprocess script handles fetching and transforming the OpenAPI spec, and saving it at `/api/openapi.json`. It performs the following steps:

| step                                                | description                                                                                                                                                                                                                                                                                                                                   |
| --------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Fetch the most up to date OpenAPI spec from automat | Currently fetches from `https://automat-u24.apps.renci.org/openapi.yml` (check file to verify in case this has changed)                                                                                                                                                                                                                       |
| Fetches metadata from each source                   | The list of sources is currently hardcoded into the script. The code iterates through this list as fetches the metadata from each service. The current path is `https://automat-u24.apps.renci.org/<SERVICE>/metadata`                                                                                                                        |
| Update the OpenAPI tags with their display names    | The Automat OpenAPI file by default uses the backend names for each service as tags. The docusaurus-openapi-docs plugin uses the tags to make each category in the sidebar. The code replaces the backend codename for each service with the human readable name returned by the metadata as `graph_name`. For instance, `ctd` becomes `CTD`. |
| Insert graph metadata into `description` tags       | Puts several items from the metadata service into the `description` tags on each page. These are:<br /> `graph_description`<br /> `graph_version`<br /> `graph_url`<br /> `neo4j_dump`<br /> `final_node_count`<br /> `final_edge_count`<br />                                                                                                |

#### Description of rearrange-sidebar.js

[`/scripts/rearrange-sidebar.js`](/scripts/rearrange-sidebar.js)

The rearrange-sidebar script transforms the [`/docs/automat/sidebar.js`](/docs/automat/sidebar.js) file that is automatically generated by the docusaurus-openapi-docs plugin when running `npm run gen-api-docs automat`. It performs the following steps:

| step                                             | description                                                                                                                                                                   |
| ------------------------------------------------ | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Remove `trapi`, `translator`, and `automat` tags | Remove these tags from the sidebar, they're not real knowledge graph sources, but show up in the sidebar when the docs are generated as they are also tags in the OpenAPI doc |
| Make ROBOKOP KG the first item                   | By default the sources are arranged alphabetically. This steps lists ROBOKOP KG first.                                                                                        |
