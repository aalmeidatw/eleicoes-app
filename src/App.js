import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ThumbUser from './components/user_thumb'
import TextArea from './components/text_input_area'


class App extends Component {
  render() {
    return (
      <div className="App">
        <ThumbUser />
        <TextArea />
      </div>
    );
  }
}

export default App;
