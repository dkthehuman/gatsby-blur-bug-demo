import React from 'react'
import { Link, graphql } from 'gatsby'
import Layout from '../layout/layout'

export default ({ data }) => {
  return (
    <Layout>
      <div style={{ padding: '2rem' }}>
        <div>
          <h1>Blog</h1>
        </div>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <div key={node.id}>
            <Link to={node.fields.slug}>
              <h1>{node.frontmatter.title}</h1>
            </Link>
          </div>
        ))}
      </div>
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
