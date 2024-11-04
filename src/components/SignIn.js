import React from 'react'
import { Link } from 'react-router-dom'

function SignIn() {
  return (
    <div className='App'>
        <h1>SignIn</h1>
      <form className='signinDiv'>
        <div>
            <label>FirstName</label>
            <input></input>
        </div>
        <div>
            <label>LastName</label>
            <input></input>
        </div>
        <div>
        <label>DateofBirth</label>
        <input type='date'></input>
        </div>
        <div>
            <label>Email</label>
            <input type='email'></input>
        </div>
        <div>
            <label>Password</label>
            <input type='password'></input>
        </div>
        <div>
            <label>ProfilePic</label>
            <input type='file'></input>
        </div>
        <div className='checkBox'>
          <input type='checkbox'></input>
          <p>Acceptance of Terms: Users agree to the terms by using the service.</p>
        </div>
        <div>
        <Link to="/home" className='signin2'>Sign In</Link>
        </div>
      </form>

    
    </div>
  )
}

export default SignIn
