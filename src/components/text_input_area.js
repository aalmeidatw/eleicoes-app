import React from 'react'

class TextArea extends React.Component {
  render() {
    return (
      <div>
        <label> {this.props.label} </label>
        <input type="text" placeholder={this.props.placeHolder} ></input>
      </div>
    )
  }
}

export default TextArea;
