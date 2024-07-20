import React from 'react'
import Navbar from "./Navbar/Navbar"
import Herosection from "./Herosection"
import Skills from "./Skills/Skills"
import Work from "./Work/Work"
import Education from "./Education/Education"
import Contact from "./Contact/Contact"
import Footer from "./Footer/Footer"
const App = () => {
  return (
    <div>
      <Navbar/>
      <Herosection/>
      <Skills/>
      <Work/>
      <Education/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App