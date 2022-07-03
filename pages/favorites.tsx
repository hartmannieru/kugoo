import Container from 'components/Container';
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H2 from 'components/Titles/H2';
import Empty from 'components/Empty';

type Props = {};

const FavoritesPage = (props: Props) => {
  return (
    <FavoritesPageBox>
      <Container>
        <H2 marginBottom={40}>избранное</H2>
        <Empty
          title={'В избранном пусто'}
          description={'Добавьте товары в избранное, чтобы просмотреть или купить их позже'}
        />
      </Container>
    </FavoritesPageBox>
  );
};

const FavoritesPageBox = styled.div``;

export default FavoritesPage;
