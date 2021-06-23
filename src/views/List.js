import React, { useEffect, useState} from 'react'
import '../App.css'
import '../MobileVers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle, faPlus, faSearch } from '@fortawesome/free-solid-svg-icons'
import EmployeeCard from '../components/EmployeeCard'

function List () {
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
    <>
      <div className="Content">
        <div className="Content-header">
          <div className="Personnel-list-title">
            <p className="PL-title">PERSONNEL LIST</p>
            <p className="PL-info">List of all personnels</p>
          </div>
          {
            globalWidth < 962 && (
              <div className="Responsive-btns">
                <button className="M-find-btn">
                  <FontAwesomeIcon icon={faSearch} color="#23c7c6" /><span> find Personnels</span>
                </button>
                <button className="M-add-btn">
                  ADD PERSONNEL<span> <FontAwesomeIcon icon={faPlus}/> </span>
                </button>
              </div>
            )
          }
          {
            globalWidth >= 962 && (
              <div className="Personnel-list-button">
                <div>
                  <button className="Find-btn">
                    <FontAwesomeIcon icon={faSearch} color="#23c7c6" /><span> find Personnels</span>
                  </button>
                </div>
                <div>
                  <button className="Add-btn">
                    ADD PERSONNEL<span> <FontAwesomeIcon icon={faPlus}/> </span>
                  </button>
                </div>
              </div>
            )
          }
        </div>
        <div className="Content-body">
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
          <EmployeeCard />
        </div>
      </div>
    </>
  )
}

export default List