import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Contact ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Envie de me dire bonjour ?"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <p className="bold">Pour me contacter rien de plus simple !</p>
          <div>FORMULAIRE DE CONTACT</div>
        </div>
      </ChannelMessage>
    </div>
  )
}
