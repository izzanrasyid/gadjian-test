import React ,{ useEffect, useState } from 'react'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom"
import NoPage from './views/NoPage'
import List from './views/List'
import Menubar from './components/Menubar'
import Hamburger from 'hamburger-react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHome, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function App() {
  const [globalWidth, setGlobalWidth] = useState(window.innerWidth)
  const [menubarActive, setMenubarActive] = useState(false)
  const history = useHistory()

  function burgerClick () {
    setMenubarActive(!menubarActive)
  }

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
          globalWidth <= 1000 && (
            <div className="Burger-menu">
              <Hamburger onToggle={burgerClick} />
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
      {
        menubarActive === true && globalWidth <= 1000 ? <Menubar /> : null
      }
        <div className="App-menu">
          { 
            globalWidth > 1000 && (
              <div className="Navbar">
                <div className="Nav-link">
                  <Link className="Link-title" to="/">
                    <FontAwesomeIcon icon={faHome}/><span> Beranda</span>
                  </Link>
                </div>
                <div className="Nav-link">
                <Link className="Link-title" to="/lists">
                  <FontAwesomeIcon icon={faUsers}/><span> Personnel List</span>
                </Link>
                </div>
                <div className="Nav-link">
                <Link className="Link-title" to="/daily-attendance">
                  <FontAwesomeIcon icon={faCalendarAlt}/><span> Daily Attendance</span>
                </Link>
                </div>
              </div>
            ) 
          }
          <div className="Main">
            <Switch>
              <Route path='/lists'>
                <List />
              </Route>
              <Route path='/daily-attendance'>
                <NoPage />
              </Route>
              <Route path="/">
                <NoPage />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
