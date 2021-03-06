require("dotenv").config()

// {
//   path: `.env.${process.env.NODE_ENV}`,
// }

// gatsby-config.js
// const myQuery = `{
//   pages: allSitePage {
//     nodes {
//       # try to find a unique id for each node
//       # if this field is absent, it's going to
//       # be inserted by Algolia automatically
//       # and will be less simple to update etc.
//       objectID: id
//       component
//       path
//       componentChunkName
//       internal {
//         type
//         contentDigest
//         owner
//       }
//     }
//   }
// }`

// // 博客搜索
// const blogQuery = `
//   {
//    posts: allMdx(
//     filter: { fileAbsolutePath: { regex: "/posts/" } }
//   ) {
//     edges {
//       node {
//         objectID: id
//         frontmatter {
//           title
//           date
//           path
//         }
//         excerpt(pruneLength: 5000)
//       }
//     }
//   }
//   }
// `

// const queries = [
//   {
//     query: myQuery,
//     transformer: ({ data }) => data.pages.nodes, // optional
//     indexName: "index name to target", // overrides main index name, optional
//     settings: {
//       // optional, any index settings
//       // Note: by supplying settings, you will overwrite all existing settings on the index
//     },
//     matchFields: ["slug", "modified"], // Array<String> overrides main match fields, optional
//   },
// ]

module.exports = {
  siteMetadata: {
    title: `Sweet Home`,
    author: {
      name: `Don Duffy`,
      summary: `who lives and works in Beijing building useful things.`,
    },
    description: `Toshiba 的 个人博客`,
    siteUrl: `https://gatsby-starter-blog-demo.netlify.app/`,
    social: {
      twitter: `iori20091101`,
    },
    viewport: "width=device-width, initial-scale=1",
    shortcut: "content/assets/favicon.ico",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        // CommonMark mode (default: true)
        commonmark: true,
        // Footnotes mode (default: true)
        footnotes: true,
        // Pedantic mode (default: true)
        pedantic: true,
        // GitHub Flavored Markdown mode (default: true)
        gfm: true,
        // tableOfContents: {
        //   heading: null,
        //   maxDepth: 6,
        // },
        plugins: [
          {
            resolve: `gatsby-remark-autolink-headers`,
            options: {
              offsetY: `100`,
              icon: `<svg aria-hidden="true" height="20" version="1.1" viewBox="0 0 16 16" width="20"><path fill-rule="evenodd" d="M4 9h1v1H4c-1.5 0-3-1.69-3-3.5S2.55 3 4 3h4c1.45 0 3 1.69 3 3.5 0 1.41-.91 2.72-2 3.25V8.59c.58-.45 1-1.27 1-2.09C10 5.22 8.98 4 8 4H4c-.98 0-2 1.22-2 2.5S3 9 4 9zm9-3h-1v1h1c1 0 2 1.22 2 2.5S13.98 12 13 12H9c-.98 0-2-1.22-2-2.5 0-.83.42-1.64 1-2.09V6.25c-1.09.53-2 1.84-2 3.25C6 11.31 7.55 13 9 13h4c1.45 0 3-1.69 3-3.5S14.5 6 13 6z"></path></svg>`,
              className: `custom-class`,
              maintainCase: true,
              removeAccents: true,
              isIconAfterHeader: true,
              elements: [`h1`, `h4`],
            },
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 630,
            },
          },
          {
            resolve: `gatsby-remark-responsive-iframe`,
            options: {
              wrapperStyle: `margin-bottom: 1.0725rem`,
            },
          },
          `gatsby-remark-prismjs`,
          `gatsby-remark-copy-linked-files`,
          `gatsby-remark-smartypants`,
        ],
      },
    },
    {
      // This plugin must be placed last in your list of plugins to ensure that it can query all the GraphQL data
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        // Use Admin API key without GATSBY_ prefix, so that the key isn't exposed in the application
        // Tip: use Search API key with GATSBY_ prefix to access the service from within components
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries: require("./src/utils/algolia-queries"),
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-sass`,
      options: {
        implementation: require("node-sass"),
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-107257239-1`,
      },
    },
    `gatsby-plugin-feed`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Don Duffy Blog`,
        short_name: `DonDuffy`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `content/assets/desk-icon.png`,
      },
    },
    {
      resolve: `gatsby-plugin-disqus`,
      options: {
        shortname: `iori-1`,
      },
    },
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sitemap`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
