import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import MasterLayout from './components/MasterLayout/MasterLayout'
import Home from './components/Home/Home'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import MainContent from './components/MainContent/MainContent'
import Experience from './components/Experience/Experience'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
function App() {
  // const [count, setCount] = useState(0)
  
  let routes = createBrowserRouter([
   { path:'/', 
   element: <MasterLayout />,
   errorElement: <NotFound />,
   children: [
    {index: true, element: <Home />},
    {path: 'Home', element: <Home />},
    {path: 'About', element: <About />},
    {path: 'Skills', element: <Skills />},
    {path: 'MainContent', element: <MainContent />},
  

  ],
},
  ]);
  return (
    <>
    <RouterProvider router={routes} />  
    </>
  )
}

export default App
