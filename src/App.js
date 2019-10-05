import React, { Component } from 'react';
import Game from './Game';
import Score from './Score';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  state= {
  	numQuestions: 0,
    numCorrect: 0
  }

   handleAnswer = (answer) => {
  	if(answer) {
    	this.setState(currState => ({
            numCorrect: currState.numCorrect + 1
        }));
    } 
     
  	this.setState(currState => ({
       numQuestions: currState.numQuestions + 1
    }));
  }
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
    	  <Game handleAnswer={this.handleAnswer}/>
		  <Score numCorrect={this.state.numCorrect} numQuestions={this.state.numQuestions}/>
        </div>
      </div>
    );
  }
}

export default App;
