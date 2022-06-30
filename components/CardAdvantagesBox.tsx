import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'
import CardAdvantages from './CardAdvantages'
import CardAdvantagesImg from './CardAdvantagesImg'

type Props = {
  itemList: any
}

const CardAdvantagesBox = ({itemList}: Props) => {
  return (
    <CardAdvantagesBoxStyled>
      {
        itemList.map(({icon, title, description, img}: any, index: React.Key | null | undefined) => {
          if (img) {
            return <CardAdvantagesImg key={index} img={img} title={title} description={description} />
          } else {
            return (
              <CardAdvantages key={index} icon={icon} title={title} description={description} />
            )
          }
        })
      }
    </CardAdvantagesBoxStyled>
  )
}

const CardAdvantagesBoxStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: ${rem(30)};
  margin-bottom: ${rem(100)};
`

export default CardAdvantagesBox