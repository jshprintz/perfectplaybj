import React, { useState } from "react";
import styled from "styled-components";
import DisplayCard from "./DisplayCard";
import GetRandomCard from "../Utilities/GetRandomCard";

const DealerHand = () => {
  const [cardOne, setCardOne] = useState(GetRandomCard());
  const [cardTwo, setCardTwo] = useState(GetRandomCard());

  const handleDealClick = () => {
    setCardOne(GetRandomCard());
    setCardTwo(GetRandomCard());
  };

  return (
    <Container>
      <h2>Dealer's Cards</h2>
      <CardContainer>
        <DisplayCard imageUrl={cardOne.randomCard.source} />
        <DisplayCard imageUrl={cardTwo.randomCard.source} />
      </CardContainer>
      <DealBtn onClick={() => handleDealClick()}>DEAL</DealBtn>
    </Container>
  );
};

// Styled Components
const CardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const DealBtn = styled.button`
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  margin-bottom: 10px;
`;

// Export
export default DealerHand;
