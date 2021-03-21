import { useState } from 'react'

const handleTextChange = (e, setText) => {
  console.log(e.target.value)
  setText(e.target.value)
}

const handleKeyPress = async (e, text, setText) => {
  if (e.key !== 'Enter') return false
  if (text.length < 10) return false
  await sendMessage(text, setText)
}

const handleSendClick = async (text, setText) => {
  if (text.length < 10) return false
  await sendMessage(text, setText)
}

const sendMessage = async (text, setText) => {
  console.log('jean')
  const encodedParams = new URLSearchParams();

  encodedParams.set('content', text)
  const result = await fetch('https://discord.com/api/webhooks/823198705099866172/EBZUPYrgYS99su8vviT2xepl0CAp-YA1vY4YUv_hZ7nMQNuNl-hbQB9R8ikYf6U8Ao9i', {
    method: 'POST',
    body: {
      content: encodedParams
    }
  })
  console.log(result)
  if (result.status === 204) {
    setText('')
  } else {
    //throw error
  }
}

export default function ChannelInput ({path}) {
  const [text, setText] = useState('')
  if (path === 'contact') {
    return (
      <div className="content_input">
        <div className="content_input--box">
          <div className="input_box--left">
            <img src="/img/send.svg" className="send" alt="add File button" onClick={() => handleSendClick(text, setText)}/>
            <input type="text" value={text} placeholder="Taper votre message ici !" onKeyDown={(e) => handleKeyPress(e, text, setText)} onChange={(e) => handleTextChange(e, setText)}/>
          </div>
          <div className="input_box--icons">
            <img src="/img/linkedin.svg" alt=""/>
            <img src="/img/github.svg" alt=""/>
            <img src="/img/tel.svg" alt=""/>
          </div>
        </div>
      </div>
    )
  } else {

    return (
      <div className="content_input">
        <div className="content_input--box">
          <div className="input_box--left">
            <img src="/img/add_file.svg" alt="add File button"/>
            <p>Vous ne pouvez envoyer de message</p>
          </div>
          <div className="input_box--icons">
            <img src="/img/linkedin.svg" alt=""/>
            <img src="/img/github.svg" alt=""/>
            <img src="/img/tel.svg" alt=""/>
          </div>
        </div>
      </div>
    )
  }
}
