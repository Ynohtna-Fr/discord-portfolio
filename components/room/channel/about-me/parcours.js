import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
export default function Parcours ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } trigger="mouseenter focus click" description={<Tippy content={<iframe width="300" height="315"
  src="https://www.youtube-nocookie.com/embed/0Kvw2BPKjz0"
  title="YouTube video player"
  frameBorder="0"
  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
  allowFullScreen/>} placement="top-start" interactive={true} allowHTML={true}><span>Parkour! Extreme! Parkour! This… is Parkour</span></Tippy>}/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div className="parcours">
          <div>
            <img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/>
            <p className="bold">Collège du bois fleuri</p>
            <p className="italic">2011-2015</p>
            <p>Brevet des collèges - mention "assez bien"</p>
          </div>
          <div>
            <img src="/img/emoji/office_worker.svg" className="emoji-s" alt="emoji travailleur"/>
            <p className="bold">Stage de 3ème</p>
            <p className="italic">2015</p>
            <p>Stage chez un avocat, Maître Beaugrand à Strasbourg.</p>
          </div>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div className="parcours">
          <div>
            <img src="/img/emoji/restaurant.svg" className="emoji-s" alt="emoji assiette et couteau"/>
            <p className="bold">Emploi dans la Restauration</p>
            <p className="italic">2018-2020</p>
            <p>Serveur en CDI dans un restaurant</p>
          </div>
          <div>
            <img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/>
            <p className="bold">Lycée Heinrich Nessel</p>
            <p className="italic">2016-2019</p>
            <p>Section Economique & Social - Mention "Bien"</p>
          </div>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div className="parcours">
          <div>
            <img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/>
            <p className="bold">DUT-MMI</p>
            <p className="italic">2019-2021</p>
            <p>Métier du multimédia et de l'internet. <br/> Developpement Web, infographie, communication... </p>
          </div>
          <div>
            <img src="/img/emoji/office_worker.svg" className="emoji-s" alt="emoji travailleur"/>
            <p className="bold">Apprenti développeur web</p>
            <p className="italic">2020-2021</p>
            <p>Apprenti développeur web au sein de l'agence Novembre </p>
          </div>
        </div>
      </ChannelMessage>
    </div>
  )
}
