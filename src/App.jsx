import React from 'react'
import NavBar from './Components/NavBar'
import './Components/Portfolio.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from'./Components/Contact'
import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import CaseStudies from './Components/CaseStudies'
import AboutMe from './Components/AboutMe'
import { useState } from 'react'
function App() {
  const [menubar,setmenubar]=useState(false);


  return (
    <div>

      <Router >
      <NavBar setmenubar={setmenubar} menubar={menubar} />

        <Routes>

        <Route path='/' element={<Home  setmenubar={setmenubar} menubar={menubar} />}/>

        <Route path='/About' element={<About setmenubar={setmenubar} menubar={menubar} />}/>
        <Route path='/Projects' element={<Projects setmenubar={setmenubar} menubar={menubar} />}/>
        
        <Route path='/Contact' element={<Contact  setmenubar={setmenubar} menubar={menubar} />}/>
        <Route path='/Casestudies' element={<CaseStudies setmenubar={setmenubar} menubar={menubar} />}/>
        <Route path='/AboutMe' element={<AboutMe  setmenubar={setmenubar} menubar={menubar}/>}/>

        
          
     
        

        </Routes>
        <Footer />  

      </Router>



    </div>



  )
}

export default App
