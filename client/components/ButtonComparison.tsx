import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'

type Props = {}

const ButtonComparison = (props: Props) => {
  return (
    <ButtonComparisonStyled>
      <Image src='/images/icon-comparison.svg' alt='' width='20' height='12' />
    </ButtonComparisonStyled>
  )
}

const ButtonComparisonStyled = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
  top: ${rem(10)};
  right: ${rem(10)};
  z-index: 2;
  width: ${rem(35)};
  height: ${rem(35)};
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(${rem(5)});
  cursor: pointer;
`

export default ButtonComparison