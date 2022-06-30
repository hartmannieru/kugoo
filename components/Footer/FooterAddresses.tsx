import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {}

const FooterAddresses = (props: Props) => {
  return (
    <FooterAddressesStyled>
      <FooterAddressesItem>
        <FooterAddressesTitle>
          Москва ул. Ткацкая, 5&nbsp;стр.&nbsp;16
        </FooterAddressesTitle>
        <FooterAddressesPhone href='tel:+74994061587'>
          +7 (499) 406 15 87
        </FooterAddressesPhone>
      </FooterAddressesItem>
      <FooterAddressesItem>
        <FooterAddressesTitle>
          Санкт-Петербург ул. Фрунзе, 2
        </FooterAddressesTitle>
        <FooterAddressesPhone href='tel:+74994061587'>
          +7 (499) 406 15 87
        </FooterAddressesPhone>
      </FooterAddressesItem>
      <FooterAddressesItem>
        <FooterAddressesTitle>
          Краснодар sул. Восточно-Кругликовская, 86
        </FooterAddressesTitle>
        <FooterAddressesPhone href='tel:+74994061587'>
          +7 (499) 406 15 87
        </FooterAddressesPhone>
      </FooterAddressesItem>
    </FooterAddressesStyled>
  )
}


const FooterAddressesPhone = styled.a`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  color: ${props => props.theme.colors.grey['600']};
`

const FooterAddressesTitle = styled.div`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(18)};
  margin-bottom: ${rem(8)};
`

const FooterAddressesItem = styled.div``

const FooterAddressesStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(50)};
`

export default FooterAddresses