import React, { useState } from 'react'
import {FiMenu, FiX} from "react-icons/fi";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

    const navLinks = [
        {id:1, name: 'Home', link: '#home'},
        {id:2, name: 'About', link: '#about'},
        {id:3, name: 'Skills', link: '#skills'},
        {id:4, name: 'projects', link: '#projects'},
        {id:5, name: 'Progress', link: '#progress'},
    ];
  return (   
    <nav className='p-5 flex items-center justify-between border shadow-md border-amber-50 '>
      {/* logo */}
        <a href="#home" className='flex items-center justify-between w-full text-4xl font-bold italic'>Navbar</a>
        <button className='md:hidden focus:outline-none absolute top-5 right-5 transition-all duration-300 ease-in-out' onClick={() => setIsOpen(!isOpen)}>
          <FiMenu className='w-8 h-8' />
        </button>
        {/* links */}
        <ul className='gap-6 space-x-8 flex-1 hidden md:flex'>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={link.link} className='text-lg hover:text-blue-500'>{link.name}</a>
            </li>
          ))}
        </ul>
        <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-amber-200 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16`}>
          <button className='absolute top-5 right-5 transition-all duration-300 ease-in-out' onClick={() => setIsOpen(false)}>
            <FiX className='w-8 h-8' />
          </button>
          <ul className='space-y-10'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link} className='text-lg hover:text-blue-500' onClick={() => setIsOpen(false)}>{link.name}</a>
              </li>
            ))}
          </ul>
        </div>
    </nav>
  )
}

export default Navbar