import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Header = ({ siteTitle }) => (
  <Wrapper>
    <InnerWrapper>
      <h3 style={{ margin: 0 }}>
        <Link to="/">Hey, I'm Ryan</Link>
      </h3>
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled.header`
  margin-bottom: 1.45rem;
`

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 1.45rem 1.0875rem;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
