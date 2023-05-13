import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer'
import Navbar from './Navbar'

export default function () {
  return (
    <>
    
    <div>
        <Navbar title="MyApp"/> 
        <Outlet/>
        <Footer/>
    </div>


    </>
  )
}
