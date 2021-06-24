import React from 'react'
import '../App.css'
import {useHistory} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUsers, faHome, faCalendarAlt } from '@fortawesome/free-solid-svg-icons'

function Menubar () {
  const history = useHistory()

  function goToHome () {
    history.push("/")
  }

  function goToLists () {
    history.push("/lists")
  }

  function goToDa () {
    history.push("/daily-attendance")
  }
  return (
    <>
      <div className="Menubar">
        <button onClick={goToHome} className="Menubar-btn">
          <FontAwesomeIcon icon={faHome}/><span> Beranda</span>
        </button>
        <button onClick={goToLists}  className="Menubar-btn">
          <FontAwesomeIcon icon={faUsers}/><span> Personnel List</span>
        </button>
        <button onClick={goToDa}  className="Menubar-btn">
          <FontAwesomeIcon icon={faCalendarAlt}/><span> Daily Attendance</span>
        </button>
      </div>
    </>
  )
}

export default Menubar