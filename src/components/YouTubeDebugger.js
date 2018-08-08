// Code YouTubeDebugger Component Here
import React, { Component } from 'react'

export default class YouTubeDebugger extends Component {
  constructor(props) {
    super(props)

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
   console.log(this.state.settings)

}

  changeBitrate = () => {
    this.setState({
      settings: {
        ...this.state.settings,
        bitrate: 12,
        video: {
        ...this.state.settings.video
        }
      }
    })
  }

  changeResolution = () => {
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

  render() {
    return (
      <div>
      <button className='bitrate' onClick={this.changeBitrate}>
        {this.state.settings.bitrate}
      </button>

      <button className='resolution' onClick={this.changeResolution}>
        {this.state.settings.video.resolution}
      </button>
    </div>
    )
  }

}
