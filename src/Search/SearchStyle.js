import styled from "styled-components";

export const Container = styled.div`
form {
padding: 0px;
position: absolute;
left: 77px;
top: 751px;
display: flex;
flex-direction: column;
gap: 4px;
align-items: flex-start;
}

h1{
font-weight: 400;
font-size: 24px;
width: 77px;
height: 31px;
color: #000000;
}

input {
width: 1306px;
max-width: 1050px;
height: 54px;
border: 1px solid #000000;
padding: 10px;
font-size: 15px;
font-weight: 400;
background: #E5E5E5;
}
  @media screen and (max-width: 815px) {
    form {
    left: 20px;
    }
    input {
        width: 350px;
    }

    @media screen and (max-width: 475px){
        input {
            width:350px;
        }
    }
`;
