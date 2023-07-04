import GetCards from "./GetCards";

type Card = {
  randomCard: { source: string; value: string };
  index: number;
}

const GetRandomCard = () => {
  const cards = GetCards();
  const randomNum = Math.floor(Math.random() * (cards.length - 1)) + 1;
  const randomCard = cards[randomNum];
  const card: Card = {randomCard: randomCard, index: randomNum};
  return card;
};

// Export
export default GetRandomCard;
