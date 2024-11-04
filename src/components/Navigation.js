import React from 'react'
import { Link } from 'react-router-dom'

function Navigation() {
  return (
    <nav className='navBar'>
      <Link className='navLinks' to="/home">Home</Link>
      <Link className='navLinks' to="/services">Services</Link>
      <Link className='navLinks' to="/about">About</Link>
      <Link className='navLinks' to="/support">Support</Link>
      <Link className='navLinks' to="/profile">Profile</Link>
      <Link className='navLinks' to="/logout">LogOut</Link>

    </nav>
  )
}

export default Navigation
