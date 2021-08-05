import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Goal2021 ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Oui"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div className="goal">
          <p>Chaque année je fais une liste d'objectif pour l'année en cours. Voici mes objectifs 2021 !</p>
          <br/>
          <ul>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Continuer mes études dans l'ingénierie <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Refaire mon CV en ligne <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Approfondir React <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Pousser DiscAds en production</li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Partir à Lemnos <span className="italic">(Plus connu sous le nom d'Altis)</span></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Apprendre du webAR <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/></li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> Rester en vie <span className="italic">(Covid tout ça tout ça)</span> <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/> <span className="italic">(Pour l'instant)</span></li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
