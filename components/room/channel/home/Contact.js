import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
import { useRecoilValue } from 'recoil'
import { sendState } from '../../../../recoil/atoms/send'

export default function Contact ({ name }) {
  const sendStatus = useRecoilValue(sendState)

  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Envie de me dire bonjour ?"/>
      <ChannelMessage author="Anthony Adam" date="21/03/2021">
        <div>
          <p className="bold">Pour me contacter rien de plus simple !</p>
          <p>Écrivez votre message dans l'espace prévu à cet effet.
            N'oubliez pas de <span className="bold">rajouter votre mail / tél</span> pour que je puisse vous répondre !</p>
          <p>J'écoute <img src="/img/emoji/oss.png" className="emoji-s" alt=""/> </p>
          {sendStatus?.error ? <p>{sendStatus.error}</p> : sendStatus === null ? '' : <div><img src="/img/victory.gif" className="img-fluid" alt="Gif Félicitation"/><br/><p><span className="bold">YAHOUUUUUUUU C'est envoyé !</span> J'espère que vous n'avez pas oublié de mettre votre mail ou votre numéro de téléphone !</p></div>}
        </div>
      </ChannelMessage>
    </div>
  )
}
