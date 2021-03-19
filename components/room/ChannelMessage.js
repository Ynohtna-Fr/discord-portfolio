export default function ChannelMessage (props) {
  return (
    <div className="content_room--message">
      <img src="/img/avatar.png" alt="moi" className="avatar"/>
      <div className="message_content">
        <p className="message_content--info">{ props.author } <span>{ props.date }</span></p>
        {props.children}
      </div>
    </div>
  )
}
