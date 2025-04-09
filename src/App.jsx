import { useState } from 'react'
import './App.css'

import { Routes, Route } from 'react-router'

import FrontPage from './FrontPage.jsx'
import Navigation from './Navigation.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'
import Contact from './Contact.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
        <Navigation />
        <Routes>
            <Route exact index path='/' element={<FrontPage/>}></Route>
            <Route exact path='/projects' element={<Projects/>}></Route>
            <Route exact path='/about' element={<About/>}></Route>
            <Route exact path='/experience' element={<Experience/>}></Route>
            <Route exact path='/skills' element={<Skills/>}></Route>
            <Route exact path='/contact' element={<Contact/>}></Route>
        </Routes>
    </>
  )
}

export default App
