import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from 'components/Container'
import Link from 'next/link'
import Select from 'react-select'

type Props = {}

const options = [
  { value: 'chocolate', label: 'Везде' },
  { value: 'strawberry', label: 'Самокаты' },
  { value: 'vanilla', label: 'Аксессуары' }
]

const style = {
  control: (base: any) => ({
    ...base,
    border: 0,
    boxShadow: "none",
    background: '#F4F7FB',
    borderRadius: 5,
    minHeight: `${30}px`,
    paddingRight: 12,
  }),
  container: (base: any) => ({
    ...base,
    height: `${100}%`,
    minWidth: 76,
    width: `${100}%`,
    fontSize: `${14}px`,
  }),
  option: (provided: any, state: any) => ({
    ...provided,
    color: state.isSelected ? '#6F73EE' : '#282739',
    padding: 7,
    fontSize: `${14}px`,
    lineHeight: `${20}px`,
    ':hover': {
      backgroundColor: 'red',
      color: 'white',
    },
    ':select': {
      backgroundColor: 'red',
      color: 'white',
    },
  }),
  indicatorSeparator: () => null,
  dropdownIndicator: () => ({
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    width: 10,
    height: 10,
  })
}

const Menu = (props: Props) => {
  return (
    <MenuStyled>
      <Container>
        <MenuBox>
          <MenuLogo href='#'>
            Kugoo
          </MenuLogo>
          <Link href='/catalog' passHref>
            <MenuCatalogBtn>
              <MenuCatalogBtnIcon />
              Каталог
            </MenuCatalogBtn>
          </Link>
          <MenuBoxSearch>
            <MenuSearchSelect>
              <Select options={options} styles={style} defaultInputValue={options[0].label} />
            </MenuSearchSelect>
            <MenuSearch type='search' placeholder='Искать самокат KUGO'/>
          </MenuBoxSearch>
          <MenuComparisonBtn>
            Сравнение
          </MenuComparisonBtn>
          <MenuFavoritesBtn>
            Избранное
          </MenuFavoritesBtn>
          <MenuBasketBtn>
            Basket
          </MenuBasketBtn>
        </MenuBox>
      </Container>
    </MenuStyled>
  )
}

const MenuStyled = styled.nav`
  margin-bottom: ${rem(40)};
`

const MenuBox = styled.div`
  display: flex;
  align-items: center;
`

const MenuLogo = styled.a`
  font-weight: 700;
  font-size: ${rem(30)};
  line-height: ${rem(43)};
  text-transform: uppercase;
  color: ${props => props.theme.colors.black};
  margin-right: ${rem(35)};
`
const MenuCatalogBtn = styled.a`
  display: flex;
  align-items: center;
  height: ${rem(43)};
  padding: ${rem(9)} ${rem(18)};
  color: ${props => props.theme.colors.white};
  background: ${props => props.theme.colors.primary};
  border-radius: ${rem(5)};
  margin-right: ${rem(20)};
`

const MenuCatalogBtnIcon = styled.i`
  width: ${rem(13)};
  height: ${rem(12)};
  margin-right: ${rem(13)};
  background: url("data:image/svg+xml,%3Csvg width='13' height='12' viewBox='0 0 13 12' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 1.35C0 0.991015 0.291015 0.7 0.65 0.7H12.35C12.709 0.7 13 0.991015 13 1.35C13 1.70898 12.709 2 12.35 2H0.65C0.291015 2 0 1.70898 0 1.35Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M0 6.35C0 5.99101 0.291015 5.7 0.65 5.7H12.35C12.709 5.7 13 5.99101 13 6.35C13 6.70898 12.709 7 12.35 7H0.65C0.291015 7 0 6.70898 0 6.35Z' fill='white'/%3E%3Cpath fill-rule='evenodd' clip-rule='evenodd' d='M6 11.35C6 10.991 6.29101 10.7 6.65 10.7L12.35 10.7C12.709 10.7 13 10.991 13 11.35C13 11.709 12.709 12 12.35 12L6.65 12C6.29102 12 6 11.709 6 11.35Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat center center;
`

const MenuBoxSearch = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(43)};
  max-width: ${rem(603)};
  padding: ${rem(4)};
  border: ${rem(1.5)} solid ${props => props.theme.colors.primary};
  border-radius: 5px;
`

const MenuSearch = styled.input`
  border: none;
  outline: none;
  width: 100%;
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  &::-webkit-search-decoration,
  &::-webkit-search-cancel-button,
  &::-webkit-search-results-button,
  &::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }
`

const MenuSearchSelect = styled.div`
  margin-right: ${rem(20)};
  height: 100%;
`

const MenuComparisonBtn = styled.a``
const MenuFavoritesBtn = styled.a``
const MenuBasketBtn = styled.a``

export default Menu