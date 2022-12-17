import styled from "styled-components";



export const Container = styled.div`
.card {
   
  border-radius: 8px;
font-style: normal;
font-weight: 400;
font-size: 24px;
display: flex;
justify-content: center;
margin: 8px;
align-items: center;
text-align: center;
color: #FFFFFF
}

img {
  margin-top: 10px;
  border-radius: 8px;
  width: 280px;
height: 280px;
}

p {
  position: absolute;
  width: 180px;
}
  @media screen and (max-width: 815px) {
    .card {
      margin: 2px;
    }
    
`;
