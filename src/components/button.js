import React from 'react'
import './button.css'

class Button extends React.Component {
  onClick = () => {
    this.props.onClick()
   //this.props.onClick(Math.random() * 100)
  }

  render() {
    return (
      <div>
        <button
          className="button"
          type="button"
          onClick={this.onClick}
        >
          {this.props.buttonText}
        </button>
      </div>
    )
  }
}
export default Button;
