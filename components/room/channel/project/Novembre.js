import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Novembre ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="L'agence, pas le mois"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <p className="underline">En alternance chez Novembre pour ma deuxième année, j'ai pu travailler sur de nombreux projets, en voici quelques-uns ou j'ai participé !</p>
          <br/>
          <ul>
            <li><span className="bold">Immium</span> - <span className="italic">Agence immobilière </span>- Refonte du site <a href="https://www.immium.com/" target="_BLANK">🔗</a></li>
            <br/>
            <li><span className="bold">Cœur De Lion</span> - <span className="italic"> Alimentaire </span>- Mise à jour du jeu "qui à encore manger le cœur de lion" pour 2021 avec une nouvelle mécanique de jeu <a href="https://quiaencoremangelecoeurdelion.com/" target="_BLANK">🔗</a></li>
            <br/>
            <li><span className="bold">Carte Bancaire</span> - <span className="italic"> Finance </span>- Correction de bug et ajout de fonctionnalité <a href="https://www.cartes-bancaires.com/" target="_BLANK">🔗</a></li>
            <br/>
            <li><span className="bold">Le Rustique</span> - <span className="italic"> Alimentaire </span>- Mise à jour du site pour le jeu de 2021 <a href="https://ensemble-nourrissons-nos-terres.fr/" target="_BLANK">🔗</a></li>
            <br/>
            <li><span className="bold">Saupiquet</span> -<span className="italic"> Alimentaire </span>- Création d'un jeu instant gagnant <a href="https://jeu-saupiquet.com/" target="_BLANK">🔗</a></li>
            <br/>
            <li><span className="bold">Sobieski</span> -<span className="italic"> Alimentaire </span>- Mise à jour du site pour le jeu de 2021 <a href="https://jeu-sobieski.com/" target="_BLANK">🔗</a> <span className="italic">(indisponible jusqu'a la sortie du jeu)</span></li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
