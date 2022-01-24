import React from "react"
import styled from "styled-components"

const Homebutton = () => {
  return <HomeButtonCont>Bonjour</HomeButtonCont>
}

export default Homebutton

const HomeButtonCont = styled.div`
  width: 50%;
  height: 3rem;
  border-radius: 50px;
  background: #d1d8ec;
  display: flex;
  justify-content: center;
  align-items: center;
`
