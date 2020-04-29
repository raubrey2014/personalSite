/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import styled from "@emotion/styled"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ location, children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  const path = (location && location.pathname) || ""
  const isHome = path === "/"
  return (
    <>
      {!isHome && <Header siteTitle={data.site.siteMetadata.title} />}
      <Wrapper>
        {!isHome && <main>{children}</main>}
        {isHome && <CenterStage>{children}</CenterStage>}
        <Footer />
      </Wrapper>
    </>
  )
}
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-height: 100vh;
  padding: 0 1rem 1rem;
`

const CenterStage = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
