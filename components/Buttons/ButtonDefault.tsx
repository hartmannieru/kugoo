import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link';

type Props = {
  children: string,
  width?: string,
  background?: string;
  color?: string;
  href: string
}

const ButtonDefault = ({href='/', children, width = 'auto', background='#6F73EE', color='#fff'}: Props) => {
  return (
    <Link href={href} passHref>
      <ButtonDefaultStyled width={width} background={background} color={color}>{children}</ButtonDefaultStyled>
    </Link>
  )
}

const ButtonDefaultStyled = styled.button<{width: string, background: string, color: string}>`
  display: inline-block;
  width: ${props => props.width};
  padding: ${rem(15)} ${rem(25)};
  background: ${props => props.background};
  text-align: center;
  border-radius: ${rem(5)};
  color: ${props => props.color};
  font-weight: 400;
  font-size: ${rem(12)};
  line-height: ${rem(17)};
  cursor: pointer;
`


export default ButtonDefault