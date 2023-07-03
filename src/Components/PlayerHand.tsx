import React from "react";
import styled from "styled-components";
import DisplayCard from "./DisplayCard";
import GetRandomCard from "../Utilities/GetRandomCard";

const PlayerHand = () => {
  const cardOne = GetRandomCard();
  const cardTwo = GetRandomCard();

  return (
    <Container>
      <DisplayCard imageUrl={cardOne} />
      <DisplayCard imageUrl={cardTwo} />
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

// Export
export default PlayerHand;
