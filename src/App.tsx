import React from "react";
import styled from "styled-components";
import DealerHand from "./Components/DealerHand";

function App() {
  return (
    <Container>
      <DealerHand />
      <h1>Hello World. It's me.</h1>
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
  justify-content: flex-start;

  background-color: green;
`;

// Export
export default App;
