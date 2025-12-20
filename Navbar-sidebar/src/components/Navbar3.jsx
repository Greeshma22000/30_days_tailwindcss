import React, { useState } from 'react'
import {FiMenu, FiX} from "react-icons/fi";

const Navbar3 = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navLinks = [
        {id:1, title:"Home", link:"#"},
        {id:2, title:"Service", link:"#"},
        {id:4, title:"Projects", link:"#"},
        {id:5, title:"About", link:"#"},
        {id:6, title:"Login", link:"#"},
    ];
  return (
        <nav className='flex items-center justify-between p-5'>
            <h1 className='text-4xl font-bold ml-5'>Coder</h1>
            <button className='md:hidden focus:outline-none absolute top-5 right-5' onClick={() => setIsOpen(!isOpen)}>
                <FiMenu className='w-8 h-8' /> 
            </button>
            <ul className='gap-6 space-x-8 hidden md:flex'>
                {navLinks.map((link) => (
                    <li key={link.id}><a href={link.link} className='text-lg'>{link.title}</a></li>
                ))}
            </ul>
            <button className=''>Signup</button>
            <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-orange-500 absolute top-0 left-0 w-full h-screen flex flex-col items-center justify-center space-y-8 pt-16 text-white`}>
                <button className='absolute top-5 right-5 transition-all duration-300 ease-in-out' onClick={() => setIsOpen(false)}>
                    <FiX className='w-8 h-8' />
                </button>
                <h1 className='absolute top-20 text-4xl font-bold'>Coder</h1>
                <ul className='space-y-10'>
            {navLinks.map((link) => (
              <li key={link.id}>
                <a href={link.link} className='text-lg hover:text-blue-500' onClick={() => setIsOpen(false)}>{link.title}</a>
              </li>
            ))}
          </ul>
            </div>
        </nav>
  )
}

export default Navbar3