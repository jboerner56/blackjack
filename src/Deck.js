import React from 'react';
class Deck extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            // will be filled from the _generateCards function
            deck: [],
            // cards/value the dealer gets for each game
            dealer: null,
            // cards/value for players have
            player: null,
            // will change to true if dealer ends hand with better cards
            gameOver: false,
            // for displaying any message needed during the game
            message: null
        };
    }
    _generateCards() {
        // setting up the deck of cards
        const suits = ['♦','♣','♥','♠'];
        const cards = [2,3,4,5,6,7,8,9,10,'J','Q','K','A'];
        const deck = [];
        // need loops to go through eack suit and card to create the complete deck.
        // loop to go through each card in a deck
        for(let i = 0; i<cards.length; i++){
            // loop to go through each suit in the deck
            for(let j=0; j<suits.length; j++){
                deck.push({number: cards[i], suit: suits[j]});
            }
        }
        return deck;
    }
    _randomCard(deck) {
        // sets the most recent deck back to the original variable name
        const currentDeck = deck;
        // gets a random index. math.floor() rounds down, Math.random()* currentDeck.length
        //                                               multiplies random # between 0 & 1 (Math.random) by
                                                    //     the current length of the deck to get a random card.
        const randomIndex = Math.floor(Math.random()* currentDeck.length);
        // variable to get a random card by the index from randomIndex
        const randomCard = currentDeck[randomIndex];
        // removes the card from the deck so it will not be shown again
        currentDeck.splice(randomIndex, 1);
        return {randomCard, currentDeck};
    }
}

export default Deck;