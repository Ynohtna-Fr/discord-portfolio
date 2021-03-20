import ServerCategory from './ServerCategory'
import ServerInfo from './ServerInfo'
import ServerChannel from './ServerChannel'
import { useRecoilState } from 'recoil'
import { navigationState } from '../../recoil/atoms/navigation'

export default function ServerNavigation ({ leftSide }) {
  const [navigation, setNavigation] = useRecoilState(navigationState)
  return (
    <div className="navigation">
      <ServerInfo leftSide={leftSide}/>
      <div className="categories">
        <ServerCategory name="╔▬▬ Acceuil ▬▬╗" >
          <ServerChannel channelName="📢》nouveautées" link="news" navigation={navigation} setNavigation={setNavigation}/>
          <ServerChannel channelName="》pourquoi-discord" link="whyDiscord" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》me-contacter" link="contact" navigation={navigation} setNavigation={setNavigation} />
        </ServerCategory>

        <ServerCategory name="╔▬▬ A propos de moi ▬▬╗" >
          <ServerChannel channelName="》introduction" link="introduction" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》compétences" link="skills" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》parcours" link="parcours" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》éducation" link="education" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》recommendations" link="recommandations" navigation={navigation} setNavigation={setNavigation} />
        </ServerCategory>

        <ServerCategory name="╔▬▬ Projets ▬▬╗" >
          <ServerChannel channelName="》noteuniv" link="noteuniv" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》novembre" link="novembre" navigation={navigation} setNavigation={setNavigation} />
        </ServerCategory>

        <ServerCategory name="╔▬▬ Objectifs ▬▬╗" >
          <ServerChannel channelName="》objectifs-2020" link="goal2020" navigation={navigation} setNavigation={setNavigation} />
          <ServerChannel channelName="》objectifs-2021" link="goal2021" navigation={navigation} setNavigation={setNavigation} />
        </ServerCategory>
      </div>
    </div>
  )
}
