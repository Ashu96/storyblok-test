import React from 'react'
import PropTypes from 'prop-types'
import Styled from 'styled-components'
import { VideoPlayerContext } from '../../utils'

const VideoPlayerWrapper = Styled.div`
  & .video-player {
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0,0,0, 0.9);
    z-index: 50;
    display: flex;
    justify-content: center;
    align-items: center;
  }
`

function Vimeo() {
  const { playVideo, togglePlayVideo, url } = React.useContext(
    VideoPlayerContext
  )

  if (!playVideo) {
    return null
  }

  return (
    <VideoPlayerWrapper
      onClick={() => {
        togglePlayVideo()
      }}
    >
      <div className="video-player">
        <iframe
          title="uprise tour video"
          src={`${url}?autoplay=1&loop=1&autopause=0`}
          width="640"
          height="360"
          frameBorder="0"
          allow="autoplay; fullscreen"
          allowFullScreen
        ></iframe>
      </div>
    </VideoPlayerWrapper>
  )
}

export default Vimeo

Vimeo.propTypes = {
  url: PropTypes.string.isRequired
}

Vimeo.defaultProps = {
  url: 'https://player.vimeo.com/video/219316897'
}
