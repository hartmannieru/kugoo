import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  children: React.ReactNode
}

const Compilation = ({children}: Props) => {
  return (
    <CompilationStyled>
      {children}
    </CompilationStyled>
  )
}

const CompilationStyled = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: ${rem(30)};
`

export default Compilation