import React from 'react'
import Navbar from '../components/Navbar';
import Body from '../components/Body'
import Footer from '../components/Footer';

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