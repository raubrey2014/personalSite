/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { Global, css } from "@emotion/core"
import { ThemeProvider } from "emotion-theming"
import styled from "@emotion/styled"
import Header from "@components/header"
import Footer from "@components/footer"
import theme from "@theme"

const Layout = ({ location, children }) => {
  const path = (location && location.pathname) || ""
  const isHome = path === "/"
  return (
    <ThemeProvider theme={theme}>
      <Background>
        <Global
          styles={css`
            body {
              background: ${theme.colors.primary} !important;
            }
          `}
        />
        <Header />
        <Wrapper>
          {!isHome && <main>{children}</main>}
          {isHome && <CenterStage>{children}</CenterStage>}
          <Footer />
        </Wrapper>
      </Background>
    </ThemeProvider>
  )
}

const Background = styled.div`
  background: ${p => p.theme.colors.primary};
  min-height: 100vh;
`

const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  min-height: 80vh;
  padding: 0 1rem 1rem;
`

const CenterStage = styled.div`
  min-height: 80vh;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
