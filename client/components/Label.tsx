import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string,
  marginLeft?: number
}

const Label = ({children, marginLeft}: Props) => {
  return (
    <LabelStyled marginLeft={marginLeft}>{children}</LabelStyled>
  )
}

const LabelStyled = styled.span<{marginLeft?: number}>`
  display: inline-flex;
  align-items: center;
  padding: ${rem(0)} ${rem(6)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  border-radius: ${rem(300)};
  font-size: ${rem(10)};
  line-height: ${rem(20)};
  font-weight: 400;
  margin-left: ${props => props.marginLeft}px;
`

export default Label