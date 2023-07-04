import React, { useState } from "react";
import styled from "styled-components";
import DisplayCard from "./DisplayCard";
import GetRandomCard from "../Utilities/GetRandomCard";

const PlayerHand = () => {
  const [cardOne, setCardOne] = useState(GetRandomCard());
  const [cardTwo, setCardTwo] = useState(GetRandomCard());
  const [action, setAction] = useState<string>("Opening Action");

  const playerData = {
    cards: [cardOne, cardTwo],
    score: cardOne.cardData.value + cardTwo.cardData.value,
  };
  const score: string = `Player Score ${playerData.score}`;

  const handleDealClick = () => {
    setCardOne(GetRandomCard());
    setCardTwo(GetRandomCard());
    setAction("Player Re-Deals");
  };

  const handleStandClick = () => {
    setAction("Player Stands");
  };

  return (
    <Container>
      <h2>{score}</h2>
      <h3>{action}</h3>
      <CardContainer>
        {playerData.cards.map((card) => {
          return <DisplayCard imageUrl={card.cardData.source} />;
        }
        )}
      </CardContainer>
      <ButtonContainer>
        <Button onClick={() => handleDealClick()}>RE-DEAL</Button>
        <Button onClick={() => handleDealClick()}>HIT</Button>
        <Button onClick={() => handleStandClick()}>STAND</Button>
      </ButtonContainer>
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
const ButtonContainer = styled(CardContainer)``;

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Button = styled.button`
  border-radius: 10px;
  background-color: #fff;
  color: #000;
  font-size: 1.5rem;
  font-weight: bold;
  margin-top: 10px;
  cursor: pointer;

  &:hover {
    background-color: #000;
    color: #fff;
  }
`;

// Export
export default PlayerHand;
