import { useSpring, animated } from 'react-spring'
import styled, { keyframes } from "styled-components";
import CM from "../assets/CM.jpeg"




const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(10px)        }
    100% { transform: translateY(-5px)         }
`;





function Content() {

  const Rocket = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  width: 40%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;
  

  






  return (
    <div>
     <h1>pow</h1>
     <Rocket>
            <img src={CM} alt="" width="400" height="400" />
      </Rocket>
       
       
      
    
      </div>
  )
}

export default Content;