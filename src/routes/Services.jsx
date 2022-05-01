import React from 'react'

import styled from "styled-components";
import Business from "../assets/Business.jpeg";
import CM from "../assets/CM.jpeg";
import Optimize from "../assets/Optimize.png";
import SeoAnalysis from "../assets/SeoAnalysis.jpeg";
import Social from "../assets/Social.png";

const Services = () => {

  const ServicesSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: teal;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  return (
     <div style={{ backgroundImage: `url(${Social})` }}>
    <ServicesSection id="services">
        <h3>We Offer A Wide Variety Of Services!</h3>
        <h4>Keep in mind, Consultations are always free!</h4>
        
        <br/>
        <br/>


        <div class="max-w-sm rounded overflow-hidden shadow-lg">
  <img class="w-full" src={CM} />
  <div class="px-6 py-4">
    <div class="font-bold text-xl mb-2">SEO Analysis</div>
    <p class="text-teal-700 text-base">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus quia, nulla! Maiores et perferendis eaque, exercitationem praesentium nihil.
    </p>
  </div>
  <div class="px-6 pt-4 pb-2">
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
    <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
  </div>
</div>
    
    
    </ServicesSection>
    </div>
  )
}

export default Services