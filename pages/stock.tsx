import Container from 'components/Container';
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Breadcrumbs from 'components/Breadcrumbs';
import CardsStock from 'components/CardsStock';
import CardStock from 'components/CardStock';

type Props = {};

const StockPage = (props: Props) => {
  return (
    <StockPageBox>
      <Container>
        <Breadcrumbs />
      </Container>
      <Container>
        <CardsStock>
          <CardStock />
          <CardStock />
          <CardStock />
          <CardStock />
        </CardsStock>
      </Container>
    </StockPageBox>
  );
};

const StockPageBox = styled.div``;

export default StockPage;
