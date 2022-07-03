import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Image from 'next/image';
import ButtonDefault from './Buttons/ButtonDefault';

type Props = {};

const CardStock = (props: Props) => {
  return (
    <CardStockBox>
      <CardStockImg>
        <Image src={'/images/stock-1.png'} alt={'img'} layout="fill" />
      </CardStockImg>
      <CardStockContent>
        <CardStockDate>Срок проведения: 15.08 - 01.09</CardStockDate>
        <CardStockTitle>До 01.09 выгода 2880 RUB при покупкеKugoo Kirin M4 Pro 13</CardStockTitle>
        <CardStockDescription>
          Купите любой электросамокат с гидроизоляцией или комплексом с 15.07 по 15.08 и становитесь
          участником розыгрыша!
        </CardStockDescription>
        <ButtonDefault>Принять участие в акции</ButtonDefault>
      </CardStockContent>
    </CardStockBox>
  );
};

const CardStockBox = styled.div`
  border-radius: ${rem(10)};
  min-height: ${rem(367)};
  background: #f4f7fb;
  display: grid;
  grid-template-columns: ${rem(285)} 1fr;
`;

const CardStockImg = styled.div`
  position: relative;
`;

const CardStockContent = styled.div`
  padding: ${rem(30)};
`;

const CardStockDate = styled.div``;
const CardStockTitle = styled.div``;
const CardStockDescription = styled.div``;

export default CardStock;
