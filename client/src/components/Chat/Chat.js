import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import styled from 'styled-components'

import InfoBar from '../InfoBar/InfoBar'
import Messages from '../Messages/Messages'
import Form from '../Form/Form'

let socket

const Chat = ({ location }) => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')
  const [message, setMessage] = useState('')
  const [messages, setMessages] = useState([[]])
  const ENDPOINT = 'localhost:5000'

  useEffect(() => {
    const { name, room } = queryString.parse(location.search)

    socket = io(ENDPOINT)

    setName(name)
    setRoom(room)

    socket.emit('join', { name, room }, () => {})
    console.log(socket)
    return () => {
      socket.emit('disconnect')
      socket.off()
    }
  }, [ENDPOINT, location.search])

  useEffect(() => {
    socket.on('message', message => {
      setMessages([...messages, message])
    })
  }, [messages])

  const sendMessage = e => {
    e.preventDefault()
    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('')
      })
    }
  }

  console.log(message, messages)

  return (
    <ChatContainer>
      <InfoBar room={room} />
      <Messages messages={messages} />
      <Form
        message={message}
        sendMessage={sendMessage}
        setMessage={setMessage}
      />
    </ChatContainer>
  )
}

const ChatContainer = styled.div`
  max-height: 500px;
`

export default Chat
