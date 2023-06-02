// 1. POKER-DECK ERZEUGEN
// Ziel: Ein Pokerdeck zu erstellen (4 Farben, 13 Karten-Werte) => Matrix aus 52 Karten
// 2d-Matrix => nested loop
console.log("---------------------------------------------------------------");
console.log("----> START");
console.log("---------------------------------------------------------------");
console.log("");
console.log("1. POKER-DECK ERZEUGEN");
let createDeck = () => {
  let cards = [];
  let suits = ["s", "c", "h", "d"]; // spade, club, heart, diamond
  let ranks = ["2", "3", "4", "5", "6", "7", "8", "9", "T", "J", "Q", "K", "A"];
  for (let suitsCounter = 0; suitsCounter < suits.length; suitsCounter++) {
    for (let ranksCounter = 0; ranksCounter < ranks.length; ranksCounter++) {
      cards.push(ranks[ranksCounter] + suits[suitsCounter]); // creates arrays with 52 elements à la 2s, 3c, ...
      //   cards.push({ rank: ranks[ranksCounter], suit: suits[suitsCounter] }); // creates 52 objects à la { rank: 2, suit: s }
    }
  }
  return cards;
};
let sortedDeck = createDeck(); // create deck with 52 cards
console.log("Sorted deck:", sortedDeck);

// Deck:   [
//   '2s', '3s', '4s', '5s', '6s', '7s', '8s',
//   '9s', 'Ts', 'Js', 'Qs', 'Ks', 'As', '2c',
//   '3c', '4c', '5c', '6c', '7c', '8c', '9c',
//   'Tc', 'Jc', 'Qc', 'Kc', 'Ac', '2h', '3h',
//   '4h', '5h', '6h', '7h', '8h', '9h', 'Th',
//   'Jh', 'Qh', 'Kh', 'Ah', '2d', '3d', '4d',
//   '5d', '6d', '7d', '8d', '9d', 'Td', 'Jd',
//   'Qd', 'Kd', 'Ad'
// ]

//
console.log("\n \n \n ");

// 2. RANDOM CARD PICKER
// Ziel: Eine random Karte aus dem sortierten Deck nehmen

//    Random nr between 1-52:
//    Math.floor(Math.random() * 52 + 1);

// Pick one random card out of the deck:
console.log("2. RANDOM CARD PICKER");
let rndmCard = sortedDeck[Math.floor(Math.random() * (52 + 1))];
console.log("Deine zufällig gewählte Karte ist:", rndmCard); // Th ....

console.log("\n \n \n ");

//

// 3. SHUFFLE DECK
// Ziel: Das sortierte Pokerdeck in eine zufällige Reihenfolge bringen.

//    Überlegung:
//    Letzte Karte aus Ursprungs-Deck nehmen, und mit einer der anderen weiter vorne tauschen. Dann 2te etc, einmal durchiterieren.
console.log("3. SHUFFLE DECK");
let shuffle = (deck) => {
  for (i = deck.length - 1; i > 0; i--) {
    let rnd = [Math.floor(Math.random() * (i + 1))];
    [deck[rnd], deck[i]] = [deck[i], deck[rnd]]; // swap
  }
  shuffledDeck = deck;
  return shuffledDeck;
};
console.log("Shuffled:", shuffle(sortedDeck)); // shuffled bei jedem neu Laden => immer andere Reihenfolge
console.log("\n \n \n ");
// [
//   'Kd', '3h', 'Kc', 'Qd', '4d', '6d', 'Ks',
//   '4c', '5h', 'Qc', '6c', 'Kh', '8d', 'Td',
//   'Jh', '8c', 'Ac', 'Jd', '9d', '5c', '5d',
//   '5s', '7c', '7d', 'Ts', 'As', '9c', 'Js',
//   '6h', '4s', '7s', '9h', 'Ad', '2s', '7h',
//   '4h', 'Ah', '3d', '9s', '6s', '8h', '2h',
//   'Th', '2d', 'Qh', '2c', 'Tc', '3s', '3c',
//   '8s', 'Jc', 'Qs'
// ]

//

// 4. POKERHAND
// Ziel: Eine Pokerhand, bestehend aus den obersten fünf Karten des Decks auszugeben.
console.log("4. POKERHAND");
let hand = shuffle(sortedDeck).slice(0, 5).sort().reverse(); // z.B. [ 'Ts', 'Kc', 'Jh', 'Ah', '2h' ]

