import React from "react"
import styled from "styled-components"
import logo from "../Assets/logo.svg"
const Header = () => {
  return (
    <HeaderCont>
      <Logo src={logo} alt="logo" />
    </HeaderCont>
  )
}

export default Header

const HeaderCont = styled.div``
export const Logo = styled.img`
  width: 60%;
`
