import React, { useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Hero from './components/Hero';


const App = () => {
  useEffect(() => {
    AOS.init({
      duration:1000,
    })
  }, [])
  return (
    <main className='bg-gray-950'>
      <Hero />
    </main>
  )
}

export default App