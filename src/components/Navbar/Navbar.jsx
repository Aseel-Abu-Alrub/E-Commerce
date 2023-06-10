import React, { useContext, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { UserContext } from '../Context/ProductContext'
import imgg from '../../shofy.png'
import '../Navbar/Navbar.css'

export default function Navbar({logout}) {
  let{user}=useContext(UserContext)

 
  
  return (
    <div  >
  <nav className="navbar navbar-expand-lg " style={{boxShadow:'0 0 10px 2px rgba(0,0,0,0.2)',backgroundColor:'white'}}>
  <div className="container-fluid">
    <Link className="navbar-brand" href=""><img src={imgg} style={{width:'130px'}} alt="" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav nav-list  me-auto ms-5  mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active me-4 px-0"  to="">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4 px-0" to="product">Products</Link>
        </li>
        
        <li className="nav-item">
          <Link className="nav-link me-4 px-0" to="about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-4 px-0" to="contact">Contact</Link>
        </li>
     
      </ul>

       <ul className="navbar-nav ms-auto  mb-lg-0  ">
        {user?  
        <>
         <li className="nav-item">
        <Link className="nav-link me-3 mt-4 position-relative" to=""><i class="fa-regular fa-heart fs-5"></i><span className='position-absolute '>0</span></Link>
        </li>
        <li className="nav-item">
        <Link className="nav-link me-3 mt-4 position-relative" to="cart"><i class="fa-solid fa-cart-shopping fs-5"></i><span className='position-absolute top-0'>0</span></Link>
        </li>
        <li className="nav-item">
          <p className="nav-link border mt-3 rounded ms-3 logout " style={{cursor:'pointer'}} onClick={logout}>Logout</p>
        </li>
        
        </>
        :
        <>

        <li className="nav-item">
          <Link className="nav-link me-3 border border-1 rounded login" to="login">Login</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link me-3 border border-1 rounded signup" to="register">Signup</Link>
        </li>
        
       
        </>
        
        }
       
      
      
       </ul>
     
    </div>
  </div>
</nav>

    </div>
  )
}
