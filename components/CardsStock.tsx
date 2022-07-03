import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  children: React.ReactNode;
};

const CardsStock = ({ children }: Props) => {
  return <CardsStockBox>{children}</CardsStockBox>;
};

const CardsStockBox = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: ${rem(30)};
`;

export default CardsStock;
