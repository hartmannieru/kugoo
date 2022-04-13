// comment
import React, {useState } from 'react'
import {AccordionContainer, AccordionContent} from './AccordionContent';

type Props = {
  items?: any,
}

const Accordion = ({items}: Props) => {
  const [active, setActive] = useState();

  const handleClick = (name: any) => {
    setActive(name === active ? null : name);
  }

  return <AccordionContainer>
    {items.map((item: any, index: number) => {
      let isActive = active === item.name;
      return (
        <AccordionContent
          key={index}
          onClick={() => handleClick(item.name)}
          itemName={item.name} 
          itemContent={item.content} 
          isActive={isActive} 
        />
      );
    })}
  </AccordionContainer>
}

export default Accordion