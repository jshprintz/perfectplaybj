import GetCards from "./GetCards";

type CardData = {
  source: string;
  name: string;
  value: number;
};

type Card = {
  cardData: CardData;
  index: number;
};

const GetRandomCard = () => {
  // Gets all the cards
  const cards: CardData[] = GetCards();
  // Gets a random number between 1 and the length of the cards array
  const randomNum: number = Math.floor(Math.random() * (cards.length - 1)) + 1;
  // Gets the card at the random number
  const randomCard: CardData = cards[randomNum];
  // Creates a card object with the card data and the index
  const card: Card = { cardData: randomCard, index: randomNum };
  // Returns the card object
  return card;
};

// Export
export default GetRandomCard;
