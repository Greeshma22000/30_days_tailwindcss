import React from 'react'

const Navbar3 = () => {
    const navLinks = [
        {id:1, title:"Home", link:"#"},
        {id:1, title:"Service", link:"#"},
        {id:1, title:"Program", link:"#"},
        {id:1, title:"Projects", link:"#"},
        {id:1, title:"Analysis", link:"#"},
    ];
  return (
    <div className='relative shadow-md'>
        <nav className='flex items-center justify-around p-5'>
            <h1 className='text-4xl font-bold'>Coding</h1>
            <ul className='flex items-center gap-7 text-lg'>
                {
                    navLinks.map((link) => (
                        <li key={link.id}><a href={link.link} className='hover:text-blue-400 transition-all'>{link.title}</a></li>
                    ))
                }
            </ul>
            <button className='bg-white text-black px-2 py-1 rounded-2xl border border-cyan-400 hover:bg-black hover:text-white text-xl'>Get Started</button>
        </nav>
    </div>
  )
}

export default Navbar3