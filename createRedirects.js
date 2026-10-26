/* 
WARNING: The redirect map is deprecated!!!
To add a redirect, please add it to the object in the file `301redirects.json` in the root of the project.
The format is as follows:
"/docs/the/old/link/": {
    "destination": "/docs/new/link",
    "addedOn": "2022-10-01"
},
addedOn is optional but recommended, please use the format YYYY-MM-DD, this is used to track when the redirect was added.
*/

const linkFile = require('./301redirects.json');

// Build JS redirect map from JSON file. Several old links can share a destination, so each
// destination holds a list.
let redirectPaths = Object.keys(linkFile).reduce((redirects, sourceLink) => {
  const destinationLink = linkFile[sourceLink].destination;
  (redirects[destinationLink] ??= []).push(sourceLink);
  return redirects;
}, {});

const createRedirects = (path) => {
  // Paths arrive with a trailing slash (trailingSlash: true); 301redirects.json destinations are written without it
  const sourceLinks = redirectPaths[path.replace(/\/$/, "")] ?? [];

  // Redirects all url without docs to docs/../..
  return [...sourceLinks, path.replace(/^\/docs/g, "")];
};

module.exports = createRedirects;
