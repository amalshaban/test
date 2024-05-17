import React from 'react'

import { Link } from 'react-router-dom'

export default function Work() {
  
  return (
    <>
     <nav className="navbar navbar-expand-lg navbar-light bg-light">
  

  <div className="collapse navbar-collapse" id="navbarSupportedContent">
    <ul className="navbar-nav mr-auto">
      <li className="nav-item active">
        <Link to='Home' className='nav-link'>UseState</Link>
      </li>
      <li className="nav-item">
        <Link to='About' className='nav-link'>Props</Link>
      </li>
      <li className="nav-item">
        <Link to='Skills' className='nav-link'>Skills</Link>
      </li>
      <li className="nav-item">
        <Link to='Experience' className='nav-link'>Experience</Link>
      </li>
      <li className="nav-item">
        <Link to='MainContent' className='nav-link'>MainContent</Link>
      </li>
     
    </ul>
   
  </div>
</nav> 
    </>
  )
}
