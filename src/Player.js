import React from 'react';
import Deck from './Deck';
import App from './App';
class Player extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            player: null,
            deck: [],
            gameOver: false,
            message: ''
        }
    }
    hit() {
        if(!this.state.gameOver){
            if(Player.count > 21) {
                this.setState({Player, gameOver:true, message: 'You busted'});
            } else {
                this.setState({Deck: props.currentDeck, Player});
            }
        } else {
            this.setState({message: 'The game is over. Please start a new game'});
        }
    }
}
export default Player;