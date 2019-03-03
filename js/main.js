
// black jack game

let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
    values = [ 
        "Ace", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight",
        "Nine", "Jack", "Queen", "King"
    ];

let deck = [];

for (let suitsIdx = 0; suitsIdx < suits.length; suitsIdx++ ) {
    
    for (let valuesIdx = 0; valuesIdx < values.length; valuesIdx++ ){
        deck.push(values[valuesIdx] + " of " + suits[suitsIdx]);
    }
}

    playerCards = [
        deck[0],
        deck[1],
        deck[2]
        
    ];

console.log("welcome to the Black Jack!")

console.log("You are Dealt")
console.log("    " + playerCards[0])
console.log("    " + playerCards[2])


