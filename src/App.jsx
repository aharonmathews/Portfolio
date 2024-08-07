import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './index.css';
import Navbar from './components/navbar';
import About from './components/about';
import Projects from './components/projects';
import Contact from './components/contact';
import Footer from './components/footer';
import Project1 from './components/projects/Project1';
import Project2 from './components/projects/Project2';
import Project3 from './components/projects/Project3';
import Project4 from './components/projects/Project4';

function App() {
  return (
    <div className='relative'>
      <Navbar />
      <About />
      <Routes>
        <Route path="/" element={<Projects />} />
        <Route path="/project1" element={<Project1 />} />
        <Route path="/project2" element={<Project2 />} />
        <Route path="/project3" element={<Project3 />} />
        <Route path="/project4" element={<Project4 />} />
      </Routes>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
