import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'
import Container from './Container'

type Props = {
  bg: string,
  children: React.ReactNode
}

const Banner = ({bg, children}: Props) => {
  return (
    <BannerStyled>
      <BannerCover>
        <Image src={bg} alt='' layout='fill' />
      </BannerCover>
      <BannerContent>
        <Container>
          {children}
        </Container>
      </BannerContent>
    </BannerStyled>
  )
}
const BannerContent = styled.div`
  position: relative;
  z-index: 2;
`
const BannerCover = styled.div`
  min-height: inherit;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const BannerStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  max-width: ${rem(1380)};
  min-height: ${rem(421)};
  margin: 0 auto;
  margin-bottom: ${rem(39)};
`

export default Banner