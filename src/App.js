import React, { Component } from 'react';
import './App.css';

import ThumbUser from './components/user_thumb'
import TextArea from './components/text_input_area'
import Button from './components/button'

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

class App extends Component {
  render() {
    return (
      <div className="App">
        <ThumbUser icon={icons.woman} />
        <TextArea {...textAreaOptions} />
        <Button />
      </div>
    );
  }
}

export default App;
