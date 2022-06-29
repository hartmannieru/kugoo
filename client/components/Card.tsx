import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'
import ItemImg from 'images/card/item-1.png'
import CardButton from './CardButton'
import ButtonDefault from './Buttons/ButtonDefault'

import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper'
import 'swiper/css';
import 'swiper/css/navigation';
import "swiper/css/pagination";
import CardLabel from './CardLabel'
import ButtonComparison from './ButtonComparison'

type Props = {
  labelText: string,
  labelColor?: string
}

const Card = ({labelText, labelColor}: Props) => {
  return (
    <CardStyled>
      <CardBoxSlider>
        <CardLabel labelColor={labelColor}>
          {labelText}
        </CardLabel>
        <ButtonComparison />
        <CardSlider>
          <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
            <SwiperSlide>
              <Image src={ItemImg} alt='' />
            </SwiperSlide>
            <SwiperSlide>
              <Image src={ItemImg} alt='' />
            </SwiperSlide>
          </Swiper>
        </CardSlider>
      </CardBoxSlider>
      <CardContent>
        <CardTitle>Kugoo Kirin M4</CardTitle>
        <CardCharacteristics>
          <CardCharacteristicsItem>
            <CardCharacteristicsImg>
              <Image src={'/images/card/icon-1.svg'} width='18' height='18' alt='' />
            </CardCharacteristicsImg>
            <CardCharacteristicsText>
              2000&nbsp;mAh
            </CardCharacteristicsText>
          </CardCharacteristicsItem>
          <CardCharacteristicsItem>
            <CardCharacteristicsImg>
              <Image src={'/images/card/icon-2.svg'} width='11' height='18' alt='' />
            </CardCharacteristicsImg>
            <CardCharacteristicsText>
              1,2 л.с.
            </CardCharacteristicsText>
          </CardCharacteristicsItem>
          <CardCharacteristicsItem>
            <CardCharacteristicsImg>
              <Image src={'/images/card/icon-3.svg'} width='18' height='18' alt='' />
            </CardCharacteristicsImg>
            <CardCharacteristicsText>
              60 км/ч
            </CardCharacteristicsText>
          </CardCharacteristicsItem>
          <CardCharacteristicsItem>
            <CardCharacteristicsImg>
              <Image src={'/images/card/icon-4.svg'} width='18' height='18' alt='' />
            </CardCharacteristicsImg>
            <CardCharacteristicsText>
              5 часов
            </CardCharacteristicsText>
          </CardCharacteristicsItem>
        </CardCharacteristics>
        <CardBuyBox>
          <CardPriceBox>
            <CardPriceOld>
              39 900 ₽
            </CardPriceOld>
            <CardPriceActual>
              29 900 ₽
            </CardPriceActual>
          </CardPriceBox>
          <CardButtonBox>
            <CardButton>
              <Image src={'/images/card/icon-5.svg'} width='20' height='20' alt='' />
            </CardButton>
            <CardButton>
              <Image src={'/images/card/icon-6.svg'} width='20' height='20' alt='' />
            </CardButton>
          </CardButtonBox>
        </CardBuyBox>
        <ButtonDefault width={'100%'} background={'#6F73EE'} color={'#ffffff'} href={''}>Купить в 1 клик</ButtonDefault>
      </CardContent>
    </CardStyled>
  )
}

const CardButtonBox = styled.div`
  display: flex;
`

const CardPriceActual = styled.div`
  font-weight: 600;
  font-size: ${rem(20)};
  line-height: ${rem(29)};
  color: ${props => props.theme.colors.black};
`

const CardPriceOld = styled.div`
  font-weight: 500;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  text-decoration-line: line-through;
  color: ${props => props.theme.colors.grey['600']};
`

const CardPriceBox = styled.div`

`

const CardBuyBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${rem(16)};
` 

const CardCharacteristicsText = styled.p`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(16)};
`

const CardCharacteristicsImg = styled.div`
  width: ${rem(18)};
  height: ${rem(18)};
  text-align: center;
`

const CardCharacteristicsItem = styled.div`
  display: flex;
  align-items: center;
  gap: ${rem(10)};
  color: ${props => props.theme.colors.grey['600']};
`

const CardCharacteristics = styled.div`
  display: grid;
  gap: ${rem(16)} ${rem(24)};
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: ${rem(25)};
`

const CardSlider = styled.div`

`

const CardTitle = styled.h4`
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: ${rem(26)};
  margin-bottom: ${rem(20)};
`

const CardContent = styled.div`
  padding: ${rem(20)} ${rem(24)};
`

const CardBoxSlider = styled.div`
  position: relative;
`

const CardStyled = styled.div`
  max-width: ${rem(255)};
  width: 100%;
  border-radius: ${rem(10)};
  overflow: hidden;
  border: ${rem(1)} solid ${props => props.theme.colors.border};
`

export default Card