import Container from 'components/Container';
import React from 'react';
import styled from 'styled-components';
import { rem } from 'polished';
import Link from 'next/link';
import Label from 'components/Label';

type Props = {};

const MenuBottom = (props: Props) => {
  return (
    <MenuBottomStyled>
      <Container>
        <MenuBottomBox>
          <MenuBottomItem>
            <Link href="/about" passHref>
              <MenuBottomLink>О магазине</MenuBottomLink>
            </Link>
          </MenuBottomItem>
          <MenuBottomItem>
            <Link href="/shipping-payment" passHref>
              <MenuBottomLink>Доставка и оплата</MenuBottomLink>
            </Link>
            <Label marginLeft={8}>Доступна рассрочка</Label>
          </MenuBottomItem>
          <MenuBottomItem>
            <Link href="/test-drive" passHref>
              <MenuBottomLink>Тест-драйв</MenuBottomLink>
            </Link>
          </MenuBottomItem>
          <MenuBottomItem>
            <Link href="/blog" passHref>
              <MenuBottomLink>Блог</MenuBottomLink>
            </Link>
          </MenuBottomItem>
          <MenuBottomItem>
            <Link href="/contacts" passHref>
              <MenuBottomLink>Контакты</MenuBottomLink>
            </Link>
          </MenuBottomItem>
          <MenuBottomItem>
            <Link href="/stock" passHref>
              <MenuBottomLink>Акции</MenuBottomLink>
            </Link>
            <Label marginLeft={8}>%</Label>
          </MenuBottomItem>
        </MenuBottomBox>
      </Container>
    </MenuBottomStyled>
  );
};

const MenuBottomStyled = styled.nav`
  padding: ${rem(10)};
  background: ${(props) => props.theme.colors.background};
  margin-bottom: ${rem(20)};
`;

const MenuBottomBox = styled.ul`
  display: flex;
`;

const MenuBottomItem = styled.li`
  display: flex;
  align-items: center;
  margin-right: ${rem(50)};
`;

const MenuBottomLink = styled.a`
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  color: ${(props) => props.theme.colors.black};
`;

export default MenuBottom;
