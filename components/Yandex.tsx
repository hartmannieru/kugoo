import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'

type Props = {}

const Yandex = (props: Props) => {
  return (
    <YandexStyled>
      <YandexLogo>
        <Image src='/images/yandex-logo.svg' alt='' width='19' height='29'  />
      </YandexLogo>
      <YandexContent>
        <YandexTitle>
          Яндекс отзывы
        </YandexTitle>
        <YandexStarts>
          <YandexStar>
            <Image src='/images/star.svg' alt='' layout='fill'  />
          </YandexStar>
          <YandexStarCount>
            4,9
          </YandexStarCount>
        </YandexStarts>
      </YandexContent>
    </YandexStyled>
  )
}

const YandexStarCount = styled.div`
  font-weight: 600;
  font-size: ${rem(25)};
  line-height: ${rem(36)};
  text-transform: uppercase;
`

const YandexStar = styled.div`
  width: ${rem(14)};
  height: ${rem(14)};
  position: relative;
  margin-right: ${rem(5)};
`

const YandexStarts = styled.div`
  display: flex;
  align-items: center;
`

const YandexTitle = styled.div`
  position: relative;
  top: ${rem(3)};
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  color: ${props => props.theme.colors.grey['600']};
`

const YandexContent = styled.div``

const YandexLogo = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(56)};
  height: ${rem(56)};
  background: #FC3F1D;
  border-radius: ${rem(5)};
  margin-right: ${rem(18)};
  &::before {
    content: '';
    position: absolute;
    top: ${rem(13)};
    left: 50%;
    transform: translateX(-50%);
    width: ${rem(48)};
    height: ${rem(48)};
    background: #FC3F1D;
    opacity: 0.5;
    filter: blur(${rem(15)});
    border-radius: ${rem(5)};
  }
`

const YandexStyled = styled.div`
  padding: ${rem(10)};
  display: inline-flex;
  min-width: ${rem(190)};
  align-items: center;
  background: #FFFFFF;
  border: ${rem(1)} solid rgba(93, 108, 123, 0.1);
  box-sizing: border-box;
  border-radius: ${rem(5)};
`

export default Yandex