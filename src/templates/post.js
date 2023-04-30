import React from "react"
import { graphql } from "gatsby"
import "./post.css"
import Header from "/src/pages/Header"
import Footer from "/src/pages/Footer"
const Post = ({ data }) => {
  const post = data.wpPost

  return (
    <>  
    <Header />
    <div className="singlepost">
      <h1 className="singletitle">{post.title}</h1>
      {post.featuredImage && (
        <img className="singleimg" src={post.featuredImage.node.mediaItemUrl} alt={post.title} />
      )}
      <div className="singlecontent" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
    <Footer />
    </>
  )
}

export const query = graphql`
  query($id: String!) {
    wpPost(id: { eq: $id }) {
      id
      title
      content
      featuredImage {
        node {
          mediaItemUrl
        }
      }
    }
  }
`

export default Post
