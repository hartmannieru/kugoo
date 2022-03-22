import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from 'components/Container'
import H2 from 'components/Titles/H2'
import Tabs from 'components/Tabs'
import Card from 'components/Card'
import Compilation from 'components/Compilation'
import dynamic from 'next/dynamic'
import items from './api/accordion-db'
import CardAdvantagesBox from 'components/CardAdvantagesBox'
const Accordion = dynamic(() => import('components/Accordion'), { ssr: false })
import LinkDefault from 'components/LinkDefault'
import Banner from 'components/Banner'
import BannerTitle from 'components/BannerTitle'
import BannerDescription from 'components/BannerDescription'
import ButtonDefault from 'components/Buttons/ButtonDefault'

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
  }
]

const itemList2 = [
  {
    icon: 'icon-basket',
    title: 'Ремонт от 1 дня',
    description: <>Устраним любую неисправность. Обычно делаем это за 1-3 дня, если ремонт сложный — предупредим заранее.</>
  },
  {
    icon: 'icon-money',
    title: 'Гидроизоляция для долгой службы',
    description: <>Покроем электросамокат изнутри специальным веществом, которое предотвратит попадание влаги и позволит кататься в любое время года.</>
  },
  {
    icon: 'icon-warranty',
    title: 'Ремонтируем только то, что сломалось',
    description: <>Не навязываем услуги, диагностируем и заранее обговариваем стоимость ремонта.</>
  },
  {
    icon: 'icon-sending',
    title: <>Даем гарантию <b>14</b> дней на ремонт</>,
    description: ''
  },
  {
    icon: 'icon-percent',
    title: <>Оригинальные запчасти</>,
    description: <>Благодаря прямой связи с производителем имеем в наличии все необходимые новые комплектующие для ремонта.</>
  },
  {
    img: '/images/card-adv-img-2.png',
    title: 'Больше в каталоге', 
    description: <><LinkDefault text='Перейти' /></>,
  },
]

const MainPage = (props: Props) => {
  return (
    <MainPageStyled>
      <Banner bg='/images/pages/main/banner-1.webp'>
        <BannerTitle>
          Электросамокаты Kugoo Kirin от официального дилера
        </BannerTitle>
        <BannerDescription>
          с бесплатной доставкой по РФ от 1 дня
        </BannerDescription>
        <ButtonDefault background='#fff' color='#6F73EE' href='catalog'>Перейти в католог</ButtonDefault>
      </Banner>
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

const MainPageAccordion = styled.div`
  display: flex;
  justify-content: center;
`

export default MainPage