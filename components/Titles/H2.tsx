import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string
}

const H2 = ({children}: Props) => {
  return (
    <H2Styled>{children}</H2Styled>
  )
}

const H2Styled = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(35)};
  line-height: ${rem(51)};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
`

export default H2