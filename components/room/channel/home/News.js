import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function News ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={name} description="C'est ici que les mises à jour de mon CV vont être publiées !"/>
      <ChannelMessage author="Anthony Adam" date="21/03/2021">
          <div>
            <p><img src="/img/emoji/hyperTada.gif" alt="GIF Hello" className="emoji-s"/> Finalisation de mon CV Discord !</p>
          </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="18/05/2021">
          <div>
            <p>J'ai rajouté un peu d'espace au niveau des projets. J'en ai également rajouté de nouveaux. :) !</p>
          </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="29/07/2021">
        <div>
          <p>C'est officiel ! Je m'en vais l'année prochaine à la Fac d'informatique (L3) pour suivre un cursus master en ingénierie ! <img src="/img/emoji/cat.gif" alt="GIF Hello" className="emoji-s"/></p>
        </div>
      </ChannelMessage>
    </div>
  )
}
