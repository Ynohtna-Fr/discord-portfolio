import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Novembre ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="L'agence, pas le mois"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <p className="underline">En alternance chez Novembre pour ma deuxième année, j'ai pu travailler sur de nombreux projets, en voici quelque-un ou j'ai participé !</p>
          <br/>
          <ul>
            <li><span className="bold">Immium</span> - Agence immobilière <span className="italic">(Refonte de la page d'accueil et des biens)</span> <a href="https://www.immium.com/" target="_BLANK">🔗</a></li>
            <li><span className="bold">Coeur De Lion</span> - Alimentaire <span className="italic">(Mise à jour du jeu "qui à encore manger le coeur de lion" pour 2021 avec une nouvelle méchanique de jeu)</span> <a href="https://quiaencoremangelecoeurdelion.com/" target="_BLANK">🔗</a></li>
            <li><span className="bold">SERS</span> - BTP <span className="italic">(Ajout d'un module de newsletter)</span> <a href="https://sers.eu/" target="_BLANK">🔗</a></li>
            <li><span className="bold">Le Rustique</span> - Alimentaire <span className="italic">(Mise à jour du site pour le jeu de 2021)</span><a href="https://ensemble-nourrissons-nos-terres.fr/" target="_BLANK">🔗</a></li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
