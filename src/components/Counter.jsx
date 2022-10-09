import React, { useState } from 'react'

const Card = () => {
    const [count, setCount] = useState(0);

    const increment = () => {
        setCount(count + 1);
    };

    const decrement = () => {
        setCount(count - 1);
    };

  return (
    <div className='flex flex-col items-center rounded-2xl px-12 my-10 bg-slate-300'>
        <div className='text-xl my-5 shadow-md rounded-2xl p-2'>useState - Counter</div>
        <div className='text-7xl my-7'>{count}</div>
        <div className='flex'>
            <button className='my-5 mx-2 px-5 bg-slate-500 text-white shadow-md rounded-2xl' onClick={decrement}>-</button>
            <button className='my-5 mx-2 px-5 bg-slate-500 text-white shadow-md rounded-2xl' onClick={increment}>+</button>
        </div>
    </div>
  )
}

export default Card