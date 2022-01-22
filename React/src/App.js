import React from "react"
import styled from "styled-components"
import Accueilbody from "./Job/Compo/AccueilBody.js"
import Header from "./Job/Compo/Header.js"
const App = () => {
  return (
    <AppContainer>
      <Ui>
        <Header />
        <Accueilbody />
      </Ui>
    </AppContainer>
  )
}

export default App

const AppContainer = styled.div`
  display: flex;
  justify-content: center;
  height: 100vh;
  width: 100%;
`
const Ui = styled.div`
  height: 100%;
  width: 100%;
  max-width: 600px;

  overflow: hidden;
  background: linear-gradient(0deg, var(--ColTwo) 0%, var(--ColOne) 60%);
`
