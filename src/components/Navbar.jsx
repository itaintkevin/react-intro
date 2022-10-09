import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='flex flex-col sm:flex-row items-center justify-between w-full px-96 py-3 shadow-md'>
        <div className='text-3xl px-5 py-2'>React.js</div>
        <div className='flex w-max text-xl my-auto'>
            <Link className='mr-3 shadow-md rounded-2xl px-5 py-2 bg-slate-300' to="/">Home</Link>
            <Link className='mr-3 shadow-md rounded-2xl px-5 py-2 bg-slate-300' to="/about">About</Link>
        </div>
    </div>
  )
}

export default Navbar;