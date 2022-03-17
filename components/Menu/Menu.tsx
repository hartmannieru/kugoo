import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Container from 'components/Container'
import Link from 'next/link'
import Select, {StylesConfig} from 'react-select'
import Icons from 'components/Icons'
import Logo from 'components/Logo'

type MyOptionType = {
  label: string;
  value: string;
};

const options: MyOptionType[] = [
  { value: 'chocolate', label: 'Везде' },
  { value: 'strawberry', label: 'Самокаты' },
  { value: 'vanilla', label: 'Аксессуары' }
]

const selectStyle: StylesConfig<MyOptionType> = {
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
  option: (base: any, state: any) => ({
    ...base,
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
  indicatorSeparator: () => ({
    display: 'none',
  }),
  dropdownIndicator: () => ({
    display: 'flex',
    alignItems: 'center',
    padding: 0,
    width: 10,
    height: 10,
  })
}

const Menu = () => {
  return (
    <MenuStyled>
      <Container>
        <MenuBox>
          <Logo marginRight={35} />
          <Link href='/catalog' passHref>
            <MenuCatalogBtn>
              <MenuCatalogBtnIcon />
              Каталог
            </MenuCatalogBtn>
          </Link>
          <MenuBoxSearch>
            <MenuSearchSelect>
              <Select options={options} styles={selectStyle} defaultInputValue={options[0].label} instanceId='select-menu' />
            </MenuSearchSelect>
            <MenuSearch type='search' placeholder='Искать самокат KUGO'/>
            <MenuSearchButton />
          </MenuBoxSearch>
          <Link href='/comparison' passHref>
            <MenuComparisonBtn>
              <Icons name="icon-comparison" color={'#282739'} size={'20'} icons={'icons.svg'} />
            </MenuComparisonBtn>
          </Link>
          <Link href='/comparison' passHref>
            <MenuFavoritesBtn>
              <Icons name="icon-favorite" color={'#282739'} size={'20'} icons={'icons.svg'} />
            </MenuFavoritesBtn>
          </Link>
          <Link href='/comparison' passHref>
            <MenuBasketBtn>
              <Icons name="icon-basket" color={'#6F73EE'} size={'20'} icons={'icons.svg'} />
              Корзина
            </MenuBasketBtn>
          </Link>
        </MenuBox>
      </Container>
    </MenuStyled>
  )
}

const MenuStyled = styled.nav`
  margin-bottom: ${rem(35)};
`

const MenuBox = styled.div`
  display: flex;
  align-items: center;
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
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  height: ${rem(43)};
  max-width: ${rem(603)};
  padding: ${rem(4)};
  padding-right: 0;
  border: ${rem(1)} solid ${props => props.theme.colors.primary};
  border-radius: ${rem(5)};
  margin-right: ${rem(47)};
`

const MenuSearchButton = styled.button`
  position: absolute;
  top: ${rem(-1)};
  right: ${rem(-1)};
  width: ${rem(40)};
  height: inherit;
  background: ${props => props.theme.colors.primary} url("data:image/svg+xml,%3Csvg width='16' height='16' viewBox='0 0 16 16' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M15.9519 14.8499L10.758 9.65596C11.564 8.61396 11.9999 7.33997 11.9999 5.99997C11.9999 4.39598 11.374 2.89199 10.242 1.75799C9.10996 0.623997 7.60197 0 5.99997 0C4.39798 0 2.88999 0.625997 1.75799 1.75799C0.623997 2.88999 0 4.39598 0 5.99997C0 7.60197 0.625997 9.10996 1.75799 10.242C2.88999 11.376 4.39598 11.9999 5.99997 11.9999C7.33997 11.9999 8.61196 11.564 9.65396 10.76L14.8479 15.9519C14.8632 15.9672 14.8812 15.9793 14.9012 15.9875C14.9211 15.9958 14.9424 16 14.9639 16C14.9855 16 15.0068 15.9958 15.0267 15.9875C15.0466 15.9793 15.0647 15.9672 15.0799 15.9519L15.9519 15.0819C15.9672 15.0667 15.9793 15.0486 15.9875 15.0287C15.9958 15.0088 16 14.9875 16 14.9659C16 14.9444 15.9958 14.9231 15.9875 14.9032C15.9793 14.8833 15.9672 14.8652 15.9519 14.8499ZM9.16796 9.16796C8.31996 10.014 7.19597 10.48 5.99997 10.48C4.80398 10.48 3.67998 10.014 2.83199 9.16796C1.98599 8.31996 1.51999 7.19597 1.51999 5.99997C1.51999 4.80398 1.98599 3.67798 2.83199 2.83199C3.67998 1.98599 4.80398 1.51999 5.99997 1.51999C7.19597 1.51999 8.32196 1.98399 9.16796 2.83199C10.014 3.67998 10.48 4.80398 10.48 5.99997C10.48 7.19597 10.014 8.32196 9.16796 9.16796Z' fill='white'/%3E%3C/svg%3E%0A") no-repeat center center;
  border: ${rem(1)} solid #6F73EE;
  border-radius: 0 ${rem(5)} ${rem(5)} 0;
  cursor: pointer;
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

const MenuComparisonBtn = styled.a`
  display: flex;
  align-items: center;
  margin-right: ${rem(25)};
`

const MenuFavoritesBtn = styled.a`
  display: flex;
  align-items: center;
  margin-right: ${rem(25)};
`

const MenuBasketBtn = styled.a`
  display: flex;
  align-items: center;
  font-weight: 500;
  font-size: 14px;
  line-height: 20px;
  font-weight: 500;
  color: ${props => props.theme.colors.black};
  gap: 10px;
`

export default Menu