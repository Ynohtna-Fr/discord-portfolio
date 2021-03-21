import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function WhyDiscord ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="C'est vrai ça, pourquoi faire un CV discord ?"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <img src="img/bonjour.gif" className="img-fluid" alt="bonjour gif OSS117"/>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Pourquoi avoir choisis de faire un CV discord ?</p> <br/>
          <p>Tout simplement parce que j'aime <span className="bold">l'originalité</span> et j'aime discord !</p><br/>
          <p>Discord ma permis de <span className="bold">Développer ma créativité</span> et d'apprendre énormément de choses.
            Il était donc normal pour moi de lui rendre hommage en tant que CV ! <img src="/img/emoji/smile.svg" className="emoji-s" alt="emoji sourire"/></p><br/>
          <p>Si vous préférer un CV plus classique, voici <span className="bold">mon CV papier </span>: <a href="https://anthony-adam.fr/pdf/cv-anthony-adam.pdf">https://anthony-adam.fr/pdf/cv-anthony-adam.pdf</a> </p>
          <br/>
          <p>Le site à été fait à la main en utilisant <span className="bold"> ReactJs et Next.js</span>.
            Vous pouvez trouver le code source sur ce repo github</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
