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
        
    }
}

export default Deck;