export default function ChannelHeader ({ channelName }) {
  return (
    <div className="content_header">
      <div className="content_header--name">
        <img src="/img/hashtag.svg"/>
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
