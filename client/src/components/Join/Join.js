import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const JoinOuterContainer = styled.div``
const JoinInnerContainer = styled.div``

const Join = () => {
  const [name, setName] = useState('')
  const [room, setRoom] = useState('')

  return (
    <JoinOuterContainer>
      <JoinInnerContainer>
        <h1>Join</h1>
        <div>
          <input
            type='text'
            placeholder=''
            onChange={e => setName(e.target.value)}
          />
        </div>
        <div>
          <input
            type='text'
            placeholder=''
            onChange={e => setRoom(e.target.value)}
          />
        </div>
        <Link
          onClick={e => (!name || !room ? e.preventDefault() : null)}
          to={`/chat?name=${name}&room=${room}`}
        >
          <button type='submit'>Sign In</button>
        </Link>
      </JoinInnerContainer>
    </JoinOuterContainer>
  )
}

export default Join