//  4.1 KARTEN-SYMBOLE ANZEIGEN: ♠ ♣ ♥ ♦
//  4.1.1 Ursprüngliche Lösung
let replaceSymbols1 = (hand) => {
  let handWithSymbols = [];
  for (let card of hand) {
    if (card[1] == "s") {
      card = card[0] + String.fromCharCode(9824); //   String.fromCharCode(9824) // ♠
      handWithSymbols.push(card);
    } else if (card[1] == "c") {
      card = card[0] + String.fromCharCode(9827); //   String.fromCharCode(9827) // ♣
      handWithSymbols.push(card);
    } else if (card[1] == "h") {
      card = card[0] + String.fromCharCode(9829); //   String.fromCharCode(9829) // ♥
      handWithSymbols.push(card);
    } else {
      card = card[0] + String.fromCharCode(9830); //   String.fromCharCode(9830) // ♦
      handWithSymbols.push(card);
    }
  }
  return handWithSymbols;
};
console.log("Deine Hand ist:", replaceSymbols1(hand)); // z.B. Deine Hand ist: [ 'K♥', 'K♣', 'J♥', '9♥', '4♥' ]

console.log("\n \n \n");

//

// 4.1.2 Alternative Lösung
let replaceSymbols2 = (input) => {
  let layouted = input
    .replaceAll("s", String.fromCharCode(9824))
    .replaceAll("c", String.fromCharCode(9827))
    .replaceAll("h", String.fromCharCode(9829))
    .replaceAll("d", String.fromCharCode(9830));
  return layouted;
};

//

// 5.1 JEDEM SPIELER ZWEI KARTEN GEBEN IN ABHÄNGIGKEIT DER SPIELERZAHL
console.log("5. ZWEI KARTEN PRO SPIELER");

let curDeck = shuffle(sortedDeck);
console.log("Deck mischen:", shuffle(sortedDeck), "\n");

let deal = (numPlayers) => {
  let playerHands = [];
  for (let i = 0; i < numPlayers; i++) {
    playerHands[i] = [curDeck[0], curDeck[1]];
    curDeck.shift();
    curDeck.shift();
  }
  console.log("Übriges Deck:", curDeck, "\n");
  return playerHands;
};

let fivePlayers = deal(5);
console.log("Ausgegebene Hände:", fivePlayers);

// BSP: URSPRÜNGLICHES DECK:
// [
//   '9h', 'As', '9d', '7s', '4c', '6h', 'Qs',
//   'Kd', 'Ks', '2s', '3h', '3d', 'Th', '5d',
//   '8s', '8c', '2c', '6d', 'Ad', 'Jc', 'Ac',
//   '9c', '5c', '2d', '7c', '6c', '3c', '7d',
//   'Jd', '9s', 'Tc', 'Jh', 'Js', 'Ts', 'Qd',
//   '6s', 'Qh', '5s', '2h', '5h', '3s', 'Td',
//   'Ah', '8d', '4h', '7h', 'Qc', '4d', 'Kc',
//   '4s', '8h', 'Kh'
// ]

// FÜNF SPIELER:
// [
//   [ '9h', 'As' ], //   SPIELER 1: card[0] + card[1]
//   [ '9d', '7s' ], //   SPIELER 2: card[2] + card[3]
//   [ '4c', '6h' ], //   SPIELER 3: card[4] + card[5]
//   [ 'Qs', 'Kd' ], //   SPIELER 4: card[6] + card[7]
//   [ 'Ks', '2s' ]  //   SPIELER 5: card[8] + card[9]
// ]

// URSPRÜNGLICHES DECK MINUS ERSTEN ZWÖLF KARTEN:
// [
//   '3h', '3d', 'Th', '5d', '8s', '8c',
//   '2c', '6d', 'Ad', 'Jc', 'Ac', '9c',
//   '5c', '2d', '7c', '6c', '3c', '7d',
//   'Jd', '9s', 'Tc', 'Jh', 'Js', 'Ts',
//   'Qd', '6s', 'Qh', '5s', '2h', '5h',
//   '3s', 'Td', 'Ah', '8d', '4h', '7h',
//   'Qc', '4d', 'Kc', '4s', '8h', 'Kh'
// ]

//

// 5.2 LAYOUTED OUTPUT VON 5.1
let displayHands = (handArray) => {
  let output = "";
  for (let j = 0; j < handArray.length; j++) {
    output += `Spieler${j + 1}: ${handArray[j].join(" ")}\n`;
  }
  return replaceSymbols2(output);
};
console.log("");
console.log("Gelayoutete Ausgabe:");
console.log(displayHands(fivePlayers));
