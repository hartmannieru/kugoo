import React, {useState} from 'react'
import styled from 'styled-components'
import { rem } from 'polished'

type Props = {
  item1?: React.ReactNode,
  item2?: React.ReactNode,
}

const Tabs = ({item1, item2}: Props) => {
  const [active, setActive] = useState(0)
  const handleClick = (e: any) => {
    const index = parseInt(e.target.id, 0);
    if (index !== active) {
      setActive(index);
    }
  }

  return (
    <TabsStyled>
      <TabsTitle>
        <TabsTitleItem onClick={handleClick} active={active === 0} id={0}>Интернет-магазин</TabsTitleItem>
        <TabsTitleItem onClick={handleClick} active={active === 1} id={1}>Сервисный центр</TabsTitleItem>
      </TabsTitle>
      <TabsContent>
        <TabsContentItem active={active === 0}>
          {item1}
        </TabsContentItem>
        <TabsContentItem active={active === 1}>
          {item2}
        </TabsContentItem>
      </TabsContent>
    </TabsStyled>
  )
}

const TabsTitleItem = styled.button<{id?: any, active?: any}>`
  padding: ${rem(15)} ${rem(25)};
  border: ${rem(1)} solid ${props => (props.active ? "#6F73EE" : "transparent")};
  border-radius: ${rem(5)};
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  font-size: ${rem(16)};
  line-height: ${rem(23)};
  color: ${props => (props.active ? "#6F73EE" : "#5D6C7B")};
  cursor: pointer;
  background: ${props => (props.active ? "" : "#F4F7FB")};
`

const TabsTitle = styled.div`
  display: flex;
  justify-content: center;
  gap: ${rem(20)};
  margin-bottom: ${rem(58)};
`
const TabsContentItem = styled.div<{active?: any}>`
  display: ${props => (props.active ? "" : "none")};
`

const TabsContent = styled.div``

const TabsStyled = styled.div``

export default Tabs