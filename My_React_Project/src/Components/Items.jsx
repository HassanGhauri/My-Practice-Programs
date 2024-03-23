/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

const Items = ({data,title}) => {
  return (
    <div>
        <h2 className='text-3xl text-center italic shadow-sm p-5 text-cyan-950'>{title}</h2>
        {data && data.map((dt,index)=>{
        return(
          <div key={index} className="inline-block text-teal-900 text-xl italic m-5 flex-wrap text-center shadow-md">
            <img src={dt.image} alt={dt.name} className='h-32 w-52 rounded-md'/>
            <p>Name: {dt.name}</p>
            <p>Price: {dt.price}</p>
            <p>Quantity: {dt.quantity}</p>
          </div>
        )})
      }
    </div>
  )
}

export default Items