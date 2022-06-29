import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'

type Props = {
  img: string,
  title: string,
  description: string
}

const CardAdvantagesImg = ({img, title, description}: Props) => {
  return (
    <CardAdvantagesImgStyled>
      <CardAdvantagesImgBox>
        <Image src={img} alt='' layout='fill' />
      </CardAdvantagesImgBox>
      <CardAdvantagesImgContent>
        <CardAdvantagesImgTitle>
          {title}
        </CardAdvantagesImgTitle>
        <CardAdvantagesImgDescription>
          {description}
        </CardAdvantagesImgDescription>
      </CardAdvantagesImgContent>
    </CardAdvantagesImgStyled>
  )
}

const CardAdvantagesImgContent = styled.div`
  position: relative;
  z-index: 1;
`
const CardAdvantagesImgDescription = styled.div``

const CardAdvantagesImgTitle = styled.div`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(22)};
  margin-bottom: ${rem(6)};
`

const CardAdvantagesImgBox = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
`

const CardAdvantagesImgStyled = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-radius: ${rem(10)};
  overflow: hidden;
  padding: ${rem(30)} ${rem(33)};
`

export default CardAdvantagesImg