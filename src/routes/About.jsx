import React from 'react'

import styled from "styled-components";

const About = () => {

  const AboutSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: blue;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  return (
    <AboutSection id="about">
        <h3>We Are Capital!</h3>
        <small>The Best Marketing Agency </small>
        <br/>
        <small>Our Professional agents know everything to taking your business to the next level, so you dont have to! </small>
    </AboutSection>
  )
}

export default About