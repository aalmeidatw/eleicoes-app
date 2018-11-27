import React from 'react'

class TextArea extends React.Component {

  onChange = (event) => {
    this.props.onChange(event.target.value)
  }

  render() {
    return (
      <div>
        <label> {this.props.label} </label>
        <input 
          type="text" 
          onChange={this.onChange} 
          placeholder={this.props.placeHolder} 
         >
      </input>
      </div>
    )
  }
}

export default TextArea;
