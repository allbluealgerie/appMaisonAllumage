import React from "react"
import { readData, writeData } from "./firebase.js"

const App = () => {
  readData("Moh").then((val) => console.log(val))

  return <div>Bonjour</div>
}

export default App
