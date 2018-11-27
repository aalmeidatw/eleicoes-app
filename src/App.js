import React, { Component } from 'react';
import './App.css';

import ThumbUser from './components/user_thumb'
import TextArea from './components/text_input_area'
import Button from './components/button'
import Votes from './components/votes'

import manIcon from './man_icon.png'
import womanIcon from './woman_icon.png'

const textAreaOptions = {
  label: "total text",
  placeHolder: "placeHolder text"
}

const icons = {
  man: manIcon,
  woman: womanIcon
}

const buttonOptions = {
  buttonText: "Click Here"
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      votes: 100,
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
      totalVotes: this.state.votes
    })
  }


  render() {
    return (
      <div className="App">
        <ThumbUser icon={icons.woman} />
        <TextArea {...textAreaOptions} onChange={this.setNewVoteState} />
        <Button {...buttonOptions} onClick={this.onClickGetVotes} />
        <Votes votes={this.state.totalVotes}  />
      </div>
    );
  }
}

export default App;
