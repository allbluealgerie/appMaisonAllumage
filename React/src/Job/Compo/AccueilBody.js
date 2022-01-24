import React from "react"
import styled from "styled-components"
import Bluecircle from "./BlueCircle.js"
import Circle from "../Assets/blueCircle.svg"
import Homebutton from "./HomeButton.js"
const Accueilbody = () => {
  return (
    <BodyCont>
      <ChoixLieu image={Circle}>
        <Homebutton />
      </ChoixLieu>

      <Bluecircle pos="absolute" w="15" t="0" l="-3" blur="0.3" />
      <Bluecircle pos="absolute" w="5" t="-3" l="90" blur="0.6" />
    </BodyCont>
  )
}

export default Accueilbody

const BodyCont = styled.div`
  background-color: red;
  position: relative;
`
const ChoixLieu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 10rem;
  left: 5rem;
  width: 40rem;
  height: 40rem;
  background-image: url(${(props) => (props.image ? props.image : null)});
  background-position: center;
  background-repeat: no-repeat;
`
