import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Introduction ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="C'est par ici qu'on commence ?"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <img src="/img/profile.png" alt="" className="img-fluid profile-img"/>
        </div>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39" >
        <div>
          <p><img src="/img/emoji/hello.gif" className="emoji-s" alt=""/> Hello ! </p><br/>
          <p>Je m'appelle Anthony Adam et j'ai 20 ans. <span className="bold">Passionné d'informatique depuis petit</span>, je crée des trucs et fais des choses.
            Principalement axé sur le développement web, mais également les applications mobiles. 👨‍💻</p>
          <br/>
          <p>J'ai commencé par apprendre le développement web quand j'étais en <span className="bold"> 5ème en autodidacte</span> <span className="italic"> (c'était encore le site du zéro à l'époque !)</span>. <br/>
            Maintenant je suis en <span className="bold">2ème année de MMI</span> <span className="italic">(Métier du multimédia et de l'internet)</span> à Haguenau en Alsace <span className="italic">(choucroute et bretzel n'ont plus de secrets pour moi)</span> spécialisé dans le développement web.
            En parallèle de ça, je suis en <span className="bold"> alternance </span> en tant que <span className="bold">développeur web </span> dans une super entreprise du nom de <span className="bold"> Novembre </span> à Strasbourg. <img
              src="/img/emoji/dog.gif" className="emoji-s" alt="chien qui hoche la tête"/></p>
          <br/>
          <p>J'aime toucher à tout, expérimenter, créer et mener à bien mes projets qui sont divers et variés.</p>
        </div>
      </ChannelMessage>
    </div>
  )
}
