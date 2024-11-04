import React from 'react'
import Navigation from './Navigation'
import { Link } from 'react-router-dom'

function LogOut() {
  return (
    <div className='App'>
      <Navigation/>
      <div className='logoutDiv'>
        <h2>Sure! You want to Logout</h2>

        <div className='btnDiv'>
          <Link className='yesBtn' to="/">Yes</Link>
          <Link className='noBtn' to="/home">No</Link>
        </div>
      </div>
    </div>
  )
}

export default LogOut
