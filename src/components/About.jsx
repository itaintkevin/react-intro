import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'

const About = () => {
  return (
    <div className='flex flex-col justify-start items-center h-screen w-full overflow-hidden'>
        <Navbar />
        <div className="flex flex-col items-center justify-center h-screen w-full">This the About Page</div>
        <Footer />
    </div>
  )
}

export default About;