import React from 'react'

const Card = () => {
  return (
    <div className='flex flex-col items-center rounded-2xl px-16 my-10 bg-slate-300'>
        <div className='text-xl my-5'>Quantity</div>
        <div className='text-7xl my-7'>0</div>
        <div className='flex '>
            <div className='my-5 mx-2 px-5 bg-slate-500 text-white rounded-2xl'>-</div>
            <div className='my-5 mx-2 px-5 bg-slate-500 text-white rounded-2xl'>+</div>
        </div>
    </div>
  )
}

export default Card