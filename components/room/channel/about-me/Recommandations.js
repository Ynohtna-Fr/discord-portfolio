import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Recommandations ({ name }) {
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
              <p><img src="/img/emoji/arrow_right.svg" className="emoji-s" alt="flèche droite"/> Etudiant MMI Haguenau</p>
            </li>
            <br/>
            <li>
              <p><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="emoji épingle"/> "Elève travailleur et motivé par le developpement d'objet connectés."</p>
              <p><img src="/img/emoji/arrow_right.svg" className="emoji-s" alt="flèche droite"/> M.Pfister & M.Zunino | Professeur d'ICN (Informatique et Création Numérique)</p>
            </li>
          </ul>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
          <p>N'hésitez pas à allez voir <a href="https://www.linkedin.com/in/anthony-adam/" target="_blank"> mon Linkedin </a> pour voir plus !</p>
      </ChannelMessage>
    </div>
  )
}
