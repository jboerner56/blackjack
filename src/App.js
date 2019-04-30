import React from 'react';
import Player from './Player';
import Deck from './Deck';
class App extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            deck: [],
            player: null,
        }
    }

}
export default App;
