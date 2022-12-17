import styled from "styled-components";

export const Container = styled.div`

.cards {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    // justify-content: space-between;
    align-items: flex-start;
    padding: 0px;
    gap: 13px;
    position: absolute;
    left: 67px;
    top: 950px;
}

h1 {
    position: absolute;
    left: 67px;
    top: 888px;
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    color: #000000;
}

h2 { 
position: absolute;
left: 67px;
top: 1950px;

font-family: 'DM Sans';
font-style: normal;
font-weight: 400;
font-size: 24px;
line-height: 31px;
color: #000000;
}



.cardss {
display: flex;
flex-direction: row;
flex-wrap: wrap;
// justify-content: space-between;
align-items: flex-start;
padding: 0px;
gap: 13px;
position: absolute;
left: 67px;
top: 2034px;
}
  @media screen and (max-width: 815px) {
    h1,
    h2 {
        align-items: center;
    }

    .cards,
    .cardss {
        left: 20px
        display: flex;
        flex-direction: column;
    }
h2 {
    top: 4150px;
}
    .cardss {
        top: 4300px
    }
`;
