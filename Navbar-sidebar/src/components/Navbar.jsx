import React from 'react'

const Navbar = () => {

    const navLinks = [
        {id:1, name: Home, link: '#home'},
        {id:2, name: About, link: '#about'},
        {id:3, name: Skills, link: '#skills'},
        {id:4, name: projects, link: '#projects'},
        {id:5, name: Progress, link: '#progress'},
    ];
  return (
    <nav className='flex items-center justify-between'>
        <a href="#home">Navbar</a>
    </nav>
  )
}

export default Navbar