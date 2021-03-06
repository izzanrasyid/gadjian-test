import React, { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import '../App.css'
import '../MobileVers.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faSearch, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'
import EmployeeCard from '../components/EmployeeCard'
import { fetchEmployees, setEmployees, setPageName } from '../store/action'

function List (props) {
  const [pageNumber, setPageNumber] = useState(0)
  const employees = useSelector(state => state.employeesReducer.employees)
  const dispatch = useDispatch()

  function employeePerPage (page) {
    return employees.map((el, ind) => ({ ...el, id: ind + 1 })).slice((page * 4), ((page + 1) * 4 ))
  }

  useEffect(() => {
    dispatch(fetchEmployees())
      .then(response => response.json())
      .then(employees => {
        dispatch(setEmployees(employees.results))
      })
      .catch(err => {
        console.log(err)
      })
  }, [dispatch])

  useEffect(() => {
    dispatch(setPageName(props.pageName))
  }, [dispatch, props.pageName])

  return (
    <>
      <div className="Content">
        <div className="Content-header">
          <div className="Personnel-list-title">
            <p className="PL-title">PERSONNEL LIST</p>
            <p className="PL-info">List of all personnels</p>
          </div>
          <div className="Personnel-list-button">
            <button className="Find-btn">
              <FontAwesomeIcon icon={faSearch} color="#23c7c6" /><span> find Personnels</span>
            </button>
            <button className="Add-btn">
              ADD PERSONNEL<span> <FontAwesomeIcon icon={faPlus}/> </span>
            </button>
          </div>
        </div>
        <div className="Content-body">
          {
            employeePerPage(pageNumber).map((employee, ind) => {
              return (
                <EmployeeCard 
                  id={employee.id}
                  pgNumber={pageNumber}
                  picture={employee.picture.large}
                  firstName={employee.name.first}
                  lastName={employee.name.last}
                  phone={employee.phone}
                  email={employee.email}
                  birthDate={employee.dob.date}
                  key={employee.id}
                />
              )
            })
          }
        </div>
        <div className="Content-footer">
          <div className="Content-footer-left">
            {
              pageNumber > 0 ? 
                <div className="Action-pg" onClick={() => setPageNumber(prev => prev - 1)}>
                  <FontAwesomeIcon className="Action-icon" icon={faChevronLeft} style={{marginRight: 10}}/>
                  <span> Previous</span>
                </div>
              :
                <div className="Disabled-action-pg">
                  <FontAwesomeIcon className="Disabled-action-icon" icon={faChevronLeft} style={{marginRight: 10}}/>
                  <span> Previous</span>
                </div>
            }
          </div>
          <div  className="Content-footer-right">
            {
              pageNumber < (employees.length / 4) - 1 ?
                <div className="Action-pg" onClick={() => setPageNumber(prev => prev + 1)}>
                  <span>Next </span>
                  <FontAwesomeIcon className="Action-icon" icon={faChevronRight} style={{marginLeft: 10}}/>
                </div>
              :
                <div className="Disabled-action-pg">
                  <span>Next </span>
                  <FontAwesomeIcon className="Disabled-action-icon" icon={faChevronRight} style={{marginLeft: 10}}/>
                </div>
            }
          </div>
        </div>
      </div>
    </>
  )
}

export default List