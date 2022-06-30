import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  children: React.ReactNode;
};

const Articles = ({ children }: Props) => {
  return <ArticlesBox>{children}</ArticlesBox>;
};

const ArticlesBox = styled.div`
  display: grid;
  gap: ${rem(30)};
  grid-template-columns: repeat(auto-fit, minmax(${rem(350)}, 1fr));
`;

export default Articles;
