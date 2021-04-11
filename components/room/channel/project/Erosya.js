import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Erosya ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Erosia ? Erozia ? Erosya !!!"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p>Erosya est une communauté gaming que j'ai décidé de créer.
            Avec elle nous menons à bien divers projets communautaires tels que des sites web ou des guides pour aider les joueurs. </p>
          <br/>
          <p className="underline">En voici quelques exemples : </p>
          <br/>
          <p><img src="img/emoji/no_check.png" alt="emoji barré" className="emoji-s"/> <span className="bold">SAOARS SUMMON</span> - Il permet au joueur de SAOARS de simuler des invocations comme s'il était sur le jeu.
            Les données sont tirées directement du jeu pour garantir un réalisme poussé. <a href="https://saoars-summon.com/" target="_BLANK">🔗</a></p>
          <p><img src="img/emoji/no_check.png" alt="emoji barré" className="emoji-s"/> <span className="bold">WIKI SAOIF</span> - Ce wiki basé sur Fandom permet aux joueurs de retrouver des informations sur le jeu. Le jeu étant en anglais, nous l'avons traduit en français. <a href="https://sword-art-online-integral-factor-france.fandom.com/fr/wiki/Wiki_Sword_Art_Online_Integral_Factor_France" target="_BLANK">🔗</a></p>
          <p><img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/> <span className="bold">BOT EROSYA</span> - Le bot Discord Erosya est un bot Discord pour le serveur Discord Erosya. Il a diverses commandes et actions que c'est difficile de tout résumer ici.
            En tout cas, sachez que c'est un bot inédit et unique en son genre, car il intègre une économie réelle, un système de guilde/profile au sein du Discord et biens plus encore !</p>
          <p><img src="img/emoji/incomming.gif" className="emoji-s" alt="en cours"/> <span className="bold">JEU EROSYA</span> - Pour m'entraîner à React Native, j'ai décidé de créer un jeu Gacha <span className="italic">(collection de cartes)</span> pour les membres du Discord, relié à leurs profiles et à Discord.
            Le jeu est actuellement en Alpha fermé. Si vous souhaitez voir de quoi il en retourne, contactez-moi !
          </p>
          <p><img src="img/emoji/incomming.gif" className="emoji-s" alt="en cours"/> <span className="bold">DISCADS</span> - Discads est un site web qui permet de mettre en relation les utilisateurs Discord avec des annonceurs afin de "louer" leurs statuts Discord.
          Le site fait en Symfony et React est actuellement en phase de prototype. Sa sortie en prévu en bêta courant mai</p>
          <br/>
          <p>
            <img src="/img/emoji/check.png" className="emoji-s" alt="emoji validé"/> Maintenu à jour |&nbsp;
            <img src="img/emoji/no_check.png" alt="emoji barré" className="emoji-s"/> Plus maintenu à jour | &nbsp;
            <img src="img/emoji/incomming.gif" className="emoji-s" alt="en cours"/> En cours de développement</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
