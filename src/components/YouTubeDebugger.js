// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

class YouTubeDebugger extends Component {

  constructor(props) {
    super()
    this.state= {
      errors: [],
      user: null,
      settings: {
        bitrate: 8,
        video: {
          resolution: '1080p'
        }
      }
    }
  }
  handleClick = () => {
    this.setState(prevState => ({
      ...prevState,
      settings: {
        bitrate: 12,
        video: {
          resolution: '1080p'
        }
      }
    }))
  }

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.settings.video,
          resolution: '720p'
        }
      },
    });
  }


  render() {
    return (
      <div>
        <button className='bitrate' onClick={this.handleClick} />
        <button className='resolution' onClick={this.handleResolution} />
      </div>

    )
  }
}

export default YouTubeDebugger
