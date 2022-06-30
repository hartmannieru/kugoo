import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import { H2Styled } from './H2';

type Props = {
  children: React.ReactNode;
  align?: string;
  marginBottom?: number;
};

const H3 = ({ children, align = 'left', marginBottom = 60 }: Props) => {
  return (
    <H3Styled align={align} marginBottom={marginBottom}>
      {children}
    </H3Styled>
  );
};

const H3Styled = styled(H2Styled)<{ align?: string; marginBottom: number }>`
  font-size: ${rem(25)};
  line-height: ${rem(36)};
`;

export default H3;
