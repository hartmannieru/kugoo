import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: string,
  width?: string,
  background?: string;
  color?: string;
}

const ButtonDefault = ({children, width = '200px', background='#6F73EE', color='#fff'}: Props) => {
  return (
    <ButtonDefaultStyled width={width} background={background} color={color}>{children}</ButtonDefaultStyled>
  )
}

const ButtonDefaultStyled = styled.button<{width: string, background: string, color: string}>`
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