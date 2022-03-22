import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from '../Container'
import FooterTitle from './FooterTitle'
import Link from 'next/link'
import Logo from 'components/Logo'
import Image from 'next/image'
import SocialItem from 'components/SocialItem'

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
          <FooterBoxSocialLeft>
            <Logo marginRight={59} />
            <FooterBoxBigSocial>
              <FooterBigSocial>
                <Image src='/images/google-play.svg' alt='google-play' width='130' height='31' />
              </FooterBigSocial>
              <FooterBigSocial>
              <Image src='/images/app-store.svg' alt='google-play' width='130' height='31' />
              </FooterBigSocial>
            </FooterBoxBigSocial>
          </FooterBoxSocialLeft>
          <FooterBoxSocialRight>
            <SocialItem href='https://vk.com/hartmanniecom' icon={'vk'} title={'Вконтакте'} description={'3 300'} />
            <SocialItem href='https://instagram.com/hartmanniecom' icon={'instagram'} title={'Instagram'} description={'10 602'} />
            <SocialItem href='https://youtube.com/hartmanniecom' icon={'youtube'} title={'YouTube'} description={'3 603'} />
            <SocialItem href='https://t.me/hartmanniecom' icon={'telegram'} title={'Telegram'} description={'300 603'} />
          </FooterBoxSocialRight>
        </FooterBoxSocial>
      </Container>
    </FooterStyled>
  )
}

const FooterBoxSocialRight = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
`

const FooterBoxSocialLeft = styled.div`
  display: flex;
  align-items: center;
`

const FooterBoxBigSocial = styled.div`
  display: flex;
  gap: ${rem(10)};
  align-items: center;
  height: ${rem(45)};
`

const FooterBigSocial = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(150)};
  height: inherit;
  position: relative;
  background: #fff;
  border-radius: ${rem(10)};
`

const FooterBoxSocial = styled.div`
  display: flex;
  justify-content: space-between;
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