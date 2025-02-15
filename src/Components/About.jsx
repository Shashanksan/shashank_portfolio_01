import React from 'react'
import { Link } from 'react-router-dom'

function About({setmenubar,menubar}) {
    return (
        <div className='About_container'  onClick={()=>setmenubar(false)}> 
            <div className="About_container_01">
                <h1 className='About_heading '>About me</h1>
                <h1 className='About_heading_smallline '> </h1>
                <p className='About_heading_lines' >Passionate Developer | Problem Solver | Tech Enthusiast</p>
            </div>
            <div className="About_container_02">

                <div className="About_container_02_right">
                    <h1 className='About_container_02_right_main'>Get to know me!</h1>
                    <p className='About_container_02_right_lines'>"I'm a Frontend-Focused Full-Stack Web Developer, building and managing the front-end of websites and web applications to ensure a seamless user experience and contribute to the success of the overall product. Check out some of my work in the Projects section!</p>
                  <nav   ><Link to ="/Contact"  className='link' > <h1 className='About_container_02_right_contactButton'>contact</h1></Link>  </nav>
                </div>
                <div className="About_container_02_left">
                    
                     <h1 className='About_container_02_left_main' >Myskills</h1>
                     <div className="myskills_button_container">
                     <h3 className="myskills_buttons">c</h3>
                     <h3 className="myskills_buttons">c#</h3>
                     <h3 className="myskills_buttons">python</h3>
                     <h3 className="myskills_buttons">react</h3>
                     <h3 className="myskills_buttons">html</h3>
                     <h3 className="myskills_buttons">css</h3>
                     <h3 className="myskills_buttons">javascript</h3>
                     </div>
                     
                </div>
            </div>

        </div>
    )
}

export default About