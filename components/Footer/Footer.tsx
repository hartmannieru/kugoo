import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from '../Container'
import FooterTitle from './FooterTitle'
import Link from 'next/link'
import Logo from 'components/Logo'

type Props = {}

const Footer = (props: Props) => {
  return (
    <FooterStyled>
      <Container>
        <FooterBox>
          <FooterBoxItem>
            <FooterTitle marginBottom={17}>Каталог товаров</FooterTitle>
            <FooterItems>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Электросамокаты
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Электроскутеры
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Электровелосипеды
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Электровелосипеды
                  </FooterLink>
                </Link>
              </FooterItem>
            </FooterItems>
          </FooterBoxItem>
          <FooterBoxItem>
            <FooterTitle marginBottom={17}>Покупателям</FooterTitle>
            <FooterItems>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Сервисный центр
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Доставка и оплата
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Рассрочка
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/' passHref>
                  <FooterLink>
                    Тест-драйв
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/blog' passHref>
                  <FooterLink>
                    Блог
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/blog' passHref>
                  <FooterLink>
                    Сотрудничество
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/blog' passHref>
                  <FooterLink>
                    Контакты
                  </FooterLink>
                </Link>
              </FooterItem>
              <FooterItem>
                <Link href='/blog' passHref>
                  <FooterLink>
                    Акции
                  </FooterLink>
                </Link>
              </FooterItem>
            </FooterItems>
          </FooterBoxItem>
          <FooterBoxItem>
            <FooterTitle marginBottom={17}>Контакты</FooterTitle>
          </FooterBoxItem>
        </FooterBox>
        <FooterBoxSocial>
          <Logo marginRight={59} />
        </FooterBoxSocial>
      </Container>
    </FooterStyled>
  )
}

const FooterBoxSocial = styled.div`
  padding-bottom: ${rem(36)};
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.greyrgba['600']};
  margin-bottom: ${rem(19)};
`

const FooterStyled = styled.footer`
  background: ${props => props.theme.colors.background};
`
const FooterBox = styled.div`
  display: grid;
  padding: ${rem(46)} 0;
  margin-bottom: ${rem(36)};
  grid-template-columns: ${rem(255)} ${rem(370)} 1fr;
  border-bottom: ${rem(1)} solid ${props => props.theme.colors.greyrgba['600']};
`

const FooterBoxItem = styled.div`
  margin-right: ${rem(110)};
`

const FooterItems = styled.ul`
  height: ${rem(120)};
  display: flex;
  flex-direction: column; 
  flex-wrap: wrap;
  gap: 0 ${rem(50)};
`

const FooterItem = styled.li`
`

const FooterLink = styled.a`
  display: block;
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  color: ${props => props.theme.colors.grey['600']};
  margin-bottom: ${rem(10)};
`

export default Footer