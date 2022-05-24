import React from 'react'

import styled from "styled-components";

import CM from "../assets/CM.jpeg";
import Optimize from "../assets/Optimize.png";
import SeoAnalysis from "../assets/SeoAnalysis.jpeg";
import Social from "../assets/Social.png";

const Services = () => {

  const ServicesSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #9c9fa540;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  return (
     <div >
    <ServicesSection id="services">
      <br/>
      <br/>
        <h3>We Offer A Wide Variety Of Services!</h3>
        <h4>Keep in mind, Consultations are always free!</h4>
        
        <br/>
        <br/>


  <div class="max-w-sm rounded overflow-hidden shadow-lg  bg-info">
  <img alt="" class="w-full" src={CM} />
  <div class="px-6 py-4">
    <div class="font-bold text-black text-xl mb-2">Market Your Business Needs</div>
    <p class="text-black text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Content</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Success</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Mindset</span>
  </div>
</div>

<br/>

<div class="max-w-sm rounded overflow-hidden shadow-lg bg-info">
  <img alt="" class="w-full" src={Optimize} />
  <div class="px-6 py-4">
    <div class="font-bold text-black text-xl mb-2">Optimization</div>
    <p class="text-black text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#target</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#audience</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReachingOutOurDreams</span>
  </div>
</div>





<br/>



<div class="card card-side card-compact bg-base-100 shadow-xl">
<div class="card w-96 bg-info shadow-xl">
  <figure>
    <img alt="" src={Social}  />
    </figure>
  <div class="card-body text-black">
    <h2 class="card-title ">
      Get Your Name out there with the power of the internet
      
      <div class="badge badge-primary">SMM</div>
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <div class="card-actions justify-end">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ReachMillions</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#MakeMillions</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#ThinkAndGrowRich</span>
    </div>
  </div>
</div>
</div>

<br/>



<div class="card card-side card-compact bg-base-100 shadow-xl">
<div class="card w-96 bg-info shadow-xl">
  <figure>
    <img alt="" src={SeoAnalysis}  />
    </figure>
  <div class="card-body text-black">
    <h2 class="card-title ">
      Data statistics used for your advantage
      
      <div class="badge badge-primary">SEO</div>
    </h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
    <div class="card-actions justify-end">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Search Engine</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#PinnacleDetermination</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Motivation</span>
      
    </div>
  </div>
</div>
</div>


    
    
    </ServicesSection>
    </div>
  )
}

export default Services