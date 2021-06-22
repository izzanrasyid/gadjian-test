import React, { useEffect, useState} from 'react'
import '../App.css'
import '../MobileVers.css'

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
                <button className="M-find-btn">find Personnels</button>
                <button className="M-add-btn">ADD PERSONNEL</button>
              </div>
            )
          }
          {
            globalWidth >= 962 && (
              <div className="Personnel-list-button">
                <div>
                  <button className="Find-btn">find Personnels</button>
                </div>
                <div>
                  <button className="Add-btn">ADD PERSONNEL</button>
                </div>
              </div>
            )
          }
        </div>
        <div className="Content-body">
          
        </div>
      </div>
    </>
  )
}

export default List