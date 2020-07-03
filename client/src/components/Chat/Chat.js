import React, { useEffect, useState } from 'react'
import queryString from 'query-string'
import io from 'socket.io-client'
import styled from 'styled-components'

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

    socket.emit('join', { name, room })
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
    console.log('yoyoyoyoyo')
    if (message) {
      socket.emit('sendMessage', message, () => {
        setMessage('')
      })
    }
  }

  console.log(message, messages)

  return (
    <ChatOuterContainer>
      <ChatInnerContainer>
        <input
          value={message}
          onChange={e => setMessage(e.target.value)}
          onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
        />
      </ChatInnerContainer>
    </ChatOuterContainer>
  )
}

const ChatOuterContainer = styled.div``

const ChatInnerContainer = styled.div``

export default Chat
