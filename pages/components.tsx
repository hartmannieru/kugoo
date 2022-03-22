import Container from 'components/Container'
import styled from 'styled-components'
import { rem } from 'polished'
import H2 from 'components/Titles/H2'
import ButtonDefault from 'components/Buttons/ButtonDefault'
import Card from 'components/Card'
import Label from 'components/Label'
import items from './api/accordion-db'
import Accordion from 'components/Accordion'
import LinkDefault from 'components/LinkDefault'

type Props = {}

const ComponentsPages = (props: Props) => {
  return (
    <ComponentsPagesStyled>
      <Container>
        <ComponentsPagesTitle>
          Этикетки
        </ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Label>Рассрочка</Label>
        </ComponentsPagesBox>
        <ComponentsPagesTitle>
          Ссылки
        </ComponentsPagesTitle>
        <ComponentsPagesBox>
          <LinkDefault text={'LinkDefault'} />
        </ComponentsPagesBox>
        <ComponentsPagesTitle>
          Заголовки
        </ComponentsPagesTitle>
        <ComponentsPagesBox>
          <H2>h2</H2>
        </ComponentsPagesBox>
        <ComponentsPagesTitle>
          Кнопки
        </ComponentsPagesTitle>
        <ComponentsPagesBox>
          <ButtonDefault>ButtonDefault</ButtonDefault>
        </ComponentsPagesBox>
        <ComponentsPagesTitle>
          Карточки
        </ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Card labelText='Хит' labelColor='green' />
        </ComponentsPagesBox>
        <ComponentsPagesTitle>
          Аккордеон
        </ComponentsPagesTitle>
        <ComponentsPagesBox>
          <Accordion items={items} />
        </ComponentsPagesBox>
      </Container>
    </ComponentsPagesStyled>
  )
}

const ComponentsPagesBox = styled.div`
  margin-bottom: ${rem(60)};
`

 const ComponentsPagesTitle = styled.h2`
  color: ${props => props.theme.colors.primary};
  margin-bottom: ${rem(20)};
`

const ComponentsPagesStyled = styled.section`
  
`

export default ComponentsPages