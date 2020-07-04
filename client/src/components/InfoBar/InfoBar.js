import React from 'react'
import styled from 'styled-components'

const InfoBar = ({ room }) => (
  <InfoBarContainer>
    <StatusContainer>
      <img src='http://bit.ly/firstIcon' alt='online' />
      <h3>{room}</h3>
    </StatusContainer>
    <CloseContainer>
      <a href='/'>
        <img src='http://bit.ly/secondIcon' alt='close' />
      </a>
    </CloseContainer>
  </InfoBarContainer>
)

const InfoBarContainer = styled.div``
const StatusContainer = styled.div``
const CloseContainer = styled.div``

export default InfoBar
