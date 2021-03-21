import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Skills ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Des compétences de compétition"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <h2>J'ai eu la chance de pouvoir travailler avec de <span className="bold">nombreux outils</span>, en voici quelques-uns :</h2>
          <br/>
          <div className="skills">
            <ul>
              <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt=""/><span className="underline"> Les classiques</span> : <img
                src="/img/emoji/html.png" alt="icon HTML5" className="emoji-s"/> / <img src="/img/emoji/css.png" alt="icon CSS3" className="emoji-s"/> / SQL / <img
                src="/img/emoji/js.png" alt="icon JavaScript" className="emoji-s"/> / <img src="/img/emoji/php.png" alt="icon PHP" className="emoji-s"/> / <img
                src="/img/emoji/nodejs.png" alt="icon nodeJs" className="emoji-s"/></li>
              <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt=""/><span className="underline"> Les avancés</span> : <img
                src="/img/emoji/sass.png" alt="icon SASS" className="emoji-s"/> / TWIG</li>
              <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt=""/><span className="underline"> Les framework/CMS</span> : <img
                src="/img/emoji/symfony.png" alt="icno Symfony" className="emoji-s"/> / <img src="/img/emoji/wordpress.png" alt="icon Wordpress" className="emoji-s"/> / <img
                src="/img/emoji/react.png" alt="Icon React" className="emoji-s"/> <span className="italic">(Native / Js)</span></li>
            </ul>
            <ul>
              <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt=""/><span className="underline"> Les librairies CSS</span> : <img
                src="/img/emoji/bootstrap.png" alt="Icon Bootstrap" className="emoji-s"/> <span className="italic">(même la V5 !)</span> / FlexBoxGrid2</li>
              <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt=""/><span className="underline"> J'ai aussi pu toucher un peu à</span> : <img
                src="/img/emoji/vue.png" alt="Icon VueJs" className="emoji-s"/> / <img src="/img/emoji/adonis.png" alt="Icon AdonisJS" className="emoji-s"/> <span className="italic">(AdonisJs)</span> / <img
                src="/img/emoji/tailwindcss.png" alt="Icon Tailwind CSS" className="emoji-s"/> <span className="italic">(TailwindCss)</span></li>
              <li><img src="/img/emoji/pushpin.svg" className="emoji-s" alt=""/><span className="underline"> Les autres</span> : Suite office / XD / suite Adob</li>
            </ul>
          </div>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="28/02/10" >
        <div>
          <p className="bold underline">Mes préférés :</p>
          <br/>
          <ul>
            <li>Celui qui passe partout : <span className="bold">React</span></li>
            <li>Celui que tout le monde déteste, mais qu'on aime quand même au fond : <span className="bold">PHP</span></li>
            <li>Celui qui ma appris à aimer Javascript : <span className="bold">DiscordJS</span></li>
            <li>Celui qui permet des prototypes rapides : <span className="bold">Bootstrap</span></li>
          </ul>
        </div>
      </ChannelMessage>

    </div>
  )
}
