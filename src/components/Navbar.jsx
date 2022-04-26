import React, { Component } from 'react'
import { Link, animateScroll as scroll } from "react-scroll";
import Content from '../pages/Content'


const Navbar = () => {


{


     return (


      <div class="">

<header class="sticky top-0 z-30 w-full px-2 py-4 bg-secondary shadow-xl shadow-blue-600/20 sm:px-4">
        <div class="flex items-center justify-between mx-auto max-w-7xl">
        <div class="flex-1">
    <a class="btn btn-ghost normal-case text-xl">daisyUI</a>
  </div>

  <div class="flex-none">
    <ul class="menu menu-horizontal p-0">
      <li><button class="btn btn-accent">About</button></li>
      <li tabindex="0">
      <button class="btn btn-accent">Services</button>
        <ul class="p-2 bg-base-100">
          <li><a>SEO Analysis </a></li>
          <li><a>Content Marketing Services</a></li>
          <li><a>Social Media Analysis </a></li>
          <li><a>Social Media Optimization</a></li>
        </ul>
        
      </li>
      <li><button class="btn btn-accent">Contact</button></li>
    </ul>
  </div>





  
          
        </div>
      </header>
      <Content />
      <Content />
      <Content />
      <Content />
     
      
   
      
        

     

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
      <li><button class="btn btn-accent">Button</button></li>
      <li tabindex="0">
      <button class="btn btn-accent">Button</button>
        <ul class="p-2 bg-base-100">
          <li><a>Submenu 1</a></li>
          <li><a>Submenu 2</a></li>
        </ul>
      </li>
      <li><button class="btn btn-accent">Button</button></li>
    </ul>
  </div>
</div>
<br/>
*/}