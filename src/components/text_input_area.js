import React from 'react'

class TextArea extends React.Component {

  onChange = (event) => {
    const value = Number(event.target.value)
    this.props.onChange(value)
  }

  render() {
    return (
      <div>
        <label> Insira a quatidade de votos:  </label>
        <input 
          type="text" 
          onChange={this.onChange} 
          placeholder='votos aqui' 
         >
      </input>
      </div>
    )
  }
}

export default TextArea;
