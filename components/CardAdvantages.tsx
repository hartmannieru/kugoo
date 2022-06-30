import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import Icons from 'components/Icons'

type Props = {
  icon: string;
  title: string;
  description: React.ReactNode;
}

const CardAdvantages = ({icon, title, description}: Props) => {
  return (
    <CardAdvantagesStyled>
      <CardAdvantagesIcon>
        <Icons name={icon} color={'#6F73EE'} size={'25'} icons={'icons-violet.svg'} />
      </CardAdvantagesIcon>
      <CardAdvantagesTitle>
        {title}
      </CardAdvantagesTitle>
      <CardAdvantagesDescription>
        {description}
      </CardAdvantagesDescription>
    </CardAdvantagesStyled>
  )
}

const CardAdvantagesDescription = styled.div`
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(18)};
`

const CardAdvantagesTitle = styled.div`
  font-weight: 500;
  font-size: ${rem(18)};
  line-height: ${rem(26)};
  margin-bottom: ${rem(8)};
  max-width: ${rem(244)};
  width: 100%;
`

const CardAdvantagesIcon = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${rem(25)};
  height: ${rem(25)};
  margin-bottom: ${rem(20)};
`

const CardAdvantagesStyled = styled.div`
  max-width: ${rem(350)};
  width: 100%;
  min-height: ${rem(225)};
  border: ${rem(1)} solid ${props => props.theme.colors.grey['200']};
  box-sizing: border-box;
  border-radius: ${rem(10)};
  padding: ${rem(26)} ${rem(20)};
  color: ${props => props.theme.colors.black};
`

export default CardAdvantages