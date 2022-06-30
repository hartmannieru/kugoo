import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  labelColor?: string
  children: string
}

const CardLabel = ({labelColor, children}: Props) => {
  return (
    <CardLabelStyled labelColor={labelColor}>{children}</CardLabelStyled>
  )
}

const CardLabelStyled = styled.div<{labelColor?: string}>`
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
  background: ${props => props.labelColor === 'green' ? '#EE685F' : '#75D14A'};
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  text-transform: ${props => props.labelColor === 'green' ? 'uppercase' : 'normal'};
`

export default CardLabel