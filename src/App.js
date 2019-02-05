import React, { Component } from 'react';
import './App.css';
import GameComponent from './GameComponent';
import SquareComponent from './SquareComponent';
import BoardComponent from './BoardComponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <BoardComponent/>
        </header>
      </div>
    );
  }
}

export default App;