import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import {FaDumbbell} from "react-icons/fa";
import {MdMenu} from "react-icons/md";
import {PiShoppingCartThin} from "react-icons/pi";
import {motion, AnimatePresence} from "framer-motion";

const Navbar2 = () => {
    const [open, setOpen] = useState(false);

    const NavbarMenu = [
        {id:1, title: "Home", link: "/"},
        {id:2, title: "Train", link: "#"},
        {id:3, title: "Program", link: "#"},
        {id:4, title: "Blogs", link: "#"},
        {id:5, title: "Pricing", link: "#"},
    ];
  return (
    <>
        <nav>
            <div className="container mx-auto px-4 sm:px-8 lg:px-16 xl:px-20 2xl:px-24 flex items-center justify-between py-8">
                {/* logo section */}
                <div className='text-2xl flex items-center gap-2 font-bold uppercase'>
                    <FaDumbbell />
                    <p>Coders</p>
                    <p className='text-orange-400'>Gym</p>
                    {/* <p className='bg-gradient-to-r from-[#ff8901] to-[#fb923c] bg-clip-text text-transparent'>Gym</p> */}
                    {/* above p tag can used gradient for text */}
                </div>
                {/* menu section */}
                <div className='hidden md:block'>
                    <ul className='flex items-center gap-6 text-gray-600'>
                        {
                            NavbarMenu.map((link) => (
                                <li key={link.id}>
                                    <a href={link.link} className='inline-block py-1 px-3 hover:text-orange-400 font-semibold'>{link.title}</a>
                                </li>
                            ))
                        }
                    </ul>
                </div>
                {/* icons section */}
                <div className='flex items-center gap-4'>
                    <button className='text-2xl hover:bg-orange-400 hover:text-white rounded-full p-2 duration-200'>
                        <CiSearch/>
                    </button>
                    <button className='text-2xl hover:bg-orange-400 hover:text-white rounded-full p-2 duration-200'>
                        <PiShoppingCartThin />
                    </button>
                    <button className='hover:bg-orange-400 text-orange-400 font-semibold hover:text-white rounded-md border-2 border-orange-400 px-6 py-2 duration-200 hidden md:block'>Login</button>
                </div>
                {/* Mobile hamburger Menu section */}
                <div className='md:hidden' onClick={() => setOpen(!open)}>
                    <MdMenu className='text-4xl' />
                </div>
            </div>
        </nav>
        {/* Mobile sidebar section */}
        <ResponsiveMenu open={open} />
    </>
  )
}

export default Navbar2;


const ResponsiveMenu = ({open}) => {
    return (
        <AnimatePresence mode="wait">
            {
                open && (
                    <motion.div 
                        initial={{opacity: 0, y: -100}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -100}}
                        transition={{duration: 0.3}}
                        className="absolute top-20 left-0 w-full h-screen z-20"
                    >
                        <div className='text-xl font-semibold uppercase bg-orange-400 text-white py-10 m-6 rounded-3xl'>
                            <ul className='flex flex-col items-center justify-center gap-10'>
                                <li>Home</li>
                                <li>About</li>
                                <li>Service</li>
                                <li>Contact</li>
                            </ul>
                        </div>
                    </motion.div>
                )
            }
        </AnimatePresence>
    )
}