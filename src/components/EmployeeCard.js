import React, { useEffect, useState} from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'


function EmployeeCard () {
  const [globalWidth, setGlobalWidth] = useState(window.innerWidth)

  useEffect(() => {
    window.addEventListener("resize", (parameter, tes) => {
      const windowWidth = window.innerWidth;
      setGlobalWidth(windowWidth)
    })
  }, [])

  useEffect(() => {
    console.log('Did Mounted')
  }, [globalWidth])

  return (
    <div className="Employee-card">
      <div className="Card-header">
        <p className="Id-person-title">Personnel ID: <span className="Id-person-number">12345</span></p>
        <div className="Three-circle">
          <FontAwesomeIcon className="Circle" icon={faCircle} size='xs'/>
          <FontAwesomeIcon className="Circle" icon={faCircle} size='xs'/>
          <FontAwesomeIcon className="Circle" icon={faCircle} size='xs'/>
        </div>
      </div>
      {
        globalWidth >= 768 && (
          <div className="Card-body">
            <div className="Employee-img">
              <img className="Employee-ava" src="https://img.a.transfermarkt.technology/portrait/big/33923-1618682220.jpg?lm=1"></img>
            </div>
            <div className="Employee-info">
            <div className="Employee-name">
                <p className="Employee-info-title">Name</p>
                <p className="Employee-info-containt">First Name Last Name</p>
              </div>
              <div className="Employee-telp">
                <p className="Employee-info-title">Telephone</p>
                <p className="Employee-info-containt">Phone Number</p>
              </div>
            </div>
          </div>
        )
      }
      {
        globalWidth < 768 && (
          <div className="Card-body-res">
            <div className="Employee-img-res">
              <img className="Employee-ava" src="https://img.a.transfermarkt.technology/portrait/big/33923-1618682220.jpg?lm=1"></img>
            </div>
            <div className="Employee-info-res">
              <div className="Employee-name">
                <p className="Employee-info-title">Name</p>
                <p className="Employee-info-containt">First Name Last Name</p>
              </div>
              <div className="Employee-telp">
                <p className="Employee-info-title">Telephone</p>
                <p className="Employee-info-containt">Phone Number</p>
              </div>
            </div>
          </div>
        )
      }
    </div>
  )
}

export default EmployeeCard