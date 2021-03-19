const handleClick = (channelName, link, setNavigation) => {
  setNavigation({
    'path': link,
    'name': channelName
  })
}

export default function ServerChannel ({ channelName, link, navigation, setNavigation}) {

  let isActive = false
  if (navigation.path === link) {
    isActive = true
  }

  return (
    <div
      className={`channel ${isActive ? 'channel_active' : ''}`}
      onClick={() => handleClick(channelName, link, setNavigation)}
    >
      <img src="/img/hashtag.svg" className="hashtag" alt=""/>
      <p>{ channelName }</p>
    </div>
  )
}
