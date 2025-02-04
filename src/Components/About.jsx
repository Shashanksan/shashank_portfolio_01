import React from 'react'
import { Link } from 'react-router-dom'

function About() {
    return (
        <div className='About_container'>
            <div className="About_container_01">
                <h1 className='About_heading '>About me</h1>
                <h1 className='About_heading_smallline '> </h1>
                <p className='About_heading_lines' >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, non.</p>
            </div>
            <div className="About_container_02">

                <div className="About_container_02_right">
                    <h1 className='About_container_02_right_main'>Get to know me!</h1>
                    <p className='About_container_02_right_lines'>I'm a Frontend Focused Web Developer building and managing the Front-end of Websites and Web Applications that lead to the success of the overall product. Check out some of my work in the Projects section.</p>
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