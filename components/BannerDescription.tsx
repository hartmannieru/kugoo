import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string,
  color?: string
}

const BannerDescription = ({children, color = '#fff'}: Props) => {
  return (
    <BannerDescriptionStyled color={color}>{children}</BannerDescriptionStyled>
  )
}

const BannerDescriptionStyled = styled.p<{color?: string}>`
  font-weight: 400;
  font-size: ${rem(20)};
  line-height: ${rem(29)};
  color: ${props => props.color};
  margin-bottom: ${rem(25)};
`

export default BannerDescription