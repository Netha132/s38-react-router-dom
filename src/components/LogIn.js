import React from 'react'
import { Link } from 'react-router-dom'

function LogIn() {
  return (
    
    <div className='App'>
        <h1>LogIn</h1>
      <form className='loginDiv'>
        <div>
        <label>Username</label>
        <input></input>
        </div>
        <div>
            <label>Password</label>
            <input type='password'></input>
        </div>
        <br></br>
<div>
  
        <Link to="/home" className='loginLink'>Log In</Link>
        

        <p className='desc'>New user? Create an account</p>
        <Link to="/signin" className='signIn'>SignIn</Link>
        </div>
      </form>
    
      
    </div>
  )
}

export default LogIn
