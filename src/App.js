import logo from './logo.svg'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="Header-left">
          <img className="App-logo" src="https://www.pngfind.com/pngs/m/638-6386919_gadjian-gadjian-logo-hd-png-download.png"></img>
        </div>
        <div className="Header-center"></div>
        <div className="Header-right">
          <div className="Text-user">
            <p className="Black-font">Hallo, </p>
            <p className="BlueSky-font"> Gadjian User</p>
          </div>
          <div>
            <img className="Username-ava" src="https://img.a.transfermarkt.technology/portrait/big/33923-1618682220.jpg?lm=1"></img>
          </div>
        </div>
      </header>
      <Router>
        <div className="App-menu">
          <div className="Navbar">
            <div className="Home-link">
              <Link className="Link-title" to="/">Beranda</Link>
            </div>
            <div className="List-link">
            <Link className="Link-title" to="/">Personnel List</Link>
            </div>
            <div className="Attendance-link">
            <Link className="Link-title" to="/">Daily Attendance</Link>
            </div>
          </div>
          <div className="Main">

          </div>
        </div>
      </Router>
    </div>
  );
}

export default App;
