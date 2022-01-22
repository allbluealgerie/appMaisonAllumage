import React from "react"
import styled from "styled-components"
import Circle from "../Assets/blueCircle.svg"
const Bluecircle = ({ blur, w, t, l, pos, z }) => {
  return (
    <BlueCircleCont position={pos} blur={blur} width={w} top={t} left={l} z={z}>
      <img src={Circle} alt="blue" />
    </BlueCircleCont>
  )
}

export default Bluecircle

const BlueCircleCont = styled.div`
  filter: blur(${(props) => (props.blur ? props.blur + "rem" : null)});
  position: ${(props) => (props.position ? props.position : null)};
  width: ${(props) => (props.width ? props.width + "rem" : null)};
  left: ${(props) => (props.left ? props.left + "%" : null)};
  top: ${(props) => (props.top ? props.top + "rem" : null)};
  img {
  }
`
