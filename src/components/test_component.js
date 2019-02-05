
import React from 'react'
import './test_component.css'



class TestComponent extends React.Component {
	
 constructor(props) {
    super(props)
    this.state = {
      isActive: true,
      classNames: 'center_line another_class'	    
    }
  }


  render() {

  
  setInterval(() =>  {
      this.setState({
        classNames: 'another_another_class'
    })
  }, 5000)
   
	 const classNames = [
	  'center_line',
          'another_class'
	 ]


    return (
        <div 
	    className={this.state.classNames} >
	    inside div
        </div>
    )
  }
}

export default TestComponent;
