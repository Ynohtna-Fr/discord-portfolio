import ServerCategory from './ServerCategory'
import ServerInfo from './ServerInfo'
import ServerChannel from './ServerChannel'
import { useRecoilState, useSetRecoilState } from 'recoil'
import { navigationState } from '../../recoil/atoms/navigation'
import { burgerMenuState } from '../../recoil/atoms/navigation'
import ServerLegals from "./ServerLegals";

export default function ServerNavigation () {
  const [navigation, setNavigation] = useRecoilState(navigationState)
  const setBurgerOpen = useSetRecoilState(burgerMenuState)

  const handleBurger = () => {
    const leftSide = document.querySelector('.left')
    const rightSide = document.querySelector('.right')
    const rightSideContent = document.querySelector('.right .content')
    leftSide.classList.remove('show-nav')
    rightSide.style.backgroundColor = 'unset'
    rightSideContent.style.opacity = 1
    setBurgerOpen(false)
  }

  return (
    <div className="navigation">
      <ServerInfo handler={handleBurger}/>
      <div className="categories">
        <ServerCategory name="╔▬▬ Accueil ▬▬╗" >
          <ServerChannel channelName="📢》nouveautés" link="news" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="🤔》pourquoi-discord" link="whyDiscord" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="📮》me-contacter" link="contact" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
        </ServerCategory>

        <ServerCategory name="╔▬▬ A propos de moi ▬▬╗" >
          <ServerChannel channelName="🤙》introduction" link="introduction" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="💪》compétences" link="skills" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="🎒》parcours" link="parcours" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="🎓》éducation" link="education" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="🤝》recommendations" link="recommandations" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
        </ServerCategory>

        <ServerCategory name="╔▬▬ Projets ▬▬╗" >
          <ServerChannel channelName="🔥》erosya" link="erosya" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="📝》noteuniv" link="noteuniv" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="⚡》novembre" link="novembre" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
        </ServerCategory>

        <ServerCategory name="╔▬▬ Objectifs ▬▬╗" >
          <ServerChannel channelName="🎉》objectifs-2020" link="goal2020" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="✨》objectifs-2021" link="goal2021" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
        </ServerCategory>

        <ServerCategory name="╔▬▬ No-Context ▬▬╗" >
          <ServerChannel channelName="🤸》truc-en-vrac" link="bulkInformation" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
          <ServerChannel channelName="🥚》easter-eggs" link="easterEggs" navigation={navigation} setNavigation={setNavigation} menuHandler={handleBurger}/>
        </ServerCategory>
      </div>
      <ServerLegals />
    </div>
  )
}
