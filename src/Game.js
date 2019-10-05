import React, { Component } from 'react'

class Game extends Component {
	constructor(props){
    	super(props);
      	const newValuesArray = this.makeNewQuestion();
      	this.state= {
        	...newValuesArray
        };
    }
  
  	makeNewQuestion(){
    	const value1 = Math.floor(Math.random() * 100);
		const value2 = Math.floor(Math.random() * 100);
		const value3 = Math.floor(Math.random() * 100);
		const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
      
      	return ({
      		value1, value2, value3, proposedAnswer
      	});
    }
  
  	handleAnswer(answer){
    	const {value1, value2, value3, proposedAnswer} = this.state;
      	const corrAnswer = value1 + value2 + value3;
      
      	if (corrAnswer === proposedAnswer && answer) {
        	this.props.handleAnswer(true);
        } else if (corrAnswer !== proposedAnswer && !answer) {
        	this.props.handleAnswer(true)
        } else {
        	this.props.handleAnswer(false);
        }
      
      	const newValuesArray = this.makeNewQuestion();
      	this.setState({
        	...newValuesArray
        });
    }
  
  	render(){
      	return (
          <div>
            <div className="equation">
                <p className="text">{`${this.state.value1} + ${this.state.value2} + ${this.state.value3} = 													${this.state.proposedAnswer}`}</p>
            </div>
            <button onClick={() => this.handleAnswer(true)}>True</button>
            <button onClick={() => this.handleAnswer(false)}>False</button>
          </div>
		)
    }
}

export default Game;