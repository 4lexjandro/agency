import React from 'react'

import styled from "styled-components";

import Business from "../assets/Business.jpeg";

const About = () => {

  const AboutSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  display: flex;
  color: blue;
  font-size: 30px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  filter: brightness(100%);
`;
  return (
    <div style={{ backgroundImage: `url(${Business})` }}>
      <br/>
      <br/>
      
    <AboutSection id="about">
        <h1>We Are Capital!</h1>
        <h1>The Best Marketing Agency </h1>
        <br/>
        <h1>Our Professional agents know everything to taking your business to the next level, so you dont have to! </h1>
        
      <h1 class="mb-5 text-5xl font-bold  ">Hello there</h1>
      <p class="mb-5 text-center">In 2016, we decided to help others with growth, to achieve what we have and Capital was created</p>
      <p class="mb-5 text-center">We have assisted over 3,000 entrepreneurs to expand their business </p>
      <button class="btn bg-rose-900">Get Started</button>
   
    </AboutSection>

    </div>
  )
}

export default About