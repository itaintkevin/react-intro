import React from 'react'
import Card from './Card'

const Body = (props) => {
  return (
    <div className='flex flex-col items-center justify-center h-screen w-full'>
        <h1 className="text-center text-7xl mb-5">Hello React</h1>
        <h2 className="text-center text-4xl">{props.msg}</h2>
        <Card />
    </div>
  )
}

export default Body