import { useSetRecoilState } from 'recoil'
import { burgerMenuState } from '../../recoil/atoms/navigation'

export default function ChannelHeader ({ channelName }) {
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
    <div className="content_header">
      <div className="content_header--name">
        <img src="/img/burger.svg" className="burger" alt="Afficher le menu" onClick={() => handleClick()}/>
        <img src="/img/hashtag.svg" className="hashtag"/>
        <h2>{ channelName }</h2>
      </div>
      <div className="content_header--icons">
        <a href="https://www.linkedin.com/in/anthony-adam/" target="_BLANK">
          <img src="/img/linkedin.svg"/>
        </a>
        <a href="https://github.com/Ynohtna-Fr" target="_BLANK">
          <img src="/img/github.svg"/>
        </a>
        <a href="tel:0652728018">
          <img src="/img/tel.svg"/>
        </a>
      </div>
    </div>
  )
}
