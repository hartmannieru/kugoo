import Container from 'components/Container'
import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import plus from 'images/plus.svg'
import Image from 'next/image'
import Telegram from 'images/menutop/telegram.svg'
import Viber from 'images/menutop/viber.svg'
import WhatsApp from 'images/menutop/whatsapp.svg'
import Link from 'next/link'

type Props = {}

const MenuTop = (props: Props) => {
  return (
    <MenuTopStyled>
      <Container>
        <MenuTopBox>
          <MenuTopLeft>
            <MenuTopList>
              <MenuTopItem>
                <Link  href='/service' passHref>
                  <MenuTopLink>
                    Сервис
                  </MenuTopLink>
                </Link>
              </MenuTopItem>
              <MenuTopItem>
                <Link href='/cooperation' passHref>
                  <MenuTopLink>
                    Сотрудничество
                  </MenuTopLink>
                </Link>
              </MenuTopItem>
              <MenuTopItem>
                <MenuTopLink href='#'>
                  Заказать звонок
                </MenuTopLink>
              </MenuTopItem>
            </MenuTopList>
            <MenuTopSocial>
              <MenuTopSocialItem href='#'>
                <Image src={Viber} alt="sfds" />
              </MenuTopSocialItem>
              <MenuTopSocialItem href='#'>
                <Image src={WhatsApp} alt="sfds" />
              </MenuTopSocialItem>
              <MenuTopSocialItem href='#'>
                <Image src={Telegram} alt="sfds" />
              </MenuTopSocialItem>
            </MenuTopSocial>
          </MenuTopLeft>
          <MenuTopRight>
            <MenuTopPhone href="tel:88005055461">
              +7 (800) 505-54-61
            </MenuTopPhone>
            <MenuTopPlus href='#' />
          </MenuTopRight>
        </MenuTopBox>
      </Container>
    </MenuTopStyled>
  )
}

const MenuTopStyled = styled.nav`
  padding: ${rem(11)} 0;
  background: ${props => props.theme.colors.white};
  border: 1px solid #ECF3FF;
  margin-bottom: ${rem(30)};
  @media (max-width: ${props => props.theme.breakpoints.x}) {
  }
`

const MenuTopBox = styled.div`
  display: flex;
  justify-content: space-between;
`

const MenuTopLeft = styled.div`
  display: flex;
  align-items: center;
`

const MenuTopSocial = styled.div`
  display: flex;
`
const MenuTopSocialItem = styled.a`
  display: flex;
  width: ${rem(12)};
  height: ${rem(12)};
  margin-right: ${rem(9)};
  &:last-child {
    margin-right: 0;
  }
`

const MenuTopRight = styled.div`
  display: flex;
  align-items: center;
`

const MenuTopPhone = styled.a`
  font-weight: 500;
  font-size: ${rem(12)};
  color: ${props => props.theme.colors.black};
  margin-right: ${rem(9)};
`

const MenuTopPlus = styled.a`
  display: flex;
  width: ${rem(18)};
  height: ${rem(18)};
  background: url(${plus.src}) no-repeat center center;
  background-size: contain;
`

const MenuTopList = styled.ul`
  display: flex;
  margin-right: ${rem(30)};
`

const MenuTopItem = styled.li`
  margin-right: ${rem(30)};
  &:last-child {
    margin-right: 0;
  }
`

const MenuTopLink = styled.a`
  color: ${props => props.theme.colors.grey["600"]};
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
`

export default MenuTop