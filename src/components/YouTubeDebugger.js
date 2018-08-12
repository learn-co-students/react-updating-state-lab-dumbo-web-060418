// Code YouTubeDebugger Component Here
import React, { Component } from  'react'

export default class YouTubeDebugger extends Component {
  constructor() {
    super()

    this.state = {
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

  handleResolution = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        video: {
          ...this.state.video,
          resolution: '720p'
        }
      }
    })
  }

  handleBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12
      }
    })
  }



  render() {
    return (
      <div>
        <button onClick={this.handleResolution} className="resolution">Change Resolution</button>
        <button onClick={this.handleBitrate} className="bitrate">Change Bitrate</button>
      </div>
    )
  }

}
