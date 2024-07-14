// JavaScript Program to Shuffle Deck of Cards

const cardTypes = ["Spades", "Diamonds", "Club", "Heart"];
const cardValues = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King",
];

// emopty deck array
const deck = [];

// Create deck of 52 cards
cardTypes.forEach((type) => {
  cardValues.forEach((value) => {
    deck.push({ Value: value, CardType: type });
  });
});

// Create 52 cards
console.log("All 52 Cards \n", deck);

// Shuffle the cards
for (let i = 0; i < deck.length; i++) {
  let j = Math.floor(Math.random() * i);
  // destruction can be used like this for shuffling
  [deck[i], deck[j]] = [deck[j], deck[i]];
}

console.log("All 52 Cards after shuffling \n", deck);

console.log("The first FIVE cards\n");

// slice will return an array, to form readable format used forEach here
deck.slice(0, 5).forEach((card) => {
  console.log(`${card.Value} of ${card.CardType}`);
});
