import React from "react";
import styled from "styled-components";
import DealerHand from "./Components/DealerHand";
import PlayerHand from "./Components/PlayerHand";

function App() {
  return (
    <Container>
      <DealerHand />
      <PlayerHand />
    </Container>
  );
}

// Styled Components

const Container = styled.div`
  height: 100vh;
  width: 100vw;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;

  background-color: green;
`;

// Export
export default App;
