import React from 'react'
import './button.css'

class Button extends React.Component {
  onClick = () => {
    this.props.onClick()
  }

  render() {
    return (
      <div>
        <button
          className="button"
          type="button"
          onClick={this.onClick}
        >
          Clique Aqui!
        </button>
      </div>
    )
  }
}
export default Button;
