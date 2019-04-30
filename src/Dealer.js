import React from 'react';
import Deck from './Deck';
class Dealer extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            dealer: null,
            deck: []
        }
    }
    dealerDraw(dealer, deck) {
        const {randomCard, currentDeck} = props._randomCard(deck);
    }
}
export default Dealer;