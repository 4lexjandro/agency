import React from 'react'
import styled from "styled-components";
import globe from "../assets/globe.png"


function Spring() {

  const RotateSection = styled.section`
  width: 100%;
  padding: calc(2.5rem + 2.5vw) 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

   




  return (

   <div>
     <RotateSection>
<div class=" w-40 h-40 motion-safe:animate-spin ">
<img src={globe} alt=""  />

</div>
  </RotateSection>
  


</div>
  )
}

export default Spring