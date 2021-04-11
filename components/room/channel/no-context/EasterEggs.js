import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function EasterEggs ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={name} description="Et pourtant c'est pas Pâques ! Ok j'avoue elle était pas ouf celle là"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">J'ai réparti quelques easter Eggs sur le site. Arriverez-vous à les trouver ?</p>
          <br/>
          <ul>
            <li>- GIF 'That What she Said'</li>
            <li>- Vidéo YouTube 'PARKOUR'</li>
            <li>- Console</li>
            <li>- 1 tooltip 'Wow c'était y'a longtemps !'</li>
            <li>- 1 tooltip sur SNK / l'attaque des titans</li>
          </ul>
          <br/>
          <p>J'en rajouterai d'autres au fur et à mesure des mises à jour !</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
