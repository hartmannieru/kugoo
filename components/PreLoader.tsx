import React from 'react'
import { Triangle } from  'react-loader-spinner'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {}

const PreLoader = (props: Props) => {
  return (
    <PreLoaderStyled>
      <Triangle
        height="100"
        width="100"
        color='#6F73EE'
        ariaLabel='loading'
      />
    </PreLoaderStyled>
  )
}

const PreLoaderStyled = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  background: #fff;
  width: 100vw;
  height: 100vh;
  z-index: 10;
  display: flex;
  align-items: center;
  justify-content: center;
`

export default PreLoader