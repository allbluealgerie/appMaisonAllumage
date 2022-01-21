import React from "react"
import styled from "styled-components"

const Header = () => {
  return <HeaderCont>Bonjour</HeaderCont>
}

export default Header

const HeaderCont = styled.div`
  width: 100%;
  height: 20%;
  border-radius: 10px;
  background: var(--ColGrey);
  box-shadow: 6px 6px 12px #bebebe, -6px -6px 12px #ffffff;
  padding: 3rem;
`
