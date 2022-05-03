import React from 'react'
import styled from "styled-components";
import Content from '../pages/Content'

const Home = () => {

  const HomeSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  background-color: #9c9fa540;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
  return (
    <HomeSection id="home">
      <br />
      <h1 class="animate-bounce w-6 h-6 ...">
        Welcome To Capital!
      </h1>
<br/>
<br/>
      
      
        <p>We assist entrepreneurs like you expand their business and push boundaries they never thought possible!</p>
        
      <Content />
      <br/>
      <p>We go around the world!</p>









    </HomeSection>
  )
}

export default Home