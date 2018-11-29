import React from 'react'

class TextArea extends React.Component {

  onChange = (event) => {
    const value = Number(event.target.value)
    this.props.onChange(value)
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
