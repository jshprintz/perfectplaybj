// Note: Get Cards from Assets
import back from "../Assets/cards/cardBackBlue.png";
import twoDiamonds from "../Assets/cards/cardDiamonds_2.png";
import twoClubs from "../Assets/cards/cardClubs_2.png";
import twoHearts from "../Assets/cards/cardHearts_2.png";
import twoSpades from "../Assets/cards/cardSpades_2.png";
import threeDiamonds from "../Assets/cards/cardDiamonds_3.png";
import threeClubs from "../Assets/cards/cardClubs_3.png";
import threeHearts from "../Assets/cards/cardHearts_3.png";
import threeSpades from "../Assets/cards/cardSpades_3.png";
import fourDiamonds from "../Assets/cards/cardDiamonds_4.png";
import fourClubs from "../Assets/cards/cardClubs_4.png";
import fourHearts from "../Assets/cards/cardHearts_4.png";
import fourSpades from "../Assets/cards/cardSpades_4.png";
import fiveDiamonds from "../Assets/cards/cardDiamonds_5.png";
import fiveClubs from "../Assets/cards/cardClubs_5.png";
import fiveHearts from "../Assets/cards/cardHearts_5.png";
import fiveSpades from "../Assets/cards/cardSpades_5.png";
import sixDiamonds from "../Assets/cards/cardDiamonds_6.png";
import sixClubs from "../Assets/cards/cardClubs_6.png";
import sixHearts from "../Assets/cards/cardHearts_6.png";
import sixSpades from "../Assets/cards/cardSpades_6.png";
import sevenDiamonds from "../Assets/cards/cardDiamonds_7.png";
import sevenClubs from "../Assets/cards/cardClubs_7.png";
import sevenHearts from "../Assets/cards/cardHearts_7.png";
import sevenSpades from "../Assets/cards/cardSpades_7.png";
import eightDiamonds from "../Assets/cards/cardDiamonds_8.png";
import eightClubs from "../Assets/cards/cardClubs_8.png";
import eightHearts from "../Assets/cards/cardHearts_8.png";
import eightSpades from "../Assets/cards/cardSpades_8.png";
import nineDiamonds from "../Assets/cards/cardDiamonds_9.png";
import nineClubs from "../Assets/cards/cardClubs_9.png";
import nineHearts from "../Assets/cards/cardHearts_9.png";
import nineSpades from "../Assets/cards/cardSpades_9.png";
import tenDiamonds from "../Assets/cards/cardDiamonds_10.png";
import tenClubs from "../Assets/cards/cardClubs_10.png";
import tenHearts from "../Assets/cards/cardHearts_10.png";
import tenSpades from "../Assets/cards/cardSpades_10.png";
import jackDiamonds from "../Assets/cards/cardDiamonds_J.png";
import jackClubs from "../Assets/cards/cardClubs_J.png";
import jackHearts from "../Assets/cards/cardHearts_J.png";
import jackSpades from "../Assets/cards/cardSpades_J.png";
import queenDiamonds from "../Assets/cards/cardDiamonds_Q.png";
import queenClubs from "../Assets/cards/cardClubs_Q.png";
import queenHearts from "../Assets/cards/cardHearts_Q.png";
import queenSpades from "../Assets/cards/cardSpades_Q.png";
import kingDiamonds from "../Assets/cards/cardDiamonds_K.png";
import kingClubs from "../Assets/cards/cardClubs_K.png";
import kingHearts from "../Assets/cards/cardHearts_K.png";
import kingSpades from "../Assets/cards/cardSpades_K.png";
import aceDiamonds from "../Assets/cards/cardDiamonds_A.png";
import aceClubs from "../Assets/cards/cardClubs_A.png";
import aceHearts from "../Assets/cards/cardHearts_A.png";
import aceSpades from "../Assets/cards/cardSpades_A.png";

const GetCards = () => {
  const cardData = [
    { source: back, name: "back", value: 0 },
    { source: twoDiamonds, name: "2d", value: 2 },
    { source: twoClubs, name: "2c", value: 2 },
    { source: twoHearts, name: "2h", value: 2 },
    { source: twoSpades, name: "2s", value: 2 },
    { source: threeDiamonds, name: "3d", value: 3 },
    { source: threeClubs, name: "3c", value: 3 },
    { source: threeHearts, name: "3h", value: 3 },
    { source: threeSpades, name: "3s", value: 3 },
    { source: fourDiamonds, name: "4d", value: 4 },
    { source: fourClubs, name: "4c", value: 4 },
    { source: fourHearts, name: "4h", value: 4 },
    { source: fourSpades, name: "4s", value: 4 },
    { source: fiveDiamonds, name: "5d", value: 5 },
    { source: fiveClubs, name: "5c", value: 5 },
    { source: fiveHearts, name: "5h", value: 5 },
    { source: fiveSpades, name: "5s", value: 5 },
    { source: sixDiamonds, name: "6d", value: 6 },
    { source: sixClubs, name: "6c", value: 6 },
    { source: sixHearts, name: "6h", value: 6 },
    { source: sixSpades, name: "6s", value: 6 },
    { source: sevenDiamonds, name: "7d", value: 7 },
    { source: sevenClubs, name: "7c", value: 7 },
    { source: sevenHearts, name: "7h", value: 7 },
    { source: sevenSpades, name: "7s", value: 7 },
    { source: eightDiamonds, name: "8d", value: 8 },
    { source: eightClubs, name: "8c", value: 8 },
    { source: eightHearts, name: "8h", value: 8 },
    { source: eightSpades, name: "8s", value: 8 },
    { source: nineDiamonds, name: "9d", value: 9 },
    { source: nineClubs, name: "9c", value: 9 },
    { source: nineHearts, name: "9h", value: 9 },
    { source: nineSpades, name: "9s", value: 9 },
    { source: tenDiamonds, name: "10d", value: 10 },
    { source: tenClubs, name: "10c", value: 10 },
    { source: tenHearts, name: "10h", value: 10 },
    { source: tenSpades, name: "10s", value: 10 },
    { source: jackDiamonds, name: "jd", value: 10 },
    { source: jackClubs, name: "jc", value: 10 },
    { source: jackHearts, name: "jh", value: 10 },
    { source: jackSpades, name: "js", value: 10 },
    { source: queenDiamonds, name: "qd", value: 10 },
    { source: queenClubs, name: "qc", value: 10 },
    { source: queenHearts, name: "qh", value: 10 },
    { source: queenSpades, name: "qs", value: 10 },
    { source: kingDiamonds, name: "kd", value: 10 },
    { source: kingClubs, name: "kc", value: 10 },
    { source: kingHearts, name: "kh", value: 10 },
    { source: kingSpades, name: "ks", value: 10 },
    { source: aceDiamonds, name: "ad", value: 11 },
    { source: aceClubs, name: "ac", value: 11 },
    { source: aceHearts, name: "ah", value: 11 },
    { source: aceSpades, name: "as", value: 11 },
  ];

  return cardData;
};

// Export
export default GetCards;
