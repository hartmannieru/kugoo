import React from 'react'
import styled from 'styled-components'
import Menu from './Menu/Menu'
import MenuTop from './Menu/MenuTop'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderStyled>
      <MenuTop />
      <Menu />
    </HeaderStyled>
  )
}

const HeaderStyled = styled.nav`
  
`

export default Header