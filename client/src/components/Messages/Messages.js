import React from 'react'
import ScrollToBottom from 'react-scroll-to-bottom'
import styled from 'styled-components'

const Messages = ({ messages, name }) => (
  <ScrollToBottom>
    <MessagesContainer>
      {messages.map((m, i) => (
        <MessageContainer key={i}>
          {m.user}: {m.text}
        </MessageContainer>
      ))}
    </MessagesContainer>
  </ScrollToBottom>
)

const MessagesContainer = styled.div``

const MessageContainer = styled.div`
  background: blue;
  color: white;
  margin: 1rem;
`

export default Messages
