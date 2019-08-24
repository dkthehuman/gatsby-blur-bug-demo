import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div>
        <h1>Blog</h1>
      </div>
      <ul>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <li key={node.id}>
          <Link to={node.fields.slug}>
            {node.frontmatter.title}
          </Link>
        </li>
      ))}
      </ul>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "D MMMM YYYY")
          }
          fields {
            slug
          }
          excerpt
        }
      }
    }
  }
`
