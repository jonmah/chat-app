import React from 'react'

const Form = ({ message, sendMessage, setMessage }) => (
  <form>
    <input
      onChange={e => setMessage(e.target.value)}
      onKeyPress={e => (e.key === 'Enter' ? sendMessage(e) : null)}
      placeholder='Type your message...'
      value={message}
      type='text'
    />
    <button onClick={e => sendMessage(e)}>Send</button>
  </form>
)

export default Form
