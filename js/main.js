
// black jack game


// Card variables for the entire deck

let suits = ["Hearts", "Clubs", "Spades", "Diamonds"];
    values = [ 
        "Ace", "Two", "Three", "Four",
        "Five", "Six", "Seven", "Eight",
        "Nine", "Ten", "Jack", "Queen", "King"
    ];

// Variables for the page

let textArea = document.getElementById("text-area");
    newGameButton = document.getElementById("new-game-button");
    hitButton = document.getElementById("hit-button");
    stayButton = document.getElementById("stay-button");

// Game Variables and conditions
 
let gameStarted = false,
    gameOver = false,
    playerWon = false,
    dealerCards = [],
    playerCards = [],
    dealerScore = 0,
    playerScore = 0,
    deck = [];

hitButton.style.display = 'none';
stayButton.style.display = 'none';
showStatus();

newGameButton.addEventListener('click', function(){

    gameStarted = true;
    gameOver = false;
    playerWon = false; 

    deck = createDeck();
    shuffleDeck(deck);
    dealerCards = [getNextCard(), getNextCard()];
    playerCards = [getNextCard(), getNextCard()];

    newGameButton.style.display = 'none';
    hitButton.style.display = 'inline';
    stayButton.style.display = 'inline';
    showStatus();
});


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

function shuffleDeck(deck) {
    for (let i = 0; i < deck.length; i++) {
        let swapIdx = Math.trunc(Math.random() * deck.length);
        let tmp = deck[swapIdx];
        deck[swapIdx] = deck[i];
        deck[i] = tmp;
    }
}

function getCardString(card) {
    return card.value + " of " + card.suit;
}

function getNextCard() {
    return deck.shift();
}

function showStatus() {
    if (!gameStarted) {
        textArea.innerText = "Welcome to Black Jack";
        return; 
    }

    for (let i = 0; i < deck.length; i++) {
        textArea.innerText += "\n" + getCardString(deck[i]);
    }

}






