import React from 'react'

import './user_thumb.css'

class ThumbUser extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.icon} alt="avatar icon"  />
      </div>
   )
  }
}

export default ThumbUser;
