// Build deck of cards
const suits = ["spades", "diamonds", "clubs", "hearts"];
const values = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K"];

// Build player decks
function buildDeck() {
    let fullDeck = new Array();

    for(let i = 0; i < suits.length; i++) {
        for(let j = 0; j < values.length; j++) {
            let card = {Value: values[j], Suit: suits[i]};

			fullDeck.push(card);
        }
    }
    return fullDeck
}

// Shuffle deck

// Divy cards to players

// Flip cards

// Compare cards

// Give losing card to winner

// 