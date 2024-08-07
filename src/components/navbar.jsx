import React, { useState } from 'react';
import { Link } from 'react-scroll';
import { FaBars, FaTimes } from 'react-icons/fa';
import Logo from '../assets/images/logo2.png';

function Nav() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div>
      <nav className='backdrop-filter backdrop-blur-lg h-15 w-full top-0 bg-transparent z-50'>
        <ul className='flex flex-row justify-between items-center text-white w-full px-24 py-4 bg-gradient-to-r from-cyan-300 to-blue-500'>
          <div className="flex flex-row space-x-4 ">
            <li>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                <img src={Logo} className='h-10' alt="Logo" />
              </Link>
            </li>
          </div>
          <div className='hidden md:flex flex-row space-x-11'>
            <li>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                Projects
              </Link>
            </li>
            <li>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500}>
                Skills
              </Link>
            </li>
            <li>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500}>
                Contact
              </Link>
            </li>
          </div>
          <div className='md:hidden flex items-center'>
            <button onClick={toggleMenu} className=''>
              {isOpen ? <FaTimes className="text-3xl" /> : <FaBars className="text-3xl" />}
            </button>
          </div>
        </ul>
        {isOpen && (
          <ul className='flex flex-col items-center text-white bg-gradient-to-r from-cyan-300 to-blue-500 md:hidden'>
            <li className='py-2'>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section2" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMenu}>
                About
              </Link>
            </li>
            <li className='py-2'>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMenu}>
                Projects
              </Link>
            </li>
            <li className='py-2'>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section1" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMenu}>
                Skills
              </Link>
            </li>
            <li className='py-2'>
              <Link className='text-center text-2xl font-semibold hover:text-white hover:border-b-2 hover:border-b-white' activeClass="active" to="section3" spy={true} smooth={true} offset={-70} duration={500} onClick={toggleMenu}>
                Contact
              </Link>
            </li>
          </ul>
        )}
        <div className='h-[2px] bg-[#FFE6E6] w-full'></div>
      </nav>
    </div>
  );
}

export default Nav;
