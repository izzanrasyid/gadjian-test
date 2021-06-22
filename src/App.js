import React ,{ useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Home from './views/Home'
import List from './views/List'
import Hamburger from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHome, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'


function App() {
  const [globalWidth, setGlobalWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", (parameter, tes) => {
      const windowWidth = window.innerWidth;
      setGlobalWidth(windowWidth)
    })
  }, [])

  useEffect(() => {
    console.log(globalWidth)
  }, [globalWidth])

  return (
    <div className="App">
      <header className="App-header">
        {
          globalWidth <= 768 && (
            <div className="Burger-menu">
              <Hamburger />
            </div>
          )
        }
        <div className="Header-left">
          <img className="App-logo" src="https://images.glints.com/unsafe/glints-dashboard.s3.amazonaws.com/company-logo/e196fd5534bec8a1696b426156b889d3.png"></img>
        </div>
        <div className="Header-center"></div>
        <div className="Header-right">
          <div className="Text-user">
            <p className="Black-font">Hallo,<span className="Gadjian-color"> Gadjian User</span></p>
          </div>
          <div>
            <img className="Username-ava" src="https://img.a.transfermarkt.technology/portrait/big/33923-1618682220.jpg?lm=1"></img>
          </div>
        </div>
      </header>
      <Router>
        <div className="App-menu">
          { 
            globalWidth >= 768 && (
              <div className="Navbar">
                <div className="Nav-link">
                  <Link className="Link-title" to="/">
                    <FontAwesomeIcon icon={faHome}/><span> Beranda</span>
                  </Link>
                </div>
                <div className="Nav-link">
                <Link className="Link-title" to="/">
                  <FontAwesomeIcon icon={faUsers}/><span> Personnel List</span>
                </Link>
                </div>
                <div className="Nav-link">
                <Link className="Link-title" to="/">
                  <FontAwesomeIcon icon={faCalendarAlt}/><span> Daily Attendance</span>
                </Link>
                </div>
              </div>
            ) 
          }
          <div className="Main">
            <Switch>
              <Route path='/lists'>
                <Home />
              </Route>
              <Route path="/">
                <List />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
