import React from 'react'
import logo from '../../shofy-removebg-preview.png'
import { Link } from 'react-router-dom'
import '../Footer/Footer.css'
 import imgs from '../../imgs/footer-pay.png'

export default function Footer() {
  return (
    <section className='mt-5 pt-5 footer'>
      <div className="container">
        <div className="row">
          <div className="col-md-4 col-lg-3 mt-4 pt-3">
          <img src={logo} alt="" />
          <p className='para mt-3 '>We are a team of designers and developers that create high quality WordPress</p>
          <div className="icons">
          <a href=''><i class="fa-brands fa-facebook-f"></i></a>
           <a href=''><i class="fa-brands fa-twitter"></i></a>
          <a href=''> <i class="fa-brands fa-linkedin-in"></i></a>
          <a href=''> <i class="fa-brands fa-vimeo-v"></i></a>
          </div>
          </div>
          
          <div className="col-md-4 col-lg-3">
          <h4>My Account</h4>
          <ul>
            <li> <Link to=''>Track Orders</Link></li>
            <li> <Link to=''>Shipping</Link></li>
            <li><Link to="">Wishlist</Link></li>
            <li ><Link to="">My Account</Link> </li>
            <li> <Link>Order History</Link></li>
            <li> <Link>Returns</Link></li>
          </ul>
        </div>
        <div className="col-md-4 col-lg-3">
          <h4>Information</h4>
          <ul>
            <li> <Link to=''>Our Story</Link></li>
            <li> <Link to=''>Careers</Link></li>
            <li><Link to="">Privacy Policy</Link></li>
            <li ><Link to="">Terms & Conditions</Link> </li>
            <li> <Link>Latest News</Link></li>
            <li> <Link>Contact Us</Link></li>
          </ul>
        </div>

        <div className="col-md-4 col-lg-3 last">
          <h4>Talk To Us</h4>
          <p className='p-0 m-0 mt-3'>Got Questions? Call us</p>
          <a href="tel:+970-569437506">+970-569437506</a><br/>
          <i class="fa-solid fa-envelope-open me-2 my-3"></i><a href="mailto:shofy@support.com"  >shofy@support.com</a><br/>
          <i class="fa-solid fa-location-dot me-2"></i><a  href="https://www.google.com/maps/place/Sleepy+Hollow+Rd,+Gouverneur,+NY+13642%D8%8C+%D8%A7%D9%84%D9%88%D9%84%D8%A7%D9%8A%D8%A7%D8%AA+%D8%A7%D9%84%D9%85%D8%AA%D8%AD%D8%AF%D8%A9%E2%80%AD/@44.3304928,-75.453048,17z/data=!3m1!4b1!4m6!3m5!1s0x4cccddac8972c5eb:0x56286024afff537a!8m2!3d44.3304928!4d-75.453048!16s%2Fg%2F1tdsjdj4?entry=ttu">79 Sleepy Hollow St.
          Jamaica, New York 1432 </a>

        </div>


        </div>

      <div className="footer2 mt-5 pb-3">
        <div className="row ">
          <div className="col-md-9">
            <p>© 2023 All Rights Reserved | Next js Template by <a href=''>ThemePure.</a></p>
          </div>
          <div className="col-md-3 ">
            <img src={imgs} alt="" />
          </div>
        </div>
      </div>
      
      </div>

    </section>
  )
}
