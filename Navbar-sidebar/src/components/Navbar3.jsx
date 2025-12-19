import React, { useState } from 'react'
import {GiHamburgerMenu} from 'react-icons/gi';
import {RiCloseLargeFill} from 'react-icons/ri';

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
    <div className='relative w-full shadow-md'>
            <nav className='flex items-center justify-between p-3 z-50 container'>
            <h1 className='text-4xl font-bold'>Coding</h1>
            <ul className='hidden md:flex space-x-4 text-xl font-semibold'>
                {
                    navLinks.map((link) => (
                        <li key={link.id}><a href={link.link} className='inline-block py-1 px-3 hover:text-blue-400 transition-all duration-300'>{link.title}</a></li>
                    ))
                }
            </ul>

            <div className='md:hidden cursor-pointer'>
                {isOpen ? (
                    <RiCloseLargeFill
                        size={20}
                        onClick={() => setIsOpen(!isOpen)}
                        className='absolute right-0 top-0 mt-4 mr-5'
                    />
                ) : (
                    <GiHamburgerMenu 
                        size={20}
                        onClick={() => setIsOpen(!isOpen)}
                        className='absolute right-0 top-0 mt-4 mr-5'
                    />
                )}
            </div>
            <div>
                {isOpen && (
                <ul className='md:hidden flex flex-col items-center justify-center gap-10 text-xl'>
                    {navLinks.map((link) => (
                        <li key={link.id}><a href={link.link} className='block py-1 px-3 hover:text-blue-400 transition-all duration-300'>{link.title}</a></li>
                    ))}
                </ul>
            )}
            </div>
        </nav>
    </div>
  )
}

export default Navbar3