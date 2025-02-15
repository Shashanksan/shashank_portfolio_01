import React from 'react'
import { Link } from 'react-router-dom'
import About from './About';
import Projects from './Projects';
import Contact from './Contact';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons';



function Home({setmenubar,menubar}) {
  return (
    
<>
<div className="home_container" onClick={()=>setmenubar(false)}>
        <h1 className='shashankheading'>hey, i'm shashank s</h1>
        <p className='home_page_lines'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
       <nav className='projects_button'><Link to = "/Projects" className='projects_button' ><h2  className='projects_button'>projects</h2></Link></nav> 
        <span className='socialMedia_container'>
  <div >  <a href="https://www.instagram.com/?hl=en" target='blank'> <FontAwesomeIcon icon={faLinkedin} /></a></div>
  <div >  <a href="https://github.com/" target='blank'> <FontAwesomeIcon icon={faGithub} /></a></div>
  <div >  <a href="https://x.com/home" target='blank'> <FontAwesomeIcon icon={faTwitter} /></a></div>
  <div >  <a href="https://www.instagram.com/?hl=en" target='blank'> <FontAwesomeIcon icon={faInstagram} /></a></div>

        </span>
         
        
    </div>
    <About />
        <Projects />
        <Contact />
</>
    
   
    
  )             
}

export default Home