import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
export default function BulkInformation ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={name} description="Ne tenez pas rigueur de ce qu'il y'a ici j'suis en roue libre"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="underline">Vous en voulez encore ? Voici quelques trucs en vrac me concernant :</p>
          <br/>
          <p><span className="bold">Série préféré :</span> The Office</p>
          <br/>
          <p><span className="bold">Film préféré :</span> OSS 117</p>
          <br/>
          <p><span className="bold">Top 3 anime :</span></p>
          <Tippy content="Effectivement vous avez bien vu. Il n'y à pas SNK / L'attaque des Titans" placement="top-start"><ul>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="Icon Epingle"/> Sword Art Online</li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="Icon Epingle"/> Log Horizon</li>
            <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt="Icon Epingle"/> Death Note</li>
          </ul></Tippy>
          <br/>
          <p><span className="bold">Pilotes F1 préféré :</span> Ricciardo et Norris.</p>
          <br/>
          <p>J'adore l'<span className="bold">économie</span>, mais je suis surtout passionné de <span className="bold">réalité virtuelle et augmenter</span>.</p>
          <br/>
          <p>Je me suis déjà fait interviewer au Etats-Unis quand la france à gagner la coupe du monde, c'était drole.</p>
          <br/>
          <p>Au départ je voulais faire un site CV moche, mais je me suis rendu compte qu'il fallait quand même des compétences en design pour faire des trucs moches.</p>
          <br/>
          <p>Je connais le monologue d'Otis par coeur.</p>
          <br/>
          <p>Mon premier jeu vidéo était "Medal Of Honor: Débarquement Alliée". J'ai encore le CD chez moi !</p>
          <br/>
          <p className="bold">Gif préféré :</p>
          <Tippy content={<img src="/img/thatWhatSheSaid.gif"/>}><img src="/img/theOffice.gif" alt="GIF the The Office"/></Tippy>
        </div>
      </ChannelMessage>
    </div>
  )
}
