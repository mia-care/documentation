const createRedirects = require("./createRedirects");
const createEditUrl = require("./createEditUrl");

async function createConfig() {
  const mdxMermaid = await import('mdx-mermaid')

  return {
    title: "Mia-Care Documentation",
    tagline: "Learn how Mia-Care can help you to develop SaMD",
    url: "https://mia-care.github.com",
    baseUrl: "/",
    onBrokenLinks: "throw",
    onBrokenMarkdownLinks: 'throw',
    favicon: "img/favicon.ico",
    organizationName: "Mia-Care", // Usually your GitHub org/user name.
    projectName: "Mia-Care", // Usually your repo name.
    themeConfig: {
      prism: {
        additionalLanguages: ['rego', 'java', 'csharp', 'kotlin'],
      },
      image: "img/documentation-link-preview.png",
      algolia: {
        placeholder: "Search for terms, features and more...",
        apiKey: "...",
        appId: "...",
        indexName: "mia-care-docs",
        contextualSearch: true,
      },
      colorMode: {
        // "light" | "dark"
        defaultMode: "light",
        disableSwitch: false,
      },
      navbar: {
        hideOnScroll: false,
        title: "Mia-Care Docs",
        logo: {
          alt: "Mia-Care logo",
          src: "img/logo.png",
          width: 120,
          height: 32,
          style: {padding: '2px 5px' }
        },
        items: [
        {
          label: "Products",
          position: "left",
          activeBaseRegex: "(docs|docs/\\d.x)/(development_suite|marketplace|libraries|tools|runtime_suite|microfrontend-composer|fast_data|dev_portal)",
          type: "dropdown",
          items: [{
            type: 'doc',
            docId: "p4samd/overview",
            label: "P4SaMD",
            activeBaseRegex: "(docs|docs/\\d.x)/p4samd"
          }
          ]
        },
        {
          href: "https://mia-care.io/competence-center/video/mia-care-product-demo-platform-for-software-as-a-medical-device/",
          position: "left",
          label: "Product demo"
        },
        {
          href: "https://mia-care.io",
          position: "left",
          label: "About us"
        },
        {
          type: "docsVersionDropdown",
          position: "right",
          dropdownItemsBefore: [],
          dropdownItemsAfter: []
        }
        ],
      },
      footer: {
        style: "dark",
        links: [{
          title: "Mia-Care P4SaMD",
          // items: [{
          //   label: "How to install",
          //   to: "/docs/info/how_to_install",
          // },
          // {
          //   label: "Bug Policy",
          //   to: "/docs/info/bug_policy",
          // },
          // {
          //   label: "Supported browsers",
          //   to: "/docs/info/supported_browser",
          // },
          // {
          //   label: "Open Source Software",
          //   to: "/docs/info/oss",
          // },
          // {
          //   label: "Subprocessor",
          //   to: "/docs/info/subprocessor",
          // },
          // {
          //   label: "Service Level Agreement",
          //   to: "/docs/info/mia_service_level_agreement",
          // },
          // {
          //   label: "Audit Process",
          //   to: "/docs/info/audit_process",
          // },
          // ],
        },
        {
          title: "Company",
          items: [{
            label: "Website",
            href: "https://mia-care.io",
          },
          {
            label: "About",
            href: "https://mia-care.io/about-us/",
          },
          {
            label: "Blog",
            href: "https://mia-care.io/blog/",
          },
          {
            label: "Newsroom",
            href: "https://mia-care.io/newsroom/",
          },
          {
            label: "Privacy Policy",
            href: "https://mia-care.io/wp-content/uploads/2021/07/Mia-Care_Privacy_Policy_EN.pdf",
          },
          ],
        },
        {
          title: "Mia-Platform",
          items: [{
            label: "Mia-Platform Console",
            href: "https://mia-platform.eu/platform/console/",
          },
          {
            label: "Mia-Platform Marketplace",
            href: "https://mia-platform.eu/platform/mia-platform-marketplace/",
          },
          {
            label: "Mia-Platform Fast Data",
            href: "https://mia-platform.eu/platform/console/fast-data",
          },
          {
            label: "Mia-Platform Release Notes",
            to: "https://docs.mia-platform.eu/docs/release-notes/versions",
          },
          ],
        },
        {
          title: "Developer Resources",
          items: [{
            label: "Mia-Platform Status Page",
            href: "https://status.console.cloud.mia-platform.eu"
          },
          {
            label: "Library",
            href: "https://resources.mia-platform.eu/en/library",
          },
          {
            label: "GitHub",
            href: "https://github.com/mia-care",
          },
          {
            label: "GitHub Marketplace",
            href: "https://github.com/mia-platform-marketplace",
          },
          ],
        },
        {
          title: "Education & Support",
          items: [{
            label: 'Support',
            href: 'https://makeitapp.atlassian.net/servicedesk/customer/portal/21'
          },
          {
            label: "Community",
            to: "https://github.com/mia-platform/community/discussions",
          },
          ],
        },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Mia-Care srl. All rights reserved. Built with Docusaurus.`,
      }
    },
    presets: [
      [
        "@docusaurus/preset-classic",
        {
          docs: {
            remarkPlugins: [mdxMermaid.default, {
              theme: {
                light: 'default',
                dark: 'dark'
              }
            }],
            editUrl: createEditUrl,
            sidebarPath: require.resolve("./sidebars.js"),
            lastVersion: "current",
            versions: {
              current: {
                label: "2.0 (Current)",
                path: "",
                banner: "none"
              },
            },
            async sidebarItemsGenerator({
              isCategoryIndex: defaultCategoryIndexMatcher,
              defaultSidebarItemsGenerator,
              ...args
            }) {
              return defaultSidebarItemsGenerator({
                ...args,
                isCategoryIndex(params) {
                  const {
                    fileName
                  } = params
                  return defaultCategoryIndexMatcher(params) || ['overview', '10_overview'].includes(fileName.toLowerCase())
                },
              });
            },
          },
          theme: {
            customCss: require.resolve("./src/css/custom.css"),
          },
          sitemap: {
            changefreq: "weekly",
            priority: 0.5,
          }
        },
      ],
    ],
    plugins: [
      [
        "@docusaurus/plugin-client-redirects",
        {
          fromExtensions: ["html"],
          createRedirects,
        },
      ],
      [
        "./src/plugins/gtm",
        {
          trackingID: 'GTM-PKKZ6XT',
        },
      ],
      "./src/plugins/image-zoom"
    ],
    webpack: {
      jsLoader: (isServer) => ({
        loader: require.resolve('swc-loader'),
        options: {
          jsc: {
            parser: {
              syntax: 'typescript',
              tsx: true,
            },
            target: 'es2017',
          },
          module: {
            type: isServer ? 'commonjs' : 'es6',
          },
        },
      }),
    },
  }
}

module.exports = createConfig;
