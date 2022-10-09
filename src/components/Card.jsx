import React from 'react'

// const Card = (props) => {
//   return (
//     <div className='bg-slate-300 px-12 py-2 mx-5 shadow-md text-center'>
//         <div>{props.name}</div>
//         <div>{props.quantity}</div>
//         <div>{props.price}</div>
//     </div>
//   )
// }

const Card = ({ name, quantity, price}) => {
    return (
      <div className='bg-slate-300 px-12 py-2 mx-5 shadow-md text-center'>
          <div>{name}</div>
          <div>{quantity}</div>
          <div>{price}</div>
      </div>
    )
  }

export default Card