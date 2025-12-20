import React from 'react'

const Hero1 = () => {
  return (
    <section className='bg-gray-50 dark:bg-gray-900 text-white'>
        <div className='mx-auto max-w-7xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
            <div className='mx-auto max-w-xl text-center'>
                <h1 className='text-3xl font-extrabold sm:text-5xl'>Understand User Flow <strong className='font-extrabold sm:block text-blue-600'>Increase Conversion</strong></h1>
                <p className='mt-4 sm:text-xl/relaxed text-gray-600 dark:text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis a, ipsa error dicta repellendus animi, sit sunt quod perferendis ad ullam incidunt? Porro illum ad minus, ex velit obcaecati earum.</p>
                <div className='mt-8 flex flex-wrap justify-center gap-4'>
                    <a href="#" className='block w-full rounded bg-blue-600 px-12 py-3 text-sm font-medium shadow hover:bg-blue-700 focus:outline-none focus:ring active:bg-blue-500 sm:w-auto'>Get Started</a>
                    <a href="#" className='block w-full rounded text-blue-600 text-sm px-12 py-3 font-medium shadow hover:text-blue-700 focus:outline-none focus:ring active:text-blue-500 sm:w-auto'>Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero1