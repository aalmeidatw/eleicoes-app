import React from 'react'

class ThumbUser extends React.Component {
  render() {
    return (
      <div>
        <img src={this.props.icon} alt="avatar" height="100" width="100" />
      </div>
    )
  }
}

export default ThumbUser;
