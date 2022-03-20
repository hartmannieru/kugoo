import Container from 'components/Container'
import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import banner from 'images/pages/main/banner-1.webp'
import H2 from 'components/Titles/H2'
import Tabs from 'components/Tabs'
import Card from 'components/Card'
import Compilation from 'components/Compilation'
import dynamic from 'next/dynamic'
import items from './api/accordion-db'
import CardAdvantagesBox from 'components/CardAdvantagesBox'
const Accordion = dynamic(() => import('components/Accordion'), { ssr: false })
import LinkDefault from 'components/LinkDefault'

type Props = {}

const itemList1 = [
  {
    icon: 'icon-basket',
    title: 'Х товаров в каталоге',
    description: <>Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.</>
  },
  {
    icon: 'icon-money',
    title: '5 способов оплаты',
    description: <>Вы можете оплатить покупку наличными, картой, онлайн на сайте, через интернет-банкинг или в кредит от «Сбербанка».</>
  },
  {
    icon: 'icon-warranty',
    title: 'Полная документация и гарантия 1 год',
    description: <>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</>
  }, {
    icon: 'icon-sending',
    title: 'Полная документация и гарантия 1 год',
    description: <>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</>
  }, {
    icon: 'icon-percent',
    title: 'Полная документация и гарантия 1 год',
    description: <>При покупке вам выдается кассовый чек, товарный чек и гарантийный талон – эти документы дают право на гарантийное обслуживание.</>
  }, {
    img: '/images/card-adv-img.png',
    title: 'Больше в каталоге',
    description: <><LinkDefault text='Перейти' /></>,
  },
]

const itemList2 = [
  {
    icon: 'icon-basket',
    title: 'Х товаров в каталоге',
    description: <>2Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.</>
  },
  {
    icon: 'icon-money',
    title: 'Х товаров в каталоге',
    description: <>2Выбирайте товар, который подходит по цене и характеристикам. Если товара нет в наличии — мы сообщим вам о его поступлении.</>
  },
]

const MainPage = (props: Props) => {
  return (
    <MainPageStyled>
      <MainPageBanner></MainPageBanner>
      <Container>
        <H2 align='center' marginBottom={18}>
          Предлагаем самые выгодные цены <br /> на продукты Kugoo за счет прямых поставок
        </H2>
        <MainPageText>
          и заботимся об удобстве покупателей
        </MainPageText>
        <Tabs item1={<CardAdvantagesBox itemList={itemList1} />} item2={<CardAdvantagesBox itemList={itemList2} />} />
        <H2 align='center' marginBottom={34}>Отвечаем на вопросы <br /> покупателей</H2>
        <MainPageAccordion>
          <Accordion items={items} />
        </MainPageAccordion>
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

const MainPageText = styled.div`
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: ${rem(29)};
  margin-bottom: ${rem(51)};
  text-align: center;
`

const MainPageStyled = styled.div``

const MainPageBanner = styled.div`
  max-width: ${rem(1380)};
  min-height: ${rem(421)};
  margin: 0 auto;
  background: url(${banner.src}) no-repeat center center;
  background-size: cover;
  margin-bottom: ${rem(39)};
`

const MainPageAccordion = styled.div`
  display: flex;
  justify-content: center;
`

export default MainPage