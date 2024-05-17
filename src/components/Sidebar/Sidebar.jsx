import React from 'react'
import { useState } from 'react';

export default function Sidebar() {
  let [name, setName] = useState('SESSION #3 TOPICS');
  const changeName = () =>{
    name = 'use state for changing text';
    setName(name);
  }
  
  return (
    <div className='bg-warning text-center p-5'>
      <h3 className='bg-danger text-light p-3'>{name}</h3>
      
      <button onClick={changeName}>USESTATE</button>
    </div>
  )
}
