import React from 'react'
import Navbar from "../Component/Navbar"
import Products from "../Component/Products"
import CategoryProduct from './CategoryProduct'
import PieChart from '../Component/PieChart'


const HomePage = () => {
 
  return (
    <div>
    <Navbar/>
    <Products/>
    <PieChart/>
    </div>
  )
}

export default HomePage