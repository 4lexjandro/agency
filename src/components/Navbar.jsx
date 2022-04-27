import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Content from '../pages/Content'
import About from '../routes/About'
import Contact from '../routes/Contact'
import Services from '../routes/Services'
  


const Navbar = () => {
{
     return (


    <div className="flex-1 px-2 mx-2 ">
    <header class="sticky top-0 z-30 w-full px-2 py-4 bg-info shadow-xl shadow-blue-600/20 sm:px-4 ">
    <div class="flex items-center justify-between mx-auto max-w-7xl">
    <div class="flex-1">
      <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
     </div>
  <div class="flex-none">
  <ul class="menu menu-horizontal p-0 gap-6">
      <li>
        <button class="btn btn-secondary">
        <a href="#one" >
            About
          </a>
        </button>



      </li>
      <li tabindex="0">
       <button class="btn btn-secondary">
      <a href="#two" >
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
        <button class="btn btn-secondary">
      <a href="#three" >
            Contact
      </a>
        </button>
      </li>
    </ul>
        </div>
        </div>
      </header>

          <section id="one" >
          <About />
         </section>
         <section id="two" >
          <Services />
         </section>
         <section id="three" >
          <Contact />
         </section>
         
     

</div>
  )
}
}

export default Navbar;


{/* 
<div class="navbar bg-secondary">
pow
  <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>


  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><button class="btn btn-secondary">Button</button></li>
      <li tabindex="0">
      <button class="btn btn-secondary">Button</button>
        <ul class="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><button class="btn btn-secondary">Button</button></li>
    </ul>
  </div>
</div>
<br/>
*/}