import React from 'react'
import img2 from '/03.jpeg'

import { Link } from 'react-router-dom'
function NavBar() {
  return (
    <div className='navbar'>
      <div className="logo_container">
         <img src={img2}alt="" width={50} height={50}/>
         <span className='logo_name'>Shashank s</span>
      </div>
      <div className="navbar_sideButtons">
      <Link to='/' className="navbar_sideButtons"> <div className="home">home</div></Link>
      <Link to ='/AboutMe'  className="navbar_sideButtons">   <div className="about">about</div></Link>
      <Link  to ='/Projects'  className="navbar_sideButtons">      <div className="projects">projects</div></Link>
      <Link  to ='/Contact'  className="navbar_sideButtons">      <div className="contact">contact</div></Link>
      
    </div>
      </div>
     
  )
}

export default NavBar
