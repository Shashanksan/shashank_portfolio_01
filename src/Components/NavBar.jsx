import React from 'react'
import img2 from '/03.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars,faTimes } from '@fortawesome/free-solid-svg-icons';



import { Link } from 'react-router-dom'
import { useState } from 'react';
function NavBar() {
  const [menubar,setmenubar]=useState(false);
  return (
    <div className='navbar'>
      <div className="logo_container">
         <img src={img2}alt="" width={50} height={50}/>
         <h2 className='logo_name'>Shashank s</h2>
      </div>
      <div className={`navbar_sideButtons ${menubar ? "open " : ""}` } >
      <Link to='/' className= { `navbar_sideButtons_01  ${menubar ? "open " : ""}` }  > <div className="home">home</div></Link>
      <Link to ='/AboutMe'  className={`navbar_sideButtons_01  ${menubar ? "open " : ""}`}>   <div className="about">about</div></Link>
      <Link  to ='/Projects'  className={`navbar_sideButtons_01  ${menubar ? "open " : ""}`}>      <div className="projects">projects</div></Link>
      <Link  to ='/Contact'  className={`navbar_sideButtons_01 ${menubar ? "open " : ""}`}>      <div className="contact">contact</div></Link>
      
    </div>
        <div className='menubar' > <FontAwesomeIcon className='menubar' icon={faBars}  onClick={()=>setmenubar(!menubar)}/></div>
      </div>
     
  )
}

export default NavBar
