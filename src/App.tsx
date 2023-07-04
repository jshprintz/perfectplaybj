import React from "react";
import styled from "styled-components";
import DealerHand from "./Components/DealerHand";
import PlayerHand from "./Components/PlayerHand";

// TODO:
// Part One:
// 1. Add Redux
// 2. Add a "Game" component that will hold the state of the game
// 3. Create player data that will hold the player's hand and score
// 4. Create dealer data that will hold the dealer's hand and score
// 5. Create a deck of cards, and a discard pile. When the deck is empty, shuffle the discard pile and use that as the deck. Incorporate up to ten decks.
// 6. Build the relationship of game play between the player and the dealer

// Part Two:
// 1. Add a statistics system
// 2. Readjust the UI to be more user friendly
// 3. Add some light animations
// 4. Make everything mobile friendly

// Part Three:
// 1. Add a currency system
// 2. Add a betting system
// 3. Add a win/loss system

// Part Four:
// 1. Add a backend
// 2. Add a database
// 3. Add a login system
// 4. Add a leaderboard

const App = () => {
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
};

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
