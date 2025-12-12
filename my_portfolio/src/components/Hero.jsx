import React from 'react'
import Navbar from './Navbar'

const Hero = () => {
  return (
    <div className='relative overflow-hidden min-h-[550px] sm:min-h-[600px] flex flex-col items-center'>
        <div className='md:h-[550px] h-[500px] w-[450px] bg-linear-to-r absolute from-[#6d2897] via-[#8e6cf5] to-[#bb61c5] transform rotate-45 z-0 right-2 top-28 rounded-3xl'>
        </div>
        <Navbar />
        <main id="home" className='flex flex-col md:flex-row items-center justify-center w-full px-4 md:px-52 pb-4 md:pb-24 md:pt-32 pt-24 mt-10 md:mt-0 z-10'>
          <section className='flex-1 mr-28 md:text-left mt-10 md:mt-0 relative' data-aos='fade-up' data-aos-delay='500'></section>
        </main>
    </div>
  )
}

export default Hero