import React from 'react'
import Navbar from './Navbar';
import Body from './Body'
import Footer from './Footer';

const Hero = () => {
  return (
    <div className="flex flex-col justify-start items-center h-screen w-full overflow-hidden">
        <Navbar />
        <Body msg="Hi! IEEE Family"/>
        <Footer />
    </div>
  )
}

export default Hero;