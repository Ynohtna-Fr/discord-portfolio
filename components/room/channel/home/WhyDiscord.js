import { useSetRecoilState } from 'recoil'
import ChannelMessage from '../../ChannelMessage'
import ChannelDefaultMessage from '../../ChannelDefaultMessage'
import { burgerMenuState } from '../../../../recoil/atoms/navigation'

export default function WhyDiscord ({ name }) {
  const setBurgerOpen = useSetRecoilState(burgerMenuState)

  const handleClick = () => {
    const leftSide = document.querySelector('.left')
    const rightSide = document.querySelector('.right')
    const rightSideContent = document.querySelector('.right .content')
    leftSide.classList.add('show-nav')
    rightSide.style.backgroundColor = 'black'
    rightSideContent.style.opacity = 0.5
    setBurgerOpen(true)
  }

  return (
    <div>
      <ChannelDefaultMessage name={ name } description="C'est vrai ça, pourquoi faire un CV discord ?"/>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <img src="img/bonjour.gif" className="img-fluid" alt="bonjour gif OSS117"/>
      </ChannelMessage>
      <ChannelMessage author="Anthony Adam" date="Hier à 08:39">
        <div>
          <p className="bold">Pourquoi avoir choisi de faire un CV discord ?</p> <br/>
          <p>Tout simplement parce que j'aime <span className="bold">l'originalité</span> et j'aime discord !</p><br/>
          <p>Discord ma permis de <span className="bold">développer ma créativité</span> et d'apprendre énormément de choses.
            Il était donc normal pour moi de lui rendre hommage en tant que CV ! <img src="/img/emoji/smile.svg" className="emoji-s" alt="emoji sourire"/></p><br/>
          <p>Si vous préférez un CV plus classique, voici <span className="bold">mon <span className="italic">(ancien)</span> CV papier </span>: <a href="https://anthony-adam.fr/pdf/cv-anthony-adam.pdf">https://anthony-adam.fr/pdf/cv-anthony-adam.pdf</a> </p>
          <br/>
          <p>Le site a été fait à la main en utilisant <span className="bold"> ReactJs et Next.js</span>.
            Vous pouvez trouver le code source sur ce <a href="https://github.com/Ynohtna-Fr/discord-portfolio">repo github</a></p>
          <div className="hidden-desk">
            <br/>
            <p>Ouvrez le menu pour naviguer sur le site ! <a onClick={() => handleClick()}>(ou cliquez ici)</a></p>
          </div>
        </div>
      </ChannelMessage>
    </div>
  )
}
