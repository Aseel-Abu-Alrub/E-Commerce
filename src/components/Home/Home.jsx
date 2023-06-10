import React from 'react'
import axios from 'axios'
import { useEffect } from 'react'
import { useState } from 'react'
import '../Home/Home.css'
import pods from '../../imgs/air.png'
import phone from '../../imgs/phone.png'


export default function Home() {
 
  let[products,setProducts]=useState([])
  async function getProducts(){
    let{data}=await axios.get("https://fake-e-commerce-api.onrender.com/product")
    setProducts(data)
    console.log(data)
  }

  useEffect(()=>{
    getProducts()
  },[])
  return (
    <div className='home' >
    <div id="carouselExampleInterval" className="carousel slide " data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active" data-bs-interval={10000}>
      <img src={pods} className="d-block w-100" alt="..." />
    </div>
    <div className="carousel-item" data-bs-interval={2000}>
      <img src={phone} className="d-block w-100 vh-50" alt="..." />
    </div>
    <div className="carousel-item">
      <img src="..." className="d-block w-100" alt="..." />
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true" />
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleInterval" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true" />
    <span className="visually-hidden">Next</span>
  </button>
</div>

      {/* <div className="container">
        <img src={slider}  alt="" /> 
        <img src={slider1}  alt="" /> 
        <div className="tittl">
          <p>Starting at $Starting at</p>
          <h1>The best note book collection 2023</h1>
        </div>
        
      </div> */}
    </div>
  )
}
