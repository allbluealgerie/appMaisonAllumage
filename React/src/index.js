import React from "react"
import ReactDOM from "react-dom"
import App from "./App"
import { Global } from "./Job/Style/Global.js"
ReactDOM.render(
  <React.StrictMode>
    <Global />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
)
