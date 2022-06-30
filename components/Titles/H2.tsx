import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';

type Props = {
  children: React.ReactNode;
  align?: string;
  marginBottom?: number;
};

const H2 = ({ children, align = 'left', marginBottom = 60 }: Props) => {
  return (
    <H2Styled align={align} marginBottom={marginBottom}>
      {children}
    </H2Styled>
  );
};

export const H2Styled = styled.h2<{ align?: string; marginBottom: number }>`
  font-style: normal;
  font-weight: 600;
  font-size: ${rem(35)};
  line-height: ${rem(51)};
  color: ${(props) => props.theme.colors.black};
  text-transform: uppercase;
  text-align: ${(props) => props.align};
  margin-bottom: ${(props) => rem(props.marginBottom)};
`;

export default H2;
