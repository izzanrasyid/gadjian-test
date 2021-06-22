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
      {
        globalWidth < 768 && (
          <div className="M-content">
            <div className="M-content-header">
              <div className="Personnel-list-title">
                <p className="PL-title">PERSONNEL LIST</p>
                <p className="PL-info">List of all personnels</p>
              </div>
              <div className="M-personnel-list-button">
                <div>
                  <button>Tes</button>
                </div>
                <div>
                  <button>Tes</button>
                </div>
              </div>
            </div>
            <div className="M-content-body">
              <h2>Tes2</h2>
            </div>
          </div>
        )
      }
      {
        globalWidth >= 768 && (
          <div className="Content">
            <div className="Content-header">
              <div className="Personnel-list-title">
                <p className="PL-title">PERSONNEL LIST</p>
                <p className="PL-info">List of all personnels</p>
              </div>
              <div className="Personnel-list-button">
                <div>
                  <button>Tes</button>
                </div>
                <div>
                  <button>Tes</button>
                </div>
              </div>
            </div>
            <div className="Content-body">
              <h1>Tes</h1>
              <h2>Tes2</h2>
            </div>
          </div>
        )
      }
    </>
  )
}

export default List