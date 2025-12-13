import React from 'react'
import { CiSearch } from "react-icons/ci";
import {FaDumbbell} from "react-icons/fa";
import {MdMenu} from "react-icons/md";
import {PiShoppingCartThin} from "react-icons/pi";

const Navbar2 = () => {

    const NavbarMenu = [
        {id:1, title: "Home", link: "/"},
        {id:2, title: "Train", link: "#"},
        {id:3, title: "Program", link: "#"},
        {id:4, title: "Blogs", link: "#"},
        {id:5, title: "Contact", link: "#"},
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
                <div>
                    <button>
                        <CiSearch className='text-2xl' />
                    </button>
                </div>
                {/* Mobile hamburger Menu section */}
            </div>
        </nav>
        {/* Mobile sidebar section */}
    </>
  )
}

export default Navbar2