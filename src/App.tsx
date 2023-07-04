import React from "react";
import styled from "styled-components";
import DealerHand from "./Components/DealerHand";
import PlayerHand from "./Components/PlayerHand";

function App() {
  return (
    <Container>
      <DealerHand />
      <div
        style={{
          width: "80%",
          height: "20px",
          borderBottom: "2px solid black",
          borderRadius: "10px",
        }}
      ></div>
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
  justify-content: center;

  background-color: green;
`;

// Export
export default App;
