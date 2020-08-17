import React from "react"
import styled from "@emotion/styled"
import Layout from "@components/layout"
import Me from "@components/me"
import SEO from "@components/seo"

const IndexPage = ({ location }) => (
  <Layout location={location}>
    <SEO title="Home" />
    <Hero>
      <Me />
    </Hero>
  </Layout>
)

const Hero = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

export default IndexPage
