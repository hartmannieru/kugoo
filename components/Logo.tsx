import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'

type Props = {
  marginRight: number
}

const Logo = ({marginRight}: Props) => {
  return (
    <Link href='/' passHref>
      <LogoStyled marginRight={marginRight}>Kugoo</LogoStyled>    
    </Link>
  )
}

const LogoStyled = styled.a<{marginRight: number}>`
  font-weight: 700;
  font-size: ${rem(30)};
  line-height: ${rem(43)};
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  margin-right: ${props => props.marginRight}px;
`

export default Logo