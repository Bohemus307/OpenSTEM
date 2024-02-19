import { Player } from 'video-react'
import 'video-react/dist/video-react.css'

interface VideoPlayerProps {
  src: string
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ src }) => {
  return (
    <div className="flex w-full items-center justify-center">
      <Player aspectRatio={'4:3'} fluid={false} width={600} height={300}>
        <source src={src} />
      </Player>
    </div>
  )
}

export default VideoPlayer
