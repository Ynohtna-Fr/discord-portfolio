import ChannelHeader from './ChannelHeader'
import News from './channel/News'
import WhyDiscord from './channel/WhyDiscord'
import ChannelInput from './ChannelInput'
import { useRecoilValue } from 'recoil'
import { navigationState } from '../../recoil/atoms/navigation'

export default function ChannelContent () {
  const navigation = useRecoilValue(navigationState)
  let channel
  switch (navigation.path) {
    case 'news':
      channel = <News />
      break
    default:
      channel = <WhyDiscord />
  }

  return (
    <div className="content">
      <ChannelHeader channelName={navigation.name}/>
      <div className="content_room">
        { channel }
      </div>
      <ChannelInput />
    </div>
  )
}
