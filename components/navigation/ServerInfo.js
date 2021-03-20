import { useSetRecoilState } from 'recoil'
import { burgerMenuState } from '../../recoil/atoms/navigation'

export default function ServerInfo () {
  const setBurgerOpen = useSetRecoilState(burgerMenuState)
  const handleClick = () => {
    const leftSide = document.querySelector('.left')
    const rightSide = document.querySelector('.right')
    const rightSideContent = document.querySelector('.right .content')
    leftSide.classList.remove('show')
    rightSide.style.backgroundColor = 'unset'
    rightSideContent.style.opacity = 1
    setBurgerOpen(false)
  }

  return (
    <div className="info">
      <div className="layer"/>
      <h1>CV anthony Adam</h1>
      <div id="close" onClick={() => handleClick()}>x</div>
    </div>
  )
}
