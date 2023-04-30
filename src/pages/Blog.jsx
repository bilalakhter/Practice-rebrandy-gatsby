import React from 'react'
import './index.css'
import { Link, useStaticQuery, graphql } from "gatsby"

const Blog = () => {
  const data = useStaticQuery(graphql`
    query {
      allWpPost {
        nodes {
          id
          title
          content
          slug
          featuredImage {
            node {
              mediaItemUrl
            }
          }
        }
      }
    }
  `)

  const posts = data.allWpPost.nodes

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "..."
    } else {
      return content
    }
  }

  return (


    <div className='blogwrap'>
              <h2 className='cardsheading'>Check our blog post</h2>
      <div className="blog-card-flex">
        {posts.map((post) => (
          <div className="card-box blog-card-box" key={post.id}>
            <h2 className='hypsa'>{post.title}</h2>
            {post.featuredImage && (
              <img className='blogimg' src={post.featuredImage.node.mediaItemUrl} alt={post.title} />
            )}
            <div className='blogcardctn' dangerouslySetInnerHTML={{ __html: truncateContent(post.content, 50) }} />
            <Link to={`/blog/${post.slug}`}>
              <button className='blogbtn'>Read more</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Blog
