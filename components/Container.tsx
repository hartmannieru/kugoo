import React, { ReactNode } from 'react'
import styled from 'styled-components'

type Props = {
  children?: ReactNode;
}

const Container = ({children}: Props) => {
  return (
    <ContainerStyled>{children}</ContainerStyled>
  )
}

const ContainerStyled = styled.div`
  max-width: 1010px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;
`

export default Container