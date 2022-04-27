import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Content from '../pages/Content'
import About from '../routes/About'
import Contact from '../routes/Contact'
import Services from '../routes/Services'
import Home from '../routes/Home'
  


const Navbar = () => {
{
     return (


    <div className="flex-1 px-2 mx-2 ">
    <header class="sticky top-0 z-30 w-full px-2 py-4 bg-rose-900 shadow-xl shadow-blue-600/20 sm:px-4 ">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
    <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl" href="#home">daisyUI</a>
     </div>
  <div class="flex-none">
  <ul class="menu menu-horizontal p-0 gap-6">
       <li>
        <button class="btn-xs  btn-outline btn-info">
          <a href="#home" >
            Home
          </a>
        </button>
      </li>


      <li>
        <button class="btn-xs  btn-outline btn-info">
        <a href="#about" >
            About
          </a>
        </button>
      </li>
      
      <li tabindex="0">
       <button class="btn-xs  btn-outline btn-info">
      <a href="#services" >
            Services
      </a>
       </button>
    <ul class="p-2 bg-base-100">
          <li><a>SEO Analysis </a></li>
          <li><a>Content Marketing Services</a></li>
          <li><a>Social Media Analysis </a></li>
          <li><a>Social Media Optimization</a></li>
    </ul>
        
      </li>
      <li>
        <button class="btn-xs  btn-outline btn-info">
      <a href="#contact" >
            Contact
      </a>
        </button>
      </li>
    </ul>
        </div>
        </div>
      </header>


         <section id="home" >
           <Home />
         </section>
          <section id="about" >
          <About />
         </section>
         
         <section id="services" >
          <Services />
         </section>
         <section id="contact" >
          <Contact />
         </section>
         
     

</div>
  )
}
}

export default Navbar;

