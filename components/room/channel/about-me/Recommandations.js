import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Recommandations ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="c'est un salon cool"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <h1>Recommandation </h1>
          <p>wesh</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
