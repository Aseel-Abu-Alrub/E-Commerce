import React from 'react'
import Layout from './components/Layout/Layout'
import Home from './components/Home/Home'
import About from './components/About/About'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import NotFound from './components/NotFound/NotFound'
import Register from './components/Register/Register'
import Login from './components/Login/Login'
import { UserContextProvider } from './components/Context/ProductContext'
import Products from './components/Products/Products'
import Contact from './components/Contact/Contact'
import { ToastContainer } from 'react-toastify';
import Cart from './components/Cart/Cart'
import Protected from './components/Protected/Protected'

export default function App () {
  let router=createBrowserRouter([
    {path:'',element:<Layout/>,
    children:[
    {index:true,element:<Home/>},
    {path:'about',element:<About/>},
    {path:'register',element:<Register/>},
    {path:'login',element:<Login/>},
    {path:'cart',element:<Protected><Cart/></Protected>},
    {path:'product',element:<Products/>},
    {path:'contact',element:<Contact/>},
    {path:'*',element:<NotFound/>}

    ]}
  
  
  ])
  return (
   <UserContextProvider>   
    <RouterProvider router={router}></RouterProvider>
    <ToastContainer />
   </UserContextProvider>

  )
}
