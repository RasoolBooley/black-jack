
// black jack game

let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
    values = [ 
        "Ace", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight",
        "Nine", "Jack", "Queen", "King"
    ];


function createDeck() {

    let deck = [];

    for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++ ) {
    
        for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++ ){
            let card = {
                suit: suits[suitsIdx],
                value: values[valuesIdx]
            };
            deck.push( card );
        }
    }

    return deck
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getNextCard() {
    return deck.shift();
}

let deck = createDeck();


    playerCards = [ getNextCard(), getNextCard()];

console.log("welcome to the Black Jack!")

console.log("You are Dealt")
console.log("    " + getCardString(playerCards[0]) )
console.log("    " + getCardString(playerCards[1]) )





