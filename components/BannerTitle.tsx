import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string,
  color?: string
}

const BannerContent = ({children, color = '#fff'}: Props) => {
  return (
    <>
      <BannerTitleStyled color={color}>{children}</BannerTitleStyled>
    </>
  )
}

const BannerTitleStyled = styled.h1<{color?: string}>`
  font-weight: 600;
  font-size: ${rem(35)};
  line-height: ${rem(51)};
  text-transform: uppercase;
  color: ${props => props.color};
  max-width: ${rem(615)};
  width: 100%;
  margin-bottom: ${rem(7)};
`

export default BannerContent