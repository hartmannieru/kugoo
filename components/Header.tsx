import React from 'react'
import styled from 'styled-components'

type Props = {}

const Header = (props: Props) => {
  return (
    <HeaderStyled>Header</HeaderStyled>
  )
}

const HeaderStyled = styled.nav`
  color: red;
`

export default Header