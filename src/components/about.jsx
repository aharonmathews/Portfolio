import { useState } from 'react';
import aharonImage from '../assets/images/aharonImage.png';
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { SiLeetcode } from "react-icons/si";
import '../index.css'; // Import the custom CSS file

function About() {
  return (
    <div className='flex flex-col justify-center items-center'>
      <div className='flex flex-row mt-20 w-6/12 items-center m-auto space-x-7'>
        <div className=''>
          <img src={aharonImage} alt="Aharon" className='rounded-full max-h-52 max-w-52 border-4 border-blue-300'></img>
        </div>
        <div className=''>
          <h1 className='text-3xl text-gray-600'>Aharon Mathews</h1>
          <p className='text-gray-600 mt-2'>My name is Aharon and I am a software engineer. I am currently looking for a job as a software engineer. I am a quick learner and I am always looking forward to improve my skills</p>
          <div className='flex flex-row mt-4'>
        <a href="../src/assets/pdfs/AharonResume.pdf" target="_blank" rel="noopener noreferrer" className="bg-gradient-to-r from-blue-500 to-cyan-500 text-xl text-white rounded-3xl px-4 py-1  duration-[0.3s] ease-[ease-in-out] hover:scale-105 transition-all">
            View Resume/CV
        </a>
      </div>
        </div>
      </div>
      <div className='flex flex-row space-x-9 mt-5'>
        <a className='flex items-center justify-center w-10 h-10 border-blue-500 hover:border-blue-700 rounded-full border-4 border-solid text-xl text-blue-500 hover:text-blue-700 icon-hover' href='https://www.linkedin.com/in/aharon-mathews-90a2b9256/'>
          <FaLinkedinIn />
        </a>
        <a className='flex items-center justify-center w-10 h-10 border-blue-500 hover:border-blue-700 rounded-full border-4 border-solid text-xl text-blue-500 hover:text-blue-700 icon-hover' href='https://github.com/aharonmathews'>
          <FaGithub />
        </a>
        <a className='flex items-center justify-center w-10 h-10 border-blue-500 hover:border-blue-700 rounded-full border-4 border-solid text-xl text-blue-500 hover:text-blue-700 icon-hover' href='https://twitter.com/aharonmathews'>
          <FaXTwitter />
        </a>
        <a className='flex items-center justify-center w-10 h-10 border-blue-500 hover:border-blue-700 rounded-full border-4 border-solid text-xl text-blue-500 hover:text-blue-700 icon-hover' href='https://leetcode.com/aharonmathews'>
          <SiLeetcode />
        </a>
      </div>
    </div>
  )
}

export default About;
