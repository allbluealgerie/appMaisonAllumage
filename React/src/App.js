import React from "react"
import styled from "styled-components"
import Header from "./Job/Compo/Header.js"
const App = () => {
  return (
    <AppContainer>
      <Ui>
        <Header />
      </Ui>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100vh;
  background-color: cornflowerblue;
`
const Ui = styled.div`
  width: 100%;
  height: 100vh;
  background-color: var(--ColGrey);
  max-width: 600px;
  padding: 3rem;
`
