import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string,
  marginBottom: number
}

const FooterTitle = ({children, marginBottom}: Props) => {
  return (
    <FooterTitleStyled marginBottom={marginBottom}>{children}</FooterTitleStyled>
  )
}

const FooterTitleStyled = styled.h4<{marginBottom: number}>`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(26)};
  margin-bottom: ${props => props.marginBottom}px;
  color: ${props => props.theme.colors.black};
`

export default FooterTitle