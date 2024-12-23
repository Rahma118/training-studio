/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import { Link } from 'react-router-dom';
import {NavLink} from 'react-scroll'


import{CartProvider , useCart , totalItems} from 'react-use-cart';

const SubHeader = () => {
    const {totalItems} =useCart();
  return (
    <CartProvider>
   {/* <!-- ***** Header Area Start ***** --> */}
   <header class="header-area header-sticky" style={{backgroundColor:"#59606b"}}>
    <div></div>
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <nav class="main-nav" >
                        {/* <!-- ***** Logo Start ***** --> */}
                        <a href="index.html" class="logo">Training<em> Studio</em></a>
                        {/* <!-- ***** Logo End ***** --> */}
                        {/* <!-- ***** Menu Start ***** --> */}
                        <ul class="nav">
        <li class="scroll-to-section"><Link to="/" class="active">Home</Link></li>
         <li class="scroll-to-section"><Link to="/about" smooth={true} offset={-100} duration={1000}>About</Link></li>
        <li class="scroll-to-section"><Link to="/classes" smooth={true} offset={-100} duration={1000}>Classes</Link></li>
     <li class="scroll-to-section"><Link to="/schedules" smooth={true} offset={-100} duration={1000}>Schedules</Link></li>
     <li class="scroll-to-section"><Link to="/contact" smooth={true} offset={-100} duration={1000}>Contact</Link></li> 
    <li class="scroll-to-section"><Link to="/basket"smooth={true} offset={-100} duration={1000}>Products</Link></li>
     <li class="main-button"><a href="#" style={{paddingTop:"5px"}} >Sign Up</a></li>
     <Link to="/CartPage" smooth={true} offset={-100} duration={1000}><i style={{fontSize:"25px", color:"greenyellow" ,paddingTop:"10px"}}
    class="fa-solid fa-cart-shopping"></i>({totalItems})</Link>

                        </ul>        
                        <a class='menu-trigger'>
                            <span>Menu</span>
                        </a>
                        {/* <!-- ***** Menu End ***** --> */}
                    </nav>
                </div>
            </div>
        </div>
    </header>
    {/* <!-- ***** Header Area End ***** --> */}
    </CartProvider>
  )
}

export default SubHeader;