import GetCards from "./GetCards";

const GetRandomCard = () => {
  const cards = GetCards();
  const randomNum = Math.floor(Math.random() * (cards.allCardsSource.length - 1)) + 1;
  const randomCard = cards.allCardsSource[randomNum];
  return randomCard;
};

// Export
export default GetRandomCard;
