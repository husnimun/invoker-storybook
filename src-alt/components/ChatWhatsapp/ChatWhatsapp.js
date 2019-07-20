import React from 'react';
import {mobileCheck} from './../../utils/mobileCheck'

const ChatWhatsapp = ({
  children,
  phone,
  message,
  restProps
  }) => {

  const [mobile, setMobile] = React.useState(false)
  const [link, setLink] = React.useState('https://web.whatsapp.com/send')

  React.useEffect(() => {
    setMobile(mobileCheck())
  }, [])

  React.useEffect(() => {
    mobile
      ? setLink('https://api.whatsapp.com/send')
      : setLink('https://web.whatsapp.com/send')
  }, [mobile])

  let appendNumber = phone ? `?phone=${phone}` : null
  let appendMessage = phone && message ? `&text=${message}` : null

  return (
    <a
      href={link+appendNumber+appendMessage}
      target="_blank"
      rel="noreferrer noopener"
      {...restProps}>
      {children}
    </a>
  )
}

export default ChatWhatsapp
