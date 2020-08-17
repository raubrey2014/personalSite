import React from "react"
import { Link } from "gatsby"
import styled from "@emotion/styled"

export default ({ children, ...props }) => (
  <Wrapper>
    <SiteLink {...props} activeClassName="active">
      {children}
      <Underline className="underline" />
    </SiteLink>
  </Wrapper>
)

const Wrapper = styled.div`
  display: inline-block;

  &:hover {
    .underline {
      width: 100%;
    }
  }

  .active {
    .underline {
      width: 100%;
    }
  }
`

const SiteLink = styled(Link)`
  color: ${p => p.theme.colors.textPrimary};
  text-decoration: none;
  background-image: none;
  text-shadow: none;
`

const Underline = styled.div`
  height: 2px;
  width: 0%;
  background: ${p => p.theme.colors.secondary};
  transition: width 0.2s;
`
