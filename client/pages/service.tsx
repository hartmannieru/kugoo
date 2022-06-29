import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Banner from 'components/Banner'
import BannerTitle from 'components/BannerTitle'
import BannerDescription from 'components/BannerDescription'
import ButtonDefault from 'components/Buttons/ButtonDefault'
import Container from 'components/Container'

type Props = {}

const ServicePage = (props: Props) => {
  return (
    <ServicePageStyled>
      <Banner bg='/images/pages/service/banner-1.png'>
        <BannerTitle>
          Ремонт и обслуживание товаров Kugoo Kirin
        </BannerTitle>
        <BannerDescription>
          в фирменных сервисых центрах
        </BannerDescription>
        <ButtonDefault background='#fff' color='#F3A712' href='catalog'>Записаться</ButtonDefault>
      </Banner>
    </ServicePageStyled>
  )
}

const ServicePageStyled = styled.div``

export default ServicePage