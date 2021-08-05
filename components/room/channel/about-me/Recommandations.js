import * as ackeeTracker from 'ackee-tracker'
import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'

const handleLink = (instance, link) => {
  instance.action('6058f56c-55c2-473b-8af2-4835fe020c07', { key: link, value: 1 })
}

export default function Recommandations ({ name }) {

  let instance
  if (typeof window !== 'undefined') {
    instance = ackeeTracker.create('https://stats.anthony-adam.fr', {
      detailed: false,
      ignoreLocalhost: false,
      ignoreOwnVisits: false
    })
  }

  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Et encore j'ai pas tout mis"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Ce qu'on dit de moi : </p>
          <br/>
          <ul>
            <li>
              <p><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> "Merci d'avoir fait NoteUniv !"</p>
              <p><img src="/img/emoji/arrow_right.svg" className="emoji-s" alt="flèche droite"/> Étudiant MMI Haguenau</p>
            </li>
            <br/>
            <li>
              <p><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> "Élève travailleur et motivé par le développement d'objets connectés."</p>
              <p><img src="/img/emoji/arrow_right.svg" className="emoji-s" alt="flèche droite"/> M.Pfister & M.Zunino | Professeur d'ICN (Informatique et Création Numérique)</p>
            </li>
          </ul>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
          <p>N'hésitez pas à allez voir <a href="https://www.linkedin.com/in/anthony-adam/" target="_blank" onClick={() => handleLink(instance, 'linkedin')}> mon LinkedIn</a> pour voir plus !</p>
      </ChannelMessage>
    </div>
  )
}
