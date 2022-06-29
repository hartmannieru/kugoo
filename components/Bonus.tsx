import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  title: string;
  description?: string
}

const Bonus = ({title, description}: Props) => {
  return (
    <BonusStyled>
      <BonusTitle>{title}</BonusTitle>
      <BonusDescription>{description}</BonusDescription>
    </BonusStyled>
  )
}

const BonusDescription = styled.p`
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(23)};
`

const BonusTitle = styled.div`
  font-weight: 600;
  font-size: ${rem(25)};
  line-height: ${rem(36)};
  text-transform: uppercase;
  margin-bottom: ${rem(1)};
`

const BonusStyled = styled.div`

`

export default Bonus