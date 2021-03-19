import ServerNavigation from '../components/navigation/ServerNavigation'
import ChannelContent from '../components/room/ChannelContent'

export default function Home() {
  return (
    <div className="home">
      <div className="left">
        <ServerNavigation />
      </div>
      <div className="right">
        <ChannelContent />
      </div>
    </div>
  )
}
