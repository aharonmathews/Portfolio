import { useState } from 'react'
import './index.css'
import Navbar from './components/navbar'
import About from './components/about'
import Projects from './components/projects'
import Contact from './components/contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='relative'>
      <div id="section1">
        <Navbar />
      </div>
      <About />
      <div id="section2">
        <Projects />  
      </div>
      <div id="section3">
        <Contact />
      </div>
    </div>
  )
}

export default App
