export default function ChannelDefaultMessage ({name, description}) {
  return (
    <div className="content_room--default">
      <div>
        <img src="/img/hashtag-white.svg" alt=""/>
      </div>
      <h2>Bienvenue sur #{name} !</h2>
      <p>{description}</p>
    </div>
  )
}
