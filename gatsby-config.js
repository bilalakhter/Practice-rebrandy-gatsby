
/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
    siteUrl: `https://gatsbystarterdefaultsource.gatsbyjs.io/`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    {
  
      resolve: `gatsby-source-wordpress`,
      options: {
  
        url:
          process.env.WPGRAPHQL_URL ||
          `Your wordpress webiste url/graphql`,
      },
    },

  ],
}
