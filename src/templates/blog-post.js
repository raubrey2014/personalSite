import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Layout from "@components/layout"
import SEO from "@components/seo"

export default ({ data }) => {
  const post = data.markdownRemark
  const title = post.frontmatter.title || ""

  return (
    <>
      <SEO title={title} />
      <Layout>
        <BlogPostBody className="HeroFade">
          <h2>{post.frontmatter.title}</h2>
          <div
            style={{ color: "white" }}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
        </BlogPostBody>
      </Layout>
    </>
  )
}

const BlogPostBody = styled.div`
  color: ${p => p.theme.colors.textPrimary};
  max-width: 42rem;
  margin: 3rem auto;
  padding: 1rem;
  h1,
  h2,
  h3,
  h4,
  h6,
  p,
  span {
    color: ${p => p.theme.colors.textPrimary};
  }
  a {
    color: ${p => p.theme.colors.secondary};
  }
  blockquote {
    border-color: ${p => p.theme.colors.secondary};
  }
`

export const query = graphql`
  query BlogPostQuery($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`
