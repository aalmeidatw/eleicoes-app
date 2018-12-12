import React, { Component } from 'react';
import './App.css';

import Votes from './components/votes'
import Candidate from './components/candidate'

import manIcon from './man_icon.png'
import womanIcon from './woman_icon.png'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: 0,
      totalVotes: 0,
    }
  }

  setNewVoteState = (n) => {
    this.setState({
      votes: n
    })
  }
  
  onClickGetVotes = () => {
    this.setState({
      totalVotes: this.state.votes + this.state.totalVotes
    })
  }

  render() {
    return (
      <div className="App">
        <Candidate 
          name={'Osvaldo da Silva'}
          icon={manIcon}
          OnChange={this.setNewVoteState}
          onClick={this.onClickGetVotes}
        />

      <br />

        <Candidate 
          name={'Osvaldo da Silva'}
          icon={manIcon}
          OnChange={this.setNewVoteState}
          onClick={this.onClickGetVotes}
        />

      <br />

        <Votes votes={this.state.totalVotes}  />
      </div>
    );
  }
}

export default App;
