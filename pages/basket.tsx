import Container from 'components/Container';
import React, { useRef, useState } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import styled from 'styled-components';
import { rem } from 'polished';
import H2 from 'components/Titles/H2';
import Empty from 'components/Empty';

import 'swiper/css';
import 'swiper/css/pagination';

import Card from 'components/Card';

type Props = {};

const BasketPage = (props: Props) => {
  return (
    <BasketPageBox>
      <Container>
        <H2 marginBottom={40}>Моя корзина</H2>
        <Empty />
        <H2 marginBottom={50}>Рекомендуем вам</H2>
        <BasketPageSlider>
          <Swiper slidesPerView={5.4} spaceBetween={30} className="mySwiper">
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
            <SwiperSlide>
              <Card labelText="Хит" labelColor="green" />
            </SwiperSlide>
          </Swiper>
        </BasketPageSlider>
      </Container>
    </BasketPageBox>
  );
};

const BasketPageBox = styled.div``;
const BasketPageSlider = styled.div`
  /* width: 100vw; */
  width: ${rem(1500)};
`;

export default BasketPage;
