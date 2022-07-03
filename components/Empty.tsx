import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import H3 from './Titles/H3';
import ButtonDefault from './Buttons/ButtonDefault';
import Image from 'next/image';

type Props = {
  title: string;
  description: string;
};

const Empty = ({ title, description }: Props) => {
  return (
    <EmptyBox>
      <EmptyImg>
        <Image src={'/images/empty.svg'} layout="fill" alt="empty"></Image>
      </EmptyImg>
      <H3 marginBottom={5}>{title}</H3>
      <EmptyText>{description}</EmptyText>
      <ButtonDefault>Перейти в каталог</ButtonDefault>
    </EmptyBox>
  );
};

const EmptyBox = styled.section`
  display: flex;
  align-items: center;
  flex-direction: column;
  padding: ${rem(45)};
  margin-bottom: ${rem(100)};
  background: ${(props) => props.theme.colors.background};
  border-radius: ${(props) => rem(props.theme.radius.empty)};
`;

const EmptyImg = styled.div`
  position: relative;
  width: ${rem(134)};
  height: ${rem(85)};
  margin-bottom: ${rem(25)};
`;
const EmptyText = styled.p`
  margin-bottom: ${rem(25)};
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
`;

export default Empty;
