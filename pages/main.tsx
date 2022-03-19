import Container from 'components/Container'
import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import banner from 'images/pages/main/banner-1.webp'
import H2 from 'components/Titles/H2'
import Card from 'components/Card'
import Compilation from 'components/Compilation'

type Props = {}

const MainPage = (props: Props) => {
  return (
    <MainPageStyled>
      <MainPageBanner>

      </MainPageBanner>
      <Container>
        <H2 align='center'>Часто покупают</H2>
        <Compilation>
          <Card labelText='Хит' labelColor='green' />
          <Card labelText='Новинка' labelColor='red' />
          <Card labelText='Хит' labelColor='green' />
          <Card labelText='Новинка' labelColor='red' />
        </Compilation>
      </Container>
    </MainPageStyled>
  )
}

const MainPageStyled = styled.div``

const MainPageBanner = styled.div`
  max-width: ${rem(1380)};
  min-height: ${rem(421)};
  margin: 0 auto;
  background: url(${banner.src}) no-repeat center center;
  background-size: cover;
  margin-bottom: ${rem(39)};
`

export default MainPage