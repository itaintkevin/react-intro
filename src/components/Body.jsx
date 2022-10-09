import React from 'react'
import Counter from './Counter'

const Body = (props) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h1 className="text-center text-7xl mb-5 animate-bounce">Hello React</h1>
        <h2 className="text-center text-4xl">{props.msg}</h2>
        <Counter />
    </div>
  )
}

export default Body