import React from 'react'
import styled from 'styled-components'

const InfoBar = ({ room }) => (
  <InfoBarContainer>
    <StatusContainer>
      <img src='http://bit.ly/firstIcon' />
      <h3>{room}</h3>
    </StatusContainer>
    <CloseContainer>
      <img src='http://bit.ly/secondIcon' />
    </CloseContainer>
  </InfoBarContainer>
)

const InfoBarContainer = styled.div``
const StatusContainer = styled.div``
const CloseContainer = styled.div``

export default InfoBar
