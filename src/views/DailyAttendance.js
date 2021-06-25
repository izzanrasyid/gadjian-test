import React, { useEffect } from 'react'
import '../App.css'
import { useDispatch } from 'react-redux'
import { setPageName } from '../store/action'
import NoPage from '../components/NoPage'

function DailyAttendance (props) {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setPageName(props.pageName))
    console.log('Did Kai Havertz')
  }, [dispatch, props.pageName])

  return (
    <>
      <NoPage />
    </>
  )
}

export default DailyAttendance