import React from 'react'
import NavBar from './Components/NavBar'
import './Components/Portfolio.css'
import Home from './Components/Home'
import Footer from './Components/Footer'
import About from './Components/About'
import Projects from './Components/Projects'
import Contact from'./Components/Contact'
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import CaseStudies from './Components/CaseStudies'
import AboutMe from './Components/AboutMe'
function App() {


  return (
    <div>

      <Router >
      <NavBar />

        <Routes>

        <Route path='/' element={   <><Home /> <About />  <Projects /> <Contact />  </>}/>

        <Route path='/About' element={  <About />}/>
        <Route path='/Projects' element={      <Projects />}/>
        
        <Route path='/Contact' element={    <Contact />}/>
        <Route path='/Casestudies' element={    <CaseStudies />}/>
        <Route path='/AboutMe' element={    <AboutMe />}/>

        
          
     
        

        </Routes>
        <Footer />  

      </Router>



    </div>



  )
}

export default App
