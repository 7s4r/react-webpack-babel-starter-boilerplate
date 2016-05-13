import React from 'react'
import './video.scss'

const Video = function() {
  return (
    <div className="video">
      <video autoPlay loop>
        <source
          src="//i.istockimg.com/video_passthrough/36569610/153/36569610.mp4"
          type="video/mp4"
        />
      </video>
    </div>
  )
}

export default Video
