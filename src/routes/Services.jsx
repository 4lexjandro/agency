import React from 'react'

import styled from "styled-components";

const Services = () => {

  const ServicesSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: green;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  return (
    <ServicesSection id="services">
        <h3>We Offer A Wide Variety Of Services!</h3>
        <h4>Keep in mind, Consultations are always free!</h4>
        
        <br/>
        
       
  <small>Our Professional agents know everything to taking your business to the next level, so you dont have to! </small>
  <br/>
    
    
    </ServicesSection>
  )
}

export default Services