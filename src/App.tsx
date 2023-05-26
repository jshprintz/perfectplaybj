import React from 'react';
import styled from 'styled-components'

function App() {
  return (
    <Container >
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
  justify-content: center;

  background-color: green;
`



// Export
export default App;
