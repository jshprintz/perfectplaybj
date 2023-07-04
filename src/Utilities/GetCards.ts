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

  const cardData = {
    back: { source: back, value: "back" },
    twoDiamonds: { source: twoDiamonds, value: "2d" },
    twoClubs: { source: twoClubs, value: "2c" },
    twoHearts: { source: twoHearts, value: "2h" },
    twoSpades: { source: twoSpades, value: "2s" },
    threeDiamonds: { source: threeDiamonds, value: "3d" },
    threeClubs: { source: threeClubs, value: "3c" },
    threeHearts: { source: threeHearts, value: "3h" },
    threeSpades: { source: threeSpades, value: "3s" },
    fourDiamonds: { source: fourDiamonds, value: "4d" },
    fourClubs: { source: fourClubs, value: "4c" },
    fourHearts: { source: fourHearts, value: "4h" },
    fourSpades: { source: fourSpades, value: "4s" },
    fiveDiamonds: { source: fiveDiamonds, value: "5d" },
    fiveClubs: { source: fiveClubs, value: "5c" },
    fiveHearts: { source: fiveHearts, value: "5h" },
    fiveSpades: { source: fiveSpades, value: "5s" },
    sixDiamonds: { source: sixDiamonds, value: "6d" },
    sixClubs: { source: sixClubs, value: "6c" },
    sixHearts: { source: sixHearts, value: "6h" },
    sixSpades: { source: sixSpades, value: "6s" },
    sevenDiamonds: { source: sevenDiamonds, value: "7d" },
    sevenClubs: { source: sevenClubs, value: "7c" },
    sevenHearts: { source: sevenHearts, value: "7h" },
    sevenSpades: { source: sevenSpades, value: "7s" },
    eightDiamonds: { source: eightDiamonds, value: "8d" },
    eightClubs: { source: eightClubs, value: "8c" },
    eightHearts: { source: eightHearts, value: "8h" },
    eightSpades: { source: eightSpades, value: "8s" },
    nineDiamonds: { source: nineDiamonds, value: "9d" },
    nineClubs: { source: nineClubs, value: "9c" },
    nineHearts: { source: nineHearts, value: "9h" },
    nineSpades: { source: nineSpades, value: "9s" },
    tenDiamonds: { source: tenDiamonds, value: "10d" },
    tenClubs: { source: tenClubs, value: "10c" },
    tenHearts: { source: tenHearts, value: "10h" },
    tenSpades: { source: tenSpades, value: "10s" },
    jackDiamonds: { source: jackDiamonds, value: "Jd" },
    jackClubs: { source: jackClubs, value: "Jc" },
    jackHearts: { source: jackHearts, value: "Jh" },
    jackSpades: { source: jackSpades, value: "Js" },
    queenDiamonds: { source: queenDiamonds, value: "Qd" },
    queenClubs: { source: queenClubs, value: "Qc" },
    queenHearts: { source: queenHearts, value: "Qh" },
    queenSpades: { source: queenSpades, value: "Qs" },
    kingDiamonds: { source: kingDiamonds, value: "Kd" },
    kingClubs: { source: kingClubs, value: "Kc" },
    kingHearts: { source: kingHearts, value: "Kh" },
    kingSpades: { source: kingSpades, value: "Ks" },
    aceDiamonds: { source: aceDiamonds, value: "Ad" },
    aceClubs: { source: aceClubs, value: "Ac" },
    aceHearts: { source: aceHearts, value: "Ah" },
    aceSpades: { source: aceSpades, value: "As" },
    allCardsSource: [
      back,
      twoDiamonds,
      twoClubs,
      twoHearts,
      twoSpades,
      threeDiamonds,
      threeClubs,
      threeHearts,
      threeSpades,
      fourDiamonds,
      fourClubs,
      fourHearts,
      fourSpades,
      fiveDiamonds,
      fiveClubs,
      fiveHearts,
      fiveSpades,
      sixDiamonds,
      sixClubs,
      sixHearts,
      sixSpades,
      sevenDiamonds,
      sevenClubs,
      sevenHearts,
      sevenSpades,
      eightDiamonds,
      eightClubs,
      eightHearts,
      eightSpades,
      nineDiamonds,
      nineClubs,
      nineHearts,
      nineSpades,
      tenDiamonds,
      tenClubs,
      tenHearts,
      tenSpades,
      jackDiamonds,
      jackClubs,
      jackHearts,
      jackSpades,
      queenDiamonds,
      queenClubs,
      queenHearts,
      queenSpades,
      kingDiamonds,
      kingClubs,
      kingHearts,
      kingSpades,
      aceDiamonds,
      aceClubs,
      aceHearts,
      aceSpades,
    ],
  };

  return cardData;
};

// Export
export default GetCards;
