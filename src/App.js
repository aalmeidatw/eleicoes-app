import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import ThumbUser from './components/user_thumb'

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThumbUser />
      </div>
    );
  }
}

export default App;
