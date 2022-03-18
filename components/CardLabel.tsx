import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  value?: string
}

const CardLabel = ({value}: Props) => {
  let text = ''
  value === 'hit' ? text = 'Хит' : text = 'Новинка' 

  return (
    <CardLabelStyled value={value}>{text}</CardLabelStyled>
  )
}

const CardLabelStyled = styled.div<{value?: string}>`
  position: absolute;
  top: ${rem(10)};
  left: ${rem(10)};
  padding: ${rem(4)} ${rem(7)};
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: ${rem(41)};
  height: ${rem(25)};
  z-index: 2;
  border-radius: ${rem(5)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.value === 'hit' ? '#EE685F' : '#75D14A'};
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  text-transform: ${props => props.value === 'hit' ? 'uppercase' : 'normal'};
`

export default CardLabel