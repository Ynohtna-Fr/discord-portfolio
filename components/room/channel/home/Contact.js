import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Contact ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Envie de me dire bonjour ? (ps: l'émoji on dirait pas un personnage Among Us ?)"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <p className="bold">Pour me contacter rien de plus simple !</p>
          <p>Ecrivez votre message dans l'espace prévu à cette effet. N'oubliez pas de <span className="bold">rajouter votre mail / tel</span> pour que je puisse vous répondre !</p>
          <p>J'écoute <img src="/img/emoji/oss.png" className="emoji-s" alt=""/> </p>
        </div>
      </ChannelMessage>
    </div>
  )
}
