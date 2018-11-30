import React from 'react'
import ThumbUser from './user_thumb'
import TextArea from './text_input_area'
import Button from './button'

class Candidate extends React.Component {
  render() {
    return (
        <div>
          <ThumbUser icon={this.props.icon} name={this.props.name}/>
          <TextArea onChange={this.props.OnChange} />
          <Button onClick={this.props.onClick} />
        </div>
    )
  }
}

export default Candidate;
