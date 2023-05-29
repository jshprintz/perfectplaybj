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
  height: 200px;
  width: 150px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;

  background-color: red;
`;

const CardContainer = styled.div`
  height: 100%;
  width: 100%;
  border: 5px solid black;
  padding: 10px;
`

// Export
export default DealerHand;
