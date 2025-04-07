import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import { Routes, Route } from 'react-router'

import FrontPage from './FrontPage.jsx'
import Navigation from './Navigation.jsx'
import Projects from './Projects.jsx'
import About from './About.jsx'
import Experience from './Experience.jsx'
import Skills from './Skills.jsx'

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
        </Routes>
    </>
  )
}

export default App
