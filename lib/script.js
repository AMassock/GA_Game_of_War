// Build deck of cards
let suit = ["hearts", "spades", "clubs", "diamonds"];
let rank = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];
let score = [14, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];

class Card {
    constructor(suit, rank, score) {
        this.suit = suit;
        this.rank = rank;
        this.score = score;
    }
}

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

        // dealHand(cards) {
        //     let handOne = new Deck();
        //     let handTwo = new Deck();
        //     this.cards = cards;
        
        //     for(let i = 0; i < cards.length; i++) {
        //         if(i % 2 == 0) {
        //             handOne.cards.push(cards[i]);
        //         } else {
        //             handTwo.cards.push(cards[i]);
        //         }
        //     }
        //     return {handOne, handTwo};
        // }
    }

class Player {
    constructor() {
        this.cards = deckOne.cards;
        this.deck = [];
        this.discard = [];
    }

    playerDeal() {

        for(let i = 0; i < this.cards.length; i++) {

            if(i % 2) {
                playerOne.deck.push(this.deck[i]);
            } else {
                // console.log("we made it here")
                playerTwo.deck.push(this.deck[i]);
            }

        }

    }
}

let deckOne = new Deck();
deckOne.buildCards(suit, rank, score)
// deckOne.dealHand(deckOne.cards)

let playerOne = new Player();
let playerTwo = new Player();
playerOne.playerDeal(deckOne.cards);
playerTwo.playerDeal(deckOne.cards);
    
// Create function to divy cards to players
// player should receive half the deck
// function dealHand(deckOne) {
//     let handOne = new Deck();
//     let handTwo = new Deck();

//     for(let i = 0; i < deckOne.cards; i++) {
//         if(i % 2 == 0) {
//             handOne.deckOne.cards.push(deckOne.cards[i]);
//         } else {
//             handTwo.deckOne.cards.push(deckOne.cards[i]);
//         }
//     }
//     return {handOne, handTwo};
// }
// deckOne.dealHand(deckOne.cards);

// Shuffle deck
// For 850 times swap the place of two cards to create 
// a seemingly random array
function shuffleDeck(deckOne) {

    for(let i = 0; i < 850; i++) {
        let posOne = Math.floor(Math.random() * deckOne.length);
        let posTwo = Math.floor(Math.random() * deckOne.length);
        let temp = deckOne[posOne];

        deckOne[posOne] = deckOne[posTwo];
        deckOne[posTwo] = temp;
    }
 }

 shuffleDeck(deckOne.cards);
//  console.log(dealHand(deckOne.cards));

// Flip cards

// Compare cards

// Give losing card to winner

// 