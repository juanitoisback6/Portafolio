import { useState } from 'react'
import ParticulasCanvas from './Components/Canvas'
 
import './App.css'
import Header from './Components/Header'
 
import Profile from './Components/Profile'
import Skills from './Components/Skills'
import Projects from './Components/Projects'
import AboutMe from './Components/AboutMe'
import Contact from './Components/Contact'
import Footer from './Components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <Profile/>
    <Skills/>
    <Projects/>
    <AboutMe/>
    <Contact/>
    <Footer/>
       <ParticulasCanvas/>
    </>
  )
}

export default App
