const handleClick = (channelName, link, setNavigation) => {
  setNavigation({
    'path': link,
    'name': channelName
  })
  setTimeout(() => {
    const content = document.querySelector('.content_room')
    content.scrollTop = 0 - content.scrollHeight
  }, 250)
}

export default function ServerChannel ({ channelName, link, navigation, setNavigation, menuHandler}) {

  let isActive = false
  if (navigation.path === link) {
    isActive = true
  }

  return (
    <div
      className={`channel ${isActive ? 'channel_active' : ''}`}
      onClick={() => {
        handleClick(channelName, link, setNavigation)
        menuHandler()
      }}
    >
      <img src="/img/hashtag.svg" className="hashtag" alt=""/>
      <p>{ channelName }</p>
    </div>
  )
}
