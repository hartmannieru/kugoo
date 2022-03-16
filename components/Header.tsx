import React from 'react'
import styled from 'styled-components'
import MenuTop from './Menu/MenuTop'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderStyled>
      <MenuTop />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.nav`
  
`

export default Header