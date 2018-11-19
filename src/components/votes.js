import React from 'react'

class Votes extends React.Component {
  render() {
    return(
      <div>
        <label> Number of votes:  </label>
        <label> {this.props.votes} </label>
      </div>
    )
  }
}
export default Votes;
