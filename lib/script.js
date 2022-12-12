// Build deck of cards
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Using nested for loops so each suit of card has each value card
// and assign to a new fullDeck array
let fullDeck = new Array();
function buildDeck() {

    for(let i = 0; i < suits.length; i++) { 

        for(let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};

			fullDeck.push(card);
        }
    }
    return fullDeck;
}

buildDeck();
// Shuffle deck
function shuffleDeck(fullDeck) {
    for(let i = 0; i < 850; i++) {
        let posOne = Math.floor(Math.random() * fullDeck.length);
        let posTwo = Math.floor(Math.random() * fullDeck.length);
        let temp = fullDeck[posOne];

        fullDeck[posOne] = fullDeck[posTwo];
        fullDeck[posTwo] = temp;
    }
 }

 shuffleDeck(fullDeck);

// Divy cards to players

// Flip cards

// Compare cards

// Give losing card to winner

// 