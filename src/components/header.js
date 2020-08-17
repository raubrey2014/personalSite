import Link from "@components/link"
import PropTypes from "prop-types"
import React from "react"
import styled from "@emotion/styled"

const Header = () => (
  <Wrapper>
    <InnerWrapper>
      <h3 style={{ margin: 0 }}>
        <Link to="/" type="plain">
          Hey, I'm Ryan
        </Link>
      </h3>
      <div>
        <Spacer>
          <Link to="/now">now</Link>
        </Spacer>
        <Spacer>
          <Link to="/reads">reads</Link>
        </Spacer>
      </div>
    </InnerWrapper>
  </Wrapper>
)

const Wrapper = styled.header``

const InnerWrapper = styled.div`
  margin: 0 auto;
  max-width: 42rem;
  padding: 1.45rem 1.0875rem;
  display: flex;
  justify-content: space-between;
`

const Spacer = styled.span`
  margin-left: 8px;
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
