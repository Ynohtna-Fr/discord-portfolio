import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
export default function Noteuniv ({ name }) {
  return (
    <div>
      <ChannelDefaultMessage name={ name } description="Fini la paperasse désuète !"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <img src="/img/projet/noteuniv_text.svg" className="img-fluid" alt=""/><br/><br/>
          <p>
            N'ayant pas de site / module de note à l'IUT, <span className="bold">tout se fait par PDF</span>, ce qui peut facilement devenir une perte de temps à la longue.
            Nous avons donc avec un ami décidé de <span className="bold">créer notre propre module de note pour l'IUT !</span>
            <br/><br/>
            NoteUniv est un <span className="bold">site web et une application mobile</span> permettant aux étudiants de l'IUT de Haguenau de voir leurs notes.
            <br/><br/>
            NoteUniv permet de simplifier la relation entre la scolarité étudiante et les étudiants eux-mêmes.
            Divers outils sont à leurs dispositions pour leur éviter de perdre du temps et d'analyser leurs résultats.
            Finalement, c'est <span className="bold">l'équivalent d'un "ENT" ou de "Mon bureau numérique"</span>, mais fait par des étudiants pour des étudiants !
            <br/><br/>
            Je fais ce projet avec l'aide d'un ami. Il s'occupe de toute la partie récupération de notes en faisant du scraping Python sur les PDF.
            De mon côté je suis <span className="bold">en charge du site web et de l'application mobile</span>.
            <br/><br/>
            Nous avons présenter ce projet au <span className="bold">concours HackTaFac</span> de l'université de Strasbourg ou nous avons en final du jury.
            Nous n'avons malheureusement pas été retenus à cause de la <span className="italic">"difficile extension de votre projet à d’autres formations ou composantes"</span>, ce qui est compréhensible.
            C'est néanmoins une <span className="bold">aventure passionnante </span>qui est toujours d'actualité !
          </p>
          <br/>
          <p className="italic">Vous pouvez retrouver le code source de NoteUniv sur ce repo Github <a href="https://github.com/NoteUniv">https://github.com/NoteUniv</a> et le lien vers la vidéo de présentation ici : <a
            href="http://hacketafac.unistra.fr/projects/noteuniv">http://hacketafac.unistra.fr/projects/noteuniv/</a></p>
        </div>
      </ChannelMessage>
    </div>
  )
}
