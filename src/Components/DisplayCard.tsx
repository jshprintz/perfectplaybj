import React from "react";
import styled from "styled-components";

const DisplayCard: React.FC<{imageUrl: string}> = ({imageUrl}) => {
  return(
    <CardContainer>
      <Card alt="test" src={imageUrl} />
    </CardContainer>
  )
}

// Styled Components
const CardContainer = styled.div`
  height: 350px;
  width: 225px;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const Card = styled.img`
  height: 100%;
  width: 100%;
  object-fit: contain;
`;


// Export
export default DisplayCard;