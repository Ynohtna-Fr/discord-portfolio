import ChannelMessage from '../ChannelMessage'
import ChannelDefaultMessage from '../ChannelDefaultMessage'
export default function WhyDiscord () {
  return (
    <div>
      <ChannelDefaultMessage name="jean Ferry" description="c'est un salon cool"/>
      <ChannelMessage message="Salut comment ça va ?" >
        <div>
          <h1>salut</h1>
          <p>wesh</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
