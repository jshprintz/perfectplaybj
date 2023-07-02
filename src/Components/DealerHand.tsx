import React from "react";
import styled from "styled-components";



function DealerHand() {
  return (
    <Container>
      <CardContainer>Card One</CardContainer>
      <CardContainer>Card Two</CardContainer>
    </Container>
  );
}

// Styled Components
const Container = styled.div`
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const CardContainer = styled.div`
  height: 350px;
  width: 225px;
  border: 5px solid black;
  background-color: red;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`

// Export
export default DealerHand;
