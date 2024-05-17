import React from 'react'
import { useState } from 'react';

export default function Home() {
  let [count , setCount ] = useState(0);
  const incrementcount =() =>{
    
    console.log(count);
    setCount((count=count + 1));
  };
  const decrementcount =() =>{
    
    console.log(count);
    setCount((count=count - 1));
  };
  return (
    <div className='bg-secondary text-center text-light p-4'>
   <h3>UseState Practice</h3>
    <p className="bg-danger text-light p-3 fs-3">{count}</p>
    <button className="m-2" onClick = {incrementcount}>Increment</button>
    <button onClick = {decrementcount}>decrement</button>
        </div>
        
  )
}
