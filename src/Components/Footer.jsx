import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin ,faGithub,faTwitter ,faInstagram} from '@fortawesome/free-brands-svg-icons';


function Footer({setmenubar,menubar}) {
  return (
    <div className='footer_container'  onClick={()=>setmenubar(false)}>
         <div className="footer_content">
          <div className="name_tagline_container">
            <h1 className='name_tagline_container_name'>shashank s</h1>
            <p className='name_tagline_container_line'>A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product</p>
      

          </div>
          <div className="social_container">
            <h2 className='social_container_heading' >social</h2>
            <div className='social_container_links'>
      <div >  <a href="https://www.instagram.com/?hl=en" target='blank'> <FontAwesomeIcon icon={faLinkedin} /></a></div>
        <div >  <a href="https://github.com/" target='blank'> <FontAwesomeIcon icon={faGithub} /></a></div>
        <div >  <a href="https://x.com/home" target='blank'> <FontAwesomeIcon icon={faTwitter} /></a></div>
        <div >  <a href="https://www.instagram.com/?hl=en" target='blank'> <FontAwesomeIcon icon={faInstagram} /></a></div>





  
      
            </div>
           
          </div>

         </div>
         <div className="footer_copyright">
            <p>© Copyright 2025 . Shashank s
            </p>
         </div>
      
    </div>
  )
}

export default Footer