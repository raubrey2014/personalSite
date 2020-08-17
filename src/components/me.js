import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "@emotion/styled"
import media from "../media-query/media-query"

/*
 * This component is built using `gatsby-image` to automatically serve optimized
 * images with lazy loading and reduced file sizes. The image is loaded using a
 * `useStaticQuery`, which allows us to load the image from directly within this
 * component, rather than having to pass the image data down from pages.
 *
 * For more information, see the docs:
 * - `gatsby-image`: https://gatsby.dev/gatsby-image
 * - `useStaticQuery`: https://www.gatsbyjs.org/docs/use-static-query/
 */

const Image = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "ryan.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 800) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      markdownRemark(fields: { slug: { eq: "/me/" } }) {
        html
        frontmatter {
          title
        }
      }
    }
  `)

  return (
    <Wrapper>
      <Img
        style={{ borderRadius: "50%", width: 200, height: 200 }}
        fluid={data.placeholderImage.childImageSharp.fluid}
      />
      <IntroText>
        <div
          dangerouslySetInnerHTML={{
            __html: data.markdownRemark && data.markdownRemark.html,
          }}
        />
      </IntroText>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  ${media("medium-up")} {
    flex-direction: row;
  }
`

const IntroText = styled.div`
  padding: 1rem;
  color: ${p => p.theme.colors.textPrimary};
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  span,
  p {
    color: ${p => p.theme.colors.textPrimary};
  }
  a {
    color: ${p => p.theme.colors.secondary};
  }
`

export default Image
