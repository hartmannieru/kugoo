import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string,
  align?: string
}

const H2 = ({children, align = 'left'}: Props) => {
  return (
    <H2Styled align={align}>{children}</H2Styled>
  )
}

const H2Styled = styled.h2<{align?: string}>`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(35)};
  line-height: ${rem(51)};
  color: ${props => props.theme.colors.black};
  text-transform: uppercase;
  text-align: ${props => props.align};
  margin-bottom: ${rem(60)};
`

export default H2