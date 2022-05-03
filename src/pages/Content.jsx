
import styled, { keyframes } from "styled-components";
import fly from "../assets/fly.png"
import Spring from "./Spring.jsx"






const move = keyframes`
0% { transform: translateY(-5px)         }
    50% { transform: translateY(10px) translateX(40px)        }
    100% { transform: translateY(-40px)         }
`;





function Content() {

  const Fly = styled.div`
  display: flex;
  justify-content: left;
  align-content: left;
  width: 60%;
  padding-bottom: 5rem;
  animation: ${move} 2.5s ease infinite;
  @media only Screen and (max-width: 40em) {
    width: 50vw;
    padding-bottom: 0;
  }
`;


  






  return (
    <div>
     <Fly>
            <img src={fly} alt="" width="300" height="300" />
      </Fly>
      <Spring />
     
      
       
      
    
      </div>
  )
}

export default Content;