import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
export default function Education ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="ça fait long dis donc !"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">En autodidacte :</p>
          <br/>
          <ul>
            <Tippy content="Wow, c'était il y'a si longtemps" placement="top-start"><li><img src="/img/emoji/openClassrooms.png" className="emoji-s" alt="logo OpenClassroom"/> <span className="italic">2014</span> - HTML / CSS</li></Tippy>
            <li><img src="/img/emoji/openClassrooms.png" className="emoji-s" alt="logo OpenClassroom"/> <span className="italic">2015</span> - "Concevez votre site web avec PHP et MySQL"</li>
            <li><img src="/img/emoji/openClassrooms.png" className="emoji-s" alt="logo OpenClassroom"/> <span className="italic">2016</span> - "Démarrez votre projet avec python"</li>
          </ul>
          <br/>
          <ul>
            <li><img src="/img/emoji/udemy.svg" className="emoji-s" alt="logo Udemy"/> <span className="italic">2018-2019</span> - Formation "Développeur web"</li>
            <li><img src="/img/emoji/udemy.svg" className="emoji-s" alt="logo Udemy"/> <span className="italic">2020</span> - Formation "JS : le guide Ultime (ES6/ES7)</li>
            <li><img src="/img/emoji/panda_cool.png" className="emoji-s" alt="emoji Panda"/> <span className="italic">2014 - aujourd'hui</span> - En perpétuel apprentissage...</li>
          </ul>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Scolaire :</p>
          <br/>
          <ul>
            <li><img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/> <span className="italic">2015</span> - Brevet des collèges - mention "assez bien"</li>
            <li><img src="/img/emoji/backpack.svg" className="emoji-s" alt="emoji Sac à dos"/> <span className="italic">2019</span> - Baccalauréat Économique & Social - Mention "Bien"</li>
          </ul>
        </div>
      </ChannelMessage>
    </div>
  )
}
