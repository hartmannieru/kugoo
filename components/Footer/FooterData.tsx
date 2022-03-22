import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {}

const FooterData = (props: Props) => {
  return (
    <FooterBoxData>
      <FooterBoxDataItem>
        <FooterBoxDataTitle>
        Call-центр
        </FooterBoxDataTitle>
        <FooterBoxDataPhone href='tel:+78005055461'>
          +7 (800) 505-54-61
        </FooterBoxDataPhone>
        <FooterBoxDataSchedule>
          Пн-Вс 10:00 - 20:00
        </FooterBoxDataSchedule>
      </FooterBoxDataItem>
      <FooterBoxDataItem>
        <FooterBoxDataTitle>
        Call-центр
        </FooterBoxDataTitle>
        <FooterBoxDataPhone href='tel:+78005055461'>
          +7 (800) 505-54-61
        </FooterBoxDataPhone>
        <FooterBoxDataSchedule>
          Пн-Вс 10:00 - 20:00
        </FooterBoxDataSchedule>
      </FooterBoxDataItem>
    </FooterBoxData>
  )
}

const FooterBoxDataSchedule = styled.div`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  color: ${props => props.theme.colors.grey['600']};
  margin-bottom: ${rem(28)};
`

const FooterBoxDataPhone = styled.a`
  display: block;
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(23)};
  margin-bottom: ${rem(7)};
`

const FooterBoxDataTitle = styled.div`
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  margin-bottom: ${rem(5)};
`

const FooterBoxDataItem = styled.div``
const FooterBoxData = styled.div`
  display: flex;
  gap: ${rem(40)};
`

export default FooterData