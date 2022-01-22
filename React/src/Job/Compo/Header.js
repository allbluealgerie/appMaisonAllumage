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

const HeaderCont = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`
export const Logo = styled.img`
  margin: 3rem;
  height: 20rem;
`
