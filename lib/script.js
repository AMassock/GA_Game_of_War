// Build deck of cards
let suit = ["hearts", "spades", "clubs", "diamonds"];
let rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let score = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let comparedCards = [];
let warDeck = [];

// Use isWar boolean to trigger war function
let isWar = false;

class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
};

class Deck {
    constructor() {
        this.cards = [];
    }

    buildCards(suit, rank, score) {

        // Using nested for loops so each suit of card has each value card
        // and assign to a new fullDeck array
        for(let i = 0; i < suit.length; i++) { 
    
            for(let j = 0; j < rank.length; j++) {
                let card = new Card(rank[j], suit[i], score[j]);
    
                this.cards.push(card);
                }
            }
            return this.cards;
        }
    };

class Player {
    constructor() {
        this.cards = deckOne.cards;
        this.deck = [];
        this.discard = [];
    }

    // Create method to divy cards to players
    // player should receive half the deck
    playerDeal() {

        for(let i = 0; i < 26; i++) {

            if(i % 2 == 0) {
                playerOne.deck.push(this.cards.pop([i]));
            } else {
                // console.log("we made it here")
                playerTwo.deck.push(this.cards.pop([i]));
            }

        }

    }
};

let deckOne = new Deck();
deckOne.buildCards(suit, rank, score)
// deckOne.dealHand(deckOne.cards)

// Shuffle deck
// For 850 times swap the place of two cards to create 
// a seemingly random array
// function shuffleDeck(deckOne) {

//     for(let i = 0; i < 850; i++) {
//         let posOne = Math.floor(Math.random() * deckOne.length);
//         let posTwo = Math.floor(Math.random() * deckOne.length);
//         let temp = deckOne[posOne];

//         deckOne[posOne] = deckOne[posTwo];
//         deckOne[posTwo] = temp;
//     }
//  };

function shuffleDeck(allCards) {

    for(let i = 0; i < 850; i++) {
        let posOne = Math.floor(Math.random() * allCards.length);
        let posTwo = Math.floor(Math.random() * allCards.length);
        let temp = allCards[posOne];

        allCards[posOne] = allCards[posTwo];
        allCards[posTwo] = temp;
    }
 };

 shuffleDeck(deckOne.cards);
//  console.log(dealHand(deckOne.cards));

let playerOne = new Player();
let playerTwo = new Player();
playerOne.playerDeal(deckOne.cards);
playerTwo.playerDeal(deckOne.cards);

// Flip cards
function flipCards(playerOne, playerTwo) {
    let cardOne = playerOne.deck.shift();
    let cardTwo = playerTwo.deck.shift();

    return comparedCards.push(cardOne, cardTwo)
};

flipCards(playerOne, playerTwo);

// Compare cards
function compare(comparedCards) {

    if(comparedCards[0].score > comparedCards[1].score) {

        console.log(`Player One wins with ${Object.values(comparedCards[0])}`);
        playerOne.discard.push(comparedCards[0], comparedCards[1]);
        comparedCards.length = 0;
        flipCards(playerOne, playerTwo);

    } else if(comparedCards[0].score < comparedCards[1].score) {

        console.log(`Player Two wins with ${Object.values(comparedCards[1])}`);
        playerTwo.discard.push(comparedCards[0], comparedCards[1]);
        comparedCards.length = 0;
        flipCards(playerOne, playerTwo);

    } else if(comparedCards[0].score == comparedCards[1].score) {

        console.log(`Player One and Player Two tie with ${Object.values(comparedCards[0])}`);
        console.log(`It's WAR!`);
        // warDeck.push(comparedCards[0], comparedCards[1]);
        isWar = true;

    }
};

while(playerOne.deck != 0 || playerTwo.deck != 0) {
    flipCards(playerOne, playerTwo);
    compare(comparedCards);

    if((playerOne.deck.length == 0 && playerTwo.deck.length == 0) && (playerOne.discard.length > 0 && playerTwo.discard.length > 0)) {
        console.log('reshuffle discards');
        shuffleDeck(playerOne.discard);
        shuffleDeck(playerTwo.discard);
        // playerOne.deck.push(reshuffleOne);
        // playerTwo.deck.push(reshuffleTwo);
        // for(let i = 0; ((i < playerOne.discard > 0) && (i < playerTwo.discard > 0)); i++) {
        //     playerOne.deck.push(playerOne.discard.pop());
        //     playerTwo.deck.push(playerTwo.discard.pop());
        // }
        while((playerOne.discard.length > 0) && (playerTwo.discard.length > 0)) {
            playerOne.deck.push(playerOne.discard.pop());
            playerTwo.deck.push(playerTwo.discard.pop());
        }
    }
}

// Give losing card to winner

// 