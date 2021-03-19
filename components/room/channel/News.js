import ChannelMessage from '../ChannelMessage'
import ChannelDefaultMessage from '../ChannelDefaultMessage'
export default function News () {
  return (
    <div>
      <ChannelDefaultMessage name="jean Ferry" description="c'est un salon cool"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
          <div>
            <h1>qozidj</h1>
            <p>oiuqhzd</p>
          </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <h1>qoziujduioqzjdiouqdio</h1>
          <p>c'est vrai que c'est cool</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
