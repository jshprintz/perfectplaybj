import GetCards from "./GetCards";

const GetRandomCard = () => {

  const cards = GetCards();
  const randomCard = cards[Math.ceil(Math.random() * cards.length)];

  return randomCard;
};

// Export 
export default GetRandomCard;