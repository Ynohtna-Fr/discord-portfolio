
export default function ServerInfo ({handler}) {

  return (
    <div className="info">
      <div className="layer"/>
      <h1>CV Anthony Adam</h1>
      <div id="close" onClick={() => handler()}><img src="/img/cross.svg" alt="fermer le menu"/></div>
    </div>
  )
}
