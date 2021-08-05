import { useSetRecoilState } from 'recoil'
import * as ackeeTracker from 'ackee-tracker'
import { burgerMenuState } from '../../recoil/atoms/navigation'

const handleLink = (instance, link) => {
  instance.action('6058f56c-55c2-473b-8af2-4835fe020c07', { key: link, value: 1 })
}

export default function ChannelHeader ({ channelName }) {
  const setBurgerOpen = useSetRecoilState(burgerMenuState)

  let instance
  if (typeof window !== 'undefined') {
    instance = ackeeTracker.create('https://stats.anthony-adam.fr', {
      detailed: false,
      ignoreLocalhost: false,
      ignoreOwnVisits: false
    })
  }

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
    <div className="content_header">
      <div className="content_header--name">
        <img src="/img/burger.svg" className="burger" alt="Afficher le menu" onClick={() => handleClick()}/>
        <img src="/img/hashtag.svg" className="hashtag"/>
        <h2>{ channelName }</h2>
      </div>
      <div className="content_header--icons">
        <a href="https://www.linkedin.com/in/anthony-adam/" target="_BLANK" onClick={() => handleLink(instance, 'linkedin')}>
          <img src="/img/linkedin.svg"/>
        </a>
        <a href="https://github.com/Ynohtna-Fr" target="_BLANK" onClick={() => handleLink(instance, 'github')}>
          <img src="/img/github.svg"/>
        </a>
        <a href="tel:0652728018" onClick={() => handleLink(instance, 'tel')}>
          <img src="/img/tel.svg"/>
        </a>
      </div>
    </div>
  )
}
