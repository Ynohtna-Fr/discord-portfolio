import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import { sendState } from '../../recoil/atoms/send'

const handleTextChange = (e, setText) => {
  setText(e.target.value)
}

const handleKeyPress = async (e, text, setText, setSendStatus) => {
  if (e.key !== 'Enter') return false
  if (text.length < 10) {
    setSendStatus({error: 'Ton message doit faire plus de 10 caractères !'})
    return false
  }
  sendMessage(text, setText, setSendStatus)
}

const handleSendClick = async (text, setText, setSendStatus) => {
  if (text.length < 10) {
    setSendStatus({error: 'Ton message doit faire plus de 10 caractères !'})
    return false
  }
  sendMessage(text, setText, setSendStatus)
}

const sendMessage = (text, setText, setSendStatus) => {
  const message = {"content": text}
  fetch('https://discord.com/api/webhooks/823198705099866172/EBZUPYrgYS99su8vviT2xepl0CAp-YA1vY4YUv_hZ7nMQNuNl-hbQB9R8ikYf6U8Ao9i', {
    "method": 'POST',
    "headers": {
      'Content-Type': 'application/json'
    },
    "body": JSON.stringify(message)
  }).then(response => {
    if (response.status === 204) {
      setText('')
      setSendStatus('ok')
    } else {
      setSendStatus({error: 'Une erreur est survenu. Merci de réssayer plus tard.'})
    }
  })
}

function handleInputClick (instance, hasAlreadyClicked) {
  // the user already clicked on the input, so no need to trigger event
  if (hasAlreadyClicked) return false;
   instance.action('257403e8-f9fa-4714-8cb7-b05fdcd43d29', {
     key: 'Click', value: 1
   })
}

const handleLink = (instance, link) => {
  instance.action('6058f56c-55c2-473b-8af2-4835fe020c07', { key: link, value: 1 })
}

export default function ChannelInput ({path}) {
  const [text, setText] = useState('')
  const setSendStatus = useSetRecoilState(sendState)
  let instance
  let hasAlreadyClicked = false;
  if (typeof window !== 'undefined') {
     instance = ackeeTracker.create('https://stats.anthony-adam.fr', {
      detailed: false,
      ignoreLocalhost: false,
      ignoreOwnVisits: false
    })
  }

  if (path === 'contact') {
    return (
      <div className="content_input">
        <div className="content_input--box">
          <div className="input_box--left">
            <img src="/img/send.svg" className="send" alt="add File button" onClick={() => handleSendClick(text, setText, setSendStatus)}/>
            <input type="text" value={text} placeholder="Taper votre message ici !" onClick={() => handleInputClick(instance, hasAlreadyClicked)} onKeyDown={(e) => handleKeyPress(e, text, setText, setSendStatus)} onChange={(e) => handleTextChange(e, setText)}/>
          </div>
          <div className="input_box--icons">
            <a href="https://www.linkedin.com/in/anthony-adam/" target="_BLANK" onClick={() => handleLink(instance, 'linkedin')}>
              <img src="/img/linkedin.svg"/>
            </a>
            <a href="https://github.com/Ynohtna-Fr" target="_BLANK" onClick={() => handleLink(instance, 'github')}>
              <img src="/img/github.svg"/>
            </a>
            <a href="tel:0652728018" onClick={() => handleLink(instance, 'tel')}>
              <img src="/img/tel.svg"/>
            </a>
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
            <a href="https://www.linkedin.com/in/anthony-adam/" target="_BLANK" onClick={() => handleLink(instance, 'linkedin')}>
              <img src="/img/linkedin.svg"/>
            </a>
            <a href="https://github.com/Ynohtna-Fr" target="_BLANK" onClick={() => handleLink(instance, 'github')}>
              <img src="/img/github.svg"/>
            </a>
            <a href="tel:0652728018" onClick={() => handleLink(instance, 'tel')}>
              <img src="/img/tel.svg"/>
            </a>
          </div>
        </div>
      </div>
    )
  }
}
