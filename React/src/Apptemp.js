import React, { useState, useEffect } from "react"
import { readData, writeData } from "./firebase.js"
import Weather from "./Components/Weather/Weather.js"
import "./App.scss"
const Apptemp = () => {
  useEffect(() => {
    readData(setDb, "FirebaseIOT/")
    writeData(true, "Nodes/Node2")
  }, [])
  const [Db, setDb] = useState(null)
  console.log(Db)
  return (
    <div className="dashboard">
      <header>
        <div className="f fe">
          <div className="icon icon-w"></div>
          <div className="heading">
            <h5 className="date">1 Feb 2019</h5>
            <h2 className="title">Cloudy</h2>
          </div>
        </div>
        <Weather />
      </header>
      <section>
        <div className="category">
          <ul>
            <li>
              <a href="#!" className="active">
                Living Room
              </a>
            </li>
            <li>
              <a href="#!">Kitchen</a>
            </li>
            <li>
              <a href="#!">Dinning</a>
            </li>
            <li>
              <a href="#!">Weather</a>
            </li>
          </ul>
        </div>

        <div className="appliances">
          <div className="appliance">
            <input type="checkbox" name="a" id="a" />
            <label htmlFor="a">
              <i className="l"></i>
              <strong>Lamp</strong>
              <span data-o="opened" data-c="closed"></span>
              <small></small>
            </label>
          </div>

          <div className="appliance">
            <input type="checkbox" name="a" id="b" />
            <label htmlFor="b">
              <i className="r"></i>
              <strong>Router</strong>
              <span data-o="opened" data-c="closed"></span>
              <small></small>
            </label>
          </div>

          <div className="appliance">
            <input type="checkbox" name="a" id="c" />
            <label htmlFor="c">
              <i className="a"></i>
              <strong>Air</strong>
              <span data-o="opened" data-c="closed"></span>
              <small></small>
            </label>
          </div>

          <div className="appliance">
            <input type="checkbox" name="a" id="d" />
            <label htmlFor="d">
              <i className="f"></i>
              <strong>Fridge</strong>
              <span data-o="opened" data-c="closed"></span>
              <small></small>
            </label>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Apptemp
