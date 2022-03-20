import React from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  onClick?: any,
  itemName?: any,
  itemContent?: string,
  isActive?: boolean
}

const AccordionContent = ({onClick, itemName, itemContent, isActive}: Props) => {
  return (
    <AccordionContentBox isActive={isActive}>
      <Header onClick={onClick} isActive={isActive}>
        <HeaderContent>
          {itemName}
        </HeaderContent>
        <HeaderIcon isActive={isActive} className="material-icons">
          expand_more
        </HeaderIcon>
      </Header>
      <Content itemName={itemName} isActive={isActive}>
        <Inner id={itemName} isActive={isActive}>
          {itemContent}
        </Inner>
      </Content>
    </AccordionContentBox>
  )
}

const AccordionContentBox = styled.div<{isActive?: boolean}>`
  padding-bottom: ${props => props.isActive ? `${rem(23)}` : '0'};
  box-shadow: ${props => props.isActive ? `0 ${rem(1)} 0 0 #EAEBED` : 'none'};
`

const AccordionContainer = styled.div`
  overflow: hidden;
  max-width: ${rem(730)};
  width: 100%;
  color: ${props => props.theme.colors.black};
  padding-bottom: ${rem(1)};
  margin-bottom: ${rem(90)};
`

const Inner = styled.div<{isActive?: boolean}>`
  position: absolute;
  width: 100%;
`

const Header = styled.button<{isActive?: boolean}>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: ${rem(26)} 0;
  font-weight: 500;
  font-size: ${rem(16)};
  line-height: ${rem(19)};
  text-align: left;
  color: inherit;
  cursor: pointer;
  box-shadow: ${props => props.isActive ? 'none' : `0 ${rem(1)} 0 0 #EAEBED`};
`

const HeaderIcon = styled.span<{isActive?: boolean}>`
  transform: rotate(${props => props.isActive ? -180 : 0}deg);
  transition: all 0.2s;
`

const HeaderContent = styled.div`
  max-width: ${rem(648)};
`

const Content = styled.div<{itemName?: any, isActive?: boolean}>`
  position: relative;
  overflow: hidden;
  font-weight: 400;
  font-size: ${rem(14)};
  line-height: ${rem(20)};
  height: ${props => {
    const inner = document.getElementById(props.itemName)
    return `${props.isActive && inner ? inner.clientHeight : 0}px`
  }};
  transition: height 0.35s;
`

export {AccordionContainer, AccordionContent}