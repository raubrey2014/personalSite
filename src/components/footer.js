import React from "react"
import styled from "@emotion/styled"
// import { P } from "./common"

const Footer = () => (
  <Wrapper>
    <StyledFooter>{/* <P>© {new Date().getFullYear()}</P> */}</StyledFooter>
  </Wrapper>
)

const Wrapper = styled.div`
  position: fixed;
  bottom: 0px;
  text-align: right;
  width: 80%;
`
const StyledFooter = styled.div`
  margin: 1rem auto;
`

export default Footer
