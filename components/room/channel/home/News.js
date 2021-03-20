import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function News ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={name} description="C'est ici que les mises à jour de mon CV vont être publiées !"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
          <div>
            <p><img src="/img/emoji/hyperTada.gif" alt="GIF Hello" className="emoji-s"/> Finalisation de mon CV discord !</p>
          </div>
      </ChannelMessage>
    </div>
  )
}