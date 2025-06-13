import React from 'react'
import { Link } from 'react-router-dom'

function CaseStudies({setmenubar,menubar}) {
  return (
    <div className='casestudies_container'  onClick={()=>setmenubar(false)}>
      <div className="casestudies_mainpage">
        <h1 className='casestudies_mainpage_heading'>Countries</h1>
        <p className='casestudies_mainpage_lines'>The Countries App is a web application that displays the flags and basic information of all countries. Users can search for countries by name or filter them by continent. Clicking on a country reveals detailed information, making it an easy-to-use tool for exploring global data.</p>
        <h2 className='casestudies_mainpage_button'><a href="https://shashanksan.github.io/Countries_App_01/" target='blank'>project link</a></h2>

      </div>
      <div className="casestudies_middlepage">

        <img src="laptopjpg.jpg" alt="" />
        <div className="casestudies_middlepage_projeactOverview">
          <h2 className='casestudies_middlepage_projeactOverview_heading'>project overview</h2>
          <p className='casestudies_middlepage_projeactOverview_lines'>The Countries App is a simple yet informative web application designed to help users explore details about different countries worldwide. It features an interactive interface where users can:
          <li>View all country flags along with essential details.</li>
          <li>Search for countries by name for quick access.</li>
          <li>Filter countries by continent for better categorization.</li>
          <li>Click on a country to see detailed information, including population, capital, and more.</li>
   

Built using React, this project focuses on efficient data handling and user-friendly navigation, making it a valuable tool for learning about global geography.  </p>
            <h2 className='casestudies_middlepage_toolsused_heading'>
              tools used
            </h2>
            <div className="toolsused_container">
             <h3>react.js</h3>
             <h3>rest.api</h3>
             <h3>css</h3>
            </div>
            <div className="casestudies_middlepage_seelive">
              <h1 className='casestudies_middlepage_seelive_heading'>see live</h1>
              <div className="casestudies_middlepage_seelive_button">
              <a href="https://shashanksan.github.io/Countries_App_01/" target='blank'><h2 className='project link' > project link</h2></a>
            <Link  to ='/' className='goback'><h2 className='go back' > go back</h2></Link>  
              </div>
            
            </div>

        </div>
      </div>
      
    </div>
  )
}

export default CaseStudies