import React from 'react'
// import AboutPage from './AboutPage'
import './NavbarOfHome.css'
function NavbarOfHome() {
  return (
    <div className='NavbarOfHome'>
        <img src="OSlogo.png" alt="LOGO" />
        <ul className='navbar'>
            <li><a href="/">HOME</a></li>
            <li><a href="/">ABOUT US</a></li>
            <li><a href="/">PROJECTS</a></li>
            
        </ul>
    </div>
  )
}

export default NavbarOfHome