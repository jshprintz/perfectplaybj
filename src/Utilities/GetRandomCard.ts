import GetCards from "./GetCards";

const GetRandomCard = () => {
  const cards = GetCards();
  const randomNum = Math.floor(Math.random() * (cards.length - 1)) + 1;

  const randomCard = cards[randomNum];

  console.log("RANDOM NUM:", randomNum);

  return randomCard;
};

// Export
export default GetRandomCard;