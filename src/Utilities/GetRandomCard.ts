import GetCards from "./GetCards";

type Card = {
  cardData: { source: string; name: string; value: number };
  index: number;
};

const GetRandomCard = () => {
  const cards = GetCards();
  const randomNum = Math.floor(Math.random() * (cards.length - 1)) + 1;
  const randomCard = cards[randomNum];
  const card: Card = { cardData: randomCard, index: randomNum };
  return card;
};

// Export
export default GetRandomCard;
