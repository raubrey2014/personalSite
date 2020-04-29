import React from "react"
import styled from "@emotion/styled"
import { graphql } from "gatsby"
import Header from "../components/header"

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <>
      <Header />
      <BlogPostBody className="HeroFade">
        <h2>{post.frontmatter.title}</h2>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </BlogPostBody>
    </>
  )
}

const BlogPostBody = styled.div`
  max-width: 42rem;
  margin: 3rem auto;
  padding: 1rem;
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
