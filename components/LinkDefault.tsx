import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Link from 'next/link'

type Props = {
  text: string
}

const LinkDefault = ({text}: Props) => {
  return (
    <Link href='/catalog' passHref>
      <LinkDefaultStyled>{text}</LinkDefaultStyled>
    </Link>
  )
}

const LinkDefaultStyled = styled.a`
  position: relative;
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  color: ${props => props.theme.colors.primary};
  padding-right: ${rem(20)};
  &::after {
    content: '';
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    right: 0;
    width: ${rem(12)};
    height: ${rem(10)};
    background: url("data:image/svg+xml,%3Csvg width='12' height='10' viewBox='0 0 12 10' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M11.4596 5.45962C11.7135 5.20578 11.7135 4.79422 11.4596 4.54038L7.32304 0.403806C7.0692 0.149965 6.65765 0.149965 6.40381 0.403806C6.14997 0.657647 6.14997 1.0692 6.40381 1.32304L10.0808 5L6.40381 8.67696C6.14997 8.9308 6.14997 9.34235 6.40381 9.59619C6.65765 9.85003 7.0692 9.85003 7.32304 9.59619L11.4596 5.45962ZM0 5.65H11V4.35H0V5.65Z' fill='%236F73EE'/%3E%3C/svg%3E%0A") no-repeat center center;
    background-size: contain;
  }
`

export default LinkDefault