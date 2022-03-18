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
  width: 1110px;
  margin: 0 auto;
  padding: 0 30px;
  box-sizing: content-box;
`

export default Container