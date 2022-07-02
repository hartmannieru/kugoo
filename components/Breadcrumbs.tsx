import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';

type Props = {
  mb?: number;
  active?: boolean;
};

const Breadcrumbs = ({ mb = 0, active = true }: Props) => {
  return (
    <BreadcrumbsBox mb={mb}>
      <BreadcrumbsIcon />
      <BreadcrumbsItems>
        <BreadcrumbsItem>
          <Link href={'/'}>
            <BreadcrumbsLink active={false}>Главная</BreadcrumbsLink>
          </Link>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <Link href={'/'}>
            <BreadcrumbsLink active={false}>Каталог</BreadcrumbsLink>
          </Link>
        </BreadcrumbsItem>
        <BreadcrumbsItem>
          <Link href={'/'}>
            <BreadcrumbsLink active={active}>Моя корзина</BreadcrumbsLink>
          </Link>
        </BreadcrumbsItem>
      </BreadcrumbsItems>
    </BreadcrumbsBox>
  );
};

const BreadcrumbsBox = styled.div<{ mb: number }>`
  display: flex;
  align-items: center;
  gap: ${rem(5)};
  margin-bottom: ${(props) => rem(props.mb)};
`;
const BreadcrumbsIcon = styled.i`
  display: inline-block;
  width: ${rem(15)};
  height: ${rem(15)};
  background: url("data:image/svg+xml,%3Csvg width='15' height='15' viewBox='0 0 15 15' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M13.8652 7.39823L8.20502 1.741L7.82562 1.36161C7.73918 1.27574 7.62228 1.22754 7.50043 1.22754C7.37858 1.22754 7.26168 1.27574 7.17523 1.36161L1.13568 7.39823C1.0471 7.48646 0.977099 7.59155 0.9298 7.70728C0.882501 7.82301 0.858866 7.94704 0.86029 8.07206C0.86615 8.58768 1.29535 8.9993 1.81097 8.9993H2.43353V13.7703H12.5673V8.9993H13.2031C13.4536 8.9993 13.6894 8.90116 13.8666 8.72391C13.9539 8.63692 14.0231 8.53347 14.0701 8.41957C14.1171 8.30567 14.1411 8.18357 14.1406 8.06034C14.1406 7.81132 14.0424 7.57548 13.8652 7.39823ZM8.32074 12.7156H6.68011V9.72733H8.32074V12.7156ZM11.5126 7.94462V12.7156H9.25824V9.37577C9.25824 9.05204 8.99603 8.78983 8.6723 8.78983H6.32855C6.00482 8.78983 5.74261 9.05204 5.74261 9.37577V12.7156H3.48822V7.94462H2.08197L7.50189 2.52909L7.84027 2.86747L12.9203 7.94462H11.5126Z' fill='%235D6C7B'/%3E%3C/svg%3E%0A")
    no-repeat center center;
`;

const BreadcrumbsItems = styled.ul`
  display: inline-flex;
`;

const BreadcrumbsItem = styled.li`
  position: relative;
  &:not(:last-child)::after {
    content: '/';
    font-weight: 400;
    font-size: ${rem(12)};
    line-height: ${rem(17)};
    color: ${(props) => props.theme.colors.grey['600']};
  }
`;

const BreadcrumbsLink = styled.a<{ active: boolean }>`
  padding: 0 ${rem(7)};
  cursor: pointer;
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  color: ${(props) => (props.active ? props.theme.colors.black : props.theme.colors.grey['600'])};
`;

export default Breadcrumbs;
