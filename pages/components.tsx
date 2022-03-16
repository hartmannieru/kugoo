import Container from 'components/Container'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {}

const ComponentsPages = (props: Props) => {
  return (
    <ComponentsPagesStyled>
      <Container>
        ComponentsPages
      </Container>
    </ComponentsPagesStyled>
  )
}

const ComponentsPagesStyled = styled.section`
  
`

export default ComponentsPages