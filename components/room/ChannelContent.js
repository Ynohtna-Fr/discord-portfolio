import ChannelHeader from './ChannelHeader'
import News from './channel/home/News'
import WhyDiscord from './channel/home/WhyDiscord'
import ChannelInput from './ChannelInput'
import { useRecoilState, useRecoilValue } from 'recoil'
import { navigationState } from '../../recoil/atoms/navigation'
import { burgerMenuState } from '../../recoil/atoms/navigation'
import Contact from './channel/home/Contact'
import Introduction from './channel/about-me/Introduction'
import Skills from './channel/about-me/Skills'
import Parcours from './channel/about-me/parcours'
import Education from './channel/about-me/education'
import Recommandations from './channel/about-me/Recommandations'
import Noteuniv from './channel/project/noteuniv'
import Novembre from './channel/project/novembre'
import Goal2020 from './channel/goals/Goal2020'
import Goal2021 from './channel/goals/Goal2021'

export default function ChannelContent () {
  const navigation = useRecoilValue(navigationState)
  const [isBurgerOpen, setBurgerOpen] = useRecoilState(burgerMenuState)

  const components = {
    news: News,
    whyDiscord: WhyDiscord,
    contact: Contact,
    introduction: Introduction,
    skills: Skills,
    parcours: Parcours,
    education: Education,
    recommandations: Recommandations,
    noteuniv: Noteuniv,
    novembre: Novembre,
    goal2020: Goal2020,
    goal2021: Goal2021
  }

  const handleClick = () => {
    if (!isBurgerOpen) return
    const leftSide = document.querySelector('.left')
    const rightSideContent = document.querySelector('.right .content')
    const rightSide = document.querySelector('.right')
    leftSide.classList.remove('show')
    rightSide.style.backgroundColor = 'unset'
    rightSideContent.style.opacity = 1
    setBurgerOpen(false)
  }

  const ComponentToUse = components[navigation.path] || News
  return (
    <div className="content">
      <ChannelHeader channelName={navigation.name}/>
      <div className="content_room" onClick={() => handleClick()}>
        <ComponentToUse name={navigation.name}/>
      </div>
      <ChannelInput />
    </div>
  )
}
