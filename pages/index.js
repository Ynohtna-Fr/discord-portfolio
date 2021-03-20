import ServerNavigation from '../components/navigation/ServerNavigation'
import ChannelContent from '../components/room/ChannelContent'
import { useRef } from 'react'

export default function Home() {
  const leftSide = useRef()

  return (
    <div className="home">
      <div className="left" ref={leftSide}>
        <ServerNavigation leftSide={leftSide}/>
      </div>
      <div className="right">
        <ChannelContent />
      </div>
    </div>
  )
}
