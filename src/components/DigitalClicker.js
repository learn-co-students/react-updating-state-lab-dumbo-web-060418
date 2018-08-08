// Code DigitalClicker Component Here
import React, { Component } from 'react'

class DigitalClicker extends Component {

  constructor(props) {
    super()
    this.state= {
      timesClicked:0
    }
  }

  handleClick = (e) => {
    this.setState({
      timesClicked:this.state.timesClicked + 1
    })
    // return <p> {this.state.timesClicked} </p>
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick} label={this.state.timesClicked}>
          <p>{this.state.timesClicked }</p>
        </button>
      </div>
    )
  }
}


export default DigitalClicker
