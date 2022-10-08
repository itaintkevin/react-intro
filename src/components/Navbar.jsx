import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between w-3/5 my-5'>
        <div className='text-3xl'>React.js</div>
        <div className='flex w-max text-xl my-auto'>
            <Link className='mr-3' to="/">Home</Link>
            <Link className='mr-3' to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar;