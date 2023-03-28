import React from 'react'
// import AboutPage from './AboutPage'
import './NavbarOfHome.css'
function NavbarOfHome() {
  return (
    <div className='NavbarOfHome'>
        <img src="OSlogo.png" alt="LOGO" />
      
        <ul className='navbar'>
            <li><a href="/">HOME</a></li>
            <li><a href="/priority">PPS</a></li>
            <li><a href="/peterson">PETERSON</a></li>
            <li><a href="/fcfs">FCFS</a></li>
            <li><a href="/opr">OPR</a></li>
            
        </ul>
    </div>
  )
}

export default NavbarOfHome