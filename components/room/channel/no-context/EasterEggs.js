import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function EasterEggs ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={name} description="C'est ici que les mises à jour de mon CV vont être publiées !"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">J'ai répartie quelques easter Eggs sur le site. Arriverez vous à les trouvers ?</p>
          <br/>
          <ul>
            <li>- GIF 'That What she Said'</li>
            <li>- vidéo youtube 'PARKOUR'</li>
            <li>- console</li>
            <li>- 1 tooltip 'Wow c'était y'a longtemps !'</li>
          </ul>
          <br/>
          <p>J'en rajouterai d'autre au fur et à mesure des mises à jours !</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
