import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Image from 'next/image'

type Props = {
  icon: string;
  title: string;
  description: string;
  href: string;
}

const SocialItem = ({href, icon, title, description}: Props) => {
  return (
    <SocialItemStyled href={href}>
      <SocialItemIcon>
        <Image src={'/images/social/' + icon + '.svg'} alt=''  width='20' height='20' />
      </SocialItemIcon>
      <SocialItemText>
        <SocialItemTitle>
          {title}
        </SocialItemTitle>
        <SocialItemDescription>
          {description}
        </SocialItemDescription>
      </SocialItemText>
    </SocialItemStyled>
  )
}

const SocialItemDescription = styled.div`
  font-weight: 400;
  font-size: ${rem(10)};
  line-height: ${rem(14)};
  color: ${props => props.theme.colors.grey['600']};
`

const SocialItemTitle = styled.div`
  font-weight: 500;
  font-size: ${rem(14)};
  line-height: ${rem(16)};
  color: ${props => props.theme.colors.black};
`

const SocialItemText = styled.div``

const SocialItemIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: ${rem(13)};
`

const SocialItemStyled = styled.a`
  padding: ${rem(5)} ${rem(12)};
  min-width: ${rem(123)};
  height: ${rem(45)};
  border-radius: ${rem(10)};
  background: #fff;
  display: flex;
  align-items: center;
`

export default SocialItem