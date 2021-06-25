import React, { useEffect, useState} from 'react'
import '../App.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'
import { masa } from 'masa'


function EmployeeCard (props) {
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
      <p className="Id-person-title">Personnel ID: <span className="Id-person-number">{ props.id }</span></p>
        <div className="Three-circle">
          <FontAwesomeIcon className="Circle" icon={faCircle} size='xs'/>
          <FontAwesomeIcon className="Circle" icon={faCircle} size='xs'/>
          <FontAwesomeIcon className="Circle" icon={faCircle} size='xs'/>
        </div>
      </div>
      <div className="Card-body">
        <div className="Employee-img">
          <img className="Employee-ava" src={ props.picture } alt="Employee"></img>
        </div>
        <div className="Employee-info">
          <div className="Employee-name">
            <p className="Employee-info-title">Name</p>
            <p className="Employee-info-containt">{ `${props.firstName} ${props.lastName}` }</p>
          </div>
          <div className="Employee-telp">
            <p className="Employee-info-title">Telephone</p>
            <p className="Employee-info-containt">{ props.phone }</p>
          </div>
          {
            globalWidth >= 768 ?
              <>
                <div className="Employee-dob">
                  <p className="Employee-info-title">Birthday</p>
                  <p className="Employee-info-containt">{ masa(props.birthDate).format('D MMMM') }</p>
                </div>
                <div className="Employee-mail">
                  <p className="Employee-info-title">Email</p>
                  <p className="Employee-info-containt">{ props.email }</p>
                </div>
              </>
            :
              null
          }
        </div>
      </div>
    </div>
  )
}

export default EmployeeCard