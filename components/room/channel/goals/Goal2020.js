import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Goal2020 ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="alala 2020, c'était la liberté à l'époque"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div className="goal">
          <p>Chaque année je fais une liste d'objectif pour l'année en cours. Voici mes objectifs 2020 !</p>
          <br/>
          <ul>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Continuer apprentissage Flutter <img src="/img/emoji/no_check.png" className="emoji-s" alt="emoji barré"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Commencer apprentissage base Vue.js <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Crée mon entreprise <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Approfondir Javascript <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Finir Lauréat HackTaFac <img src="/img/emoji/no_check.png" className="emoji-s" alt="emoji barré"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Crée une application pour NoteUniv <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Faire ma 2ème année en alternance <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Refaire mon CV en ligne <img src="/img/emoji/no_check.png" className="emoji-s" alt="emoji barré"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji epingle"/> Faire mon premier jeu vidéo mobile <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
