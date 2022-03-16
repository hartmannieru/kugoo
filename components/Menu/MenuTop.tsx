import Container from 'components/Container'
import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {}

const MenuTop = (props: Props) => {
  return (
    <MenuTopStyled>
      <Container>
        <MenuTopItem>
          <MenuTopLink>
            Сервис
          </MenuTopLink>
        </MenuTopItem>
      </Container>
    </MenuTopStyled>
  )
}

const MenuTopStyled = styled.nav`
  padding: ${rem(11)} 0;
  border: 1px solid #ECF3FF;
  color: red;
`

const MenuTopItem = styled.li`

`

const MenuTopLink = styled.a`

`

export default MenuTop