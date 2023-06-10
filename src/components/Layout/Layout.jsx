import React from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useNavigate } from 'react-router-dom'
import Footer from '../Footer/Footer'
import { useContext } from 'react'
import { UserContext } from '../Context/ProductContext'

export default function Layout() {

  let{setUser}=useContext(UserContext)
  let navigate=useNavigate()
  function logout(){
    localStorage.removeItem("userToken")
    setUser(null)
    navigate('/login')
   }
  return (
    <div>
        <Navbar logout={logout}/>
        <Outlet></Outlet>
        <Footer/>
    </div>
  )
}
