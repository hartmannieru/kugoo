import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: React.ReactNode
}

const CardButton = ({children}: Props) => {
  return (
    <CardButtonStyled>{children}</CardButtonStyled>
  )
}

const CardButtonStyled = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(40)};
  height: ${rem(40)};
  border-radius: 50%;
  border: ${rem(1)} solid ${props => props.theme.colors.grey['200']};
  margin-right: ${rem(10)};
  &:last-child {
    margin-right: 0;
  }
`

export default CardButton