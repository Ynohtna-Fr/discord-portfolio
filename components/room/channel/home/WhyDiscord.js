import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function WhyDiscord ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="C'est vrai ça, pourquoi faire un CV discord ?"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Pourquoi avoir choisis de faire un CV discord ?</p> <br/>
          <p>Tout simplement parce que j'aime <span className="bold">l'originalité</span> et j'aime discord !</p><br/>
          <p>Discord ma permis de <span className="bold">Développer ma créativité</span> et d'apprendre énormément de choses.
            Il était donc normal pour moi de lui rendre hommage en tant que CV ! 😄</p><br/>
          <p>Si vous préférer un CV plus classique, voici mon CV papier : <a href="https://anthony-adam.fr/pdf/cv-anthony-adam.pdf">https://anthony-adam.fr/pdf/cv-anthony-adam.pdf</a> </p>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Pourquoi avoir choisis de faire un CV discord ?</p> <br/>
          <p>Tout simplement parce que j'aime <span className="bold">l'originalité</span> et j'aime discord !</p><br/>
          <p>Discord ma permis de <span className="bold">Développer ma créativité</span> et d'apprendre énormément de choses.
            Il était donc normal pour moi de lui rendre hommage en tant que CV ! 😄</p><br/>
          <p>Si vous préférer un CV plus classique, voici mon CV papier : <a href="https://anthony-adam.fr/pdf/cv-anthony-adam.pdf">https://anthony-adam.fr/pdf/cv-anthony-adam.pdf</a> </p>
        </div>
      </ChannelMessage>
    </div>
  )
}
