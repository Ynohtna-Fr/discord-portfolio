import * as ackeeTracker from 'ackee-tracker'
import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'

const handleLink = (instance, link) => {
  instance.action('6058f56c-55c2-473b-8af2-4835fe020c07', { key: link, value: 1 })
}

export default function Novembre ({ name }) {
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
      <ChannelDefaultMessage name={ name } description="L'agence, pas le mois"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <p className="underline">En alternance chez Novembre pour ma deuxième année, j'ai pu travailler sur de nombreux projets, en voici quelques-uns où j'ai participé !</p>
          <p><span className="italic">(Certains liens sont peut-être morts dus à la fermeture du jeu-concours)</span></p>
          <br/>
          <ul>
            <li><span className="bold">Immium</span> - <span className="italic">Agence immobilière </span>- Refonte du site <a href="https://www.immium.com/" target="_BLANK" onClick={() => handleLink(instance, 'immium')}>🔗</a></li>
            <br/>
            <li><span className="bold">Cœur De Lion</span> - <span className="italic"> Alimentaire </span>- Mise à jour du jeu "qui à encore manger le cœur de lion" pour 2021 avec une nouvelle mécanique de jeu <a href="https://quiaencoremangelecoeurdelion.com/" target="_BLANK" onClick={() => handleLink(instance, 'CDL')}>🔗</a></li>
            <br/>
            <li><span className="bold">Carte Bancaire</span> - <span className="italic"> Finance </span>- Correction de bug et ajout de fonctionnalité <a href="https://www.cartes-bancaires.com/" target="_BLANK" onClick={() => handleLink(instance, 'CB')}>🔗</a></li>
            <br/>
            <li><span className="bold">Le Rustique</span> - <span className="italic"> Alimentaire </span>- Mise à jour du site pour le jeu de 2021 <a href="https://ensemble-nourrissons-nos-terres.fr/" target="_BLANK" onClick={() => handleLink(instance, 'LR')}>🔗</a></li>
            <br/>
            <li><span className="bold">Saupiquet</span> -<span className="italic"> Alimentaire </span>- Création d'un jeu instant gagnant <a href="https://jeu-saupiquet.com/" target="_BLANK" onClick={() => handleLink(instance, 'Saupiquet')}>🔗</a></li>
            <br/>
            <li><span className="bold">Sobieski</span> -<span className="italic"> Alimentaire </span>- Mise à jour du site pour le jeu de 2021 <a href="https://jeu-sobieski.com/" target="_BLANK" onClick={() => handleLink(instance, 'Sobieski')}>🔗</a></li>
            <br/>
            <li><span className="bold">Forum avenir</span> -<span className="italic"> Associatif </span>- Création du site <a href="https://forum-avenir.com/" target="_BLANK" onClick={() => handleLink(instance, 'forum-avenir')}>🔗</a></li>
            <br/>
            <li><span className="bold">Jeux Entendre</span> -<span className="italic"> santé </span>- Création de la landing page et du jeu pour leurs partenariat avec un film <a href="#" target="_BLANK" onClick={() => handleLink(instance, 'entendre')}>🔗</a></li>
            <br/>
            <li><span className="bold">ROT incendie</span> -<span className="italic"> Magasin </span>- Création du nouveau site <a href="https://rot-incendie.com/" target="_BLANK" onClick={() => handleLink(instance, 'rot')}>🔗</a></li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
