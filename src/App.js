import React from 'react';
import Player from './Player';
import Deck from './Deck';
import Dealer from './Dealer';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            player: null,
            dealer: null
        }
    }

    _getWinner(Dealer, Player) {
        if(Dealer.count > Player.count) {
            return 'Dealer';
        } else if (Dealer.count < Player.count){
            return 'Player';
        } else {
            return 'Tie, It\'s a push';
        }
    }
    _getCount(cards) {
        const rearrange = [];
        cards.forEach(card => {
            if(card.number === 'A') {
                rearrange.push(card);
            } else {
                rearrange.unshift(card);
            }
        });
    }
}
export default App;
