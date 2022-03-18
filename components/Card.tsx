import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'
import ItemImg from 'images/card/item-1.png'

type Props = {}

const Card = (props: Props) => {
  return (
    <CardStyled>
      <CardBoxSlider>
        <CardSlider>
          <Image src={ItemImg} alt='' />
        </CardSlider>
      </CardBoxSlider>
      <CardContent>
        <CardTitle>Kugoo Kirin M4</CardTitle>
      </CardContent>
    </CardStyled>
  )
}

const CardSlider = styled.div`

`

const CardTitle = styled.h4`
  font-weight: 600;
  font-size: ${rem(18)};
  line-height: ${rem(26)};
  margin-bottom: ${rem(20)};
`

const CardContent = styled.div`
  padding: ${rem(20)} ${rem(24)};
`

const CardBoxSlider = styled.div``

const CardStyled = styled.div`
  max-width: ${rem(255)};
  width: 100%;
  border-radius: ${rem(10)};
  overflow: hidden;
  border: ${rem(1)} solid ${props => props.theme.colors.border};
`

export default Card