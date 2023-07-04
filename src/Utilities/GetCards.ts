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
    { source: back, value: "back" },
    { source: twoDiamonds, value: "2d" },
    { source: twoClubs, value: "2c" },
    { source: twoHearts, value: "2h" },
    { source: twoSpades, value: "2s" },
    { source: threeDiamonds, value: "3d" },
    { source: threeClubs, value: "3c" },
    { source: threeHearts, value: "3h" },
    { source: threeSpades, value: "3s" },
    { source: fourDiamonds, value: "4d" },
    { source: fourClubs, value: "4c" },
    { source: fourHearts, value: "4h" },
    { source: fourSpades, value: "4s" },
    { source: fiveDiamonds, value: "5d" },
    { source: fiveClubs, value: "5c" },
    { source: fiveHearts, value: "5h" },
    { source: fiveSpades, value: "5s" },
    { source: sixDiamonds, value: "6d" },
    { source: sixClubs, value: "6c" },
    { source: sixHearts, value: "6h" },
    { source: sixSpades, value: "6s" },
    { source: sevenDiamonds, value: "7d" },
    { source: sevenClubs, value: "7c" },
    { source: sevenHearts, value: "7h" },
    { source: sevenSpades, value: "7s" },
    { source: eightDiamonds, value: "8d" },
    { source: eightClubs, value: "8c" },
    { source: eightHearts, value: "8h" },
    { source: eightSpades, value: "8s" },
    { source: nineDiamonds, value: "9d" },
    { source: nineClubs, value: "9c" },
    { source: nineHearts, value: "9h" },
    { source: nineSpades, value: "9s" },
    { source: tenDiamonds, value: "10d" },
    { source: tenClubs, value: "10c" },
    { source: tenHearts, value: "10h" },
    { source: tenSpades, value: "10s" },
    { source: jackDiamonds, value: "jd" },
    { source: jackClubs, value: "jc" },
    { source: jackHearts, value: "jh" },
    { source: jackSpades, value: "js" },
    { source: queenDiamonds, value: "qd" },
    { source: queenClubs, value: "qc" },
    { source: queenHearts, value: "qh" },
    { source: queenSpades, value: "qs" },
    { source: kingDiamonds, value: "kd" },
    { source: kingClubs, value: "kc" },
    { source: kingHearts, value: "kh" },
    { source: kingSpades, value: "ks" },
    { source: aceDiamonds, value: "ad" },
    { source: aceClubs, value: "ac" },
    { source: aceHearts, value: "ah" },
    { source: aceSpades, value: "as" },
  ];

  return cardData;
};

// Export
export default GetCards;
