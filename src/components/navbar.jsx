import React from 'react';
import { Link } from 'react-scroll';

function Nav() {
  return (
    <div>
      <nav className='backdrop-filter backdrop-blur-lg h-15 w-full top-0 bg-transparent z-50'>
        <ul className='flex flex-row justify-between items-center text-white w-full px-24 py-2 bg-gradient-to-r from-cyan-300 to-blue-500'>
          <div className="flex flex-row space-x-4 ">
            <li>
              <Link className='text-center text-2xl font-semibold  hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              AHARON MATHEWS
              </Link>
            </li>
          </div>
          <div className='flex flex-row space-x-11'>
            <li>
              <Link className='text-center text-2xl font-semibold  hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
              About
              </Link>
            </li>
            <li>
              <Link className='text-center text-2xl font-semibold  hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              Projects
              </Link>
            </li>
            <li>
              <Link className='text-center text-2xl font-semibold  hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
              Skills
              </Link>
            </li>
            
            <li>
              <Link className='text-center text-2xl font-semibold  hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
              Contact
              </Link>
            </li>
          </div>
          
        </ul>
        <div className='h-[2px] bg-[#FFE6E6] w-full'></div>
      </nav>
    </div>
  );
}

export default Nav;
