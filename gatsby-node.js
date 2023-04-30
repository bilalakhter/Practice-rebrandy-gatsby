const path = require(`path`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    query {
      allWpPost {
        nodes {
          id
          slug
        }
      }
    }
  `)

  const posts = result.data.allWpPost.nodes

  posts.forEach((post) => {
    createPage({
      path: `/blog/${post.slug}`,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        id: post.id,
      },
    })
  })
}
