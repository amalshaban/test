import React from 'react'
import Sidebar from '../Sidebar/Sidebar'
import Work from '../Work/Work'
import { Outlet } from 'react-router-dom'


export default function MasterLayout() {
  return (
    <>
    <Work />
    <Sidebar />
    <Outlet></Outlet>
    </>
    
  );
}


