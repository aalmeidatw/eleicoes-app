import React from 'react'
import './button.css'

class Button extends React.Component {
  render() {
    return (
      <div>
        <button className="button" type="button"> {this.props.buttonText} </button>
      </div>
    )
  }
}
export default Button;
