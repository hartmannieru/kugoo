import React from 'react'

type Props = {
  name: string;
  color: string;
  size: string;
}

const Icon = ({name, color, size = '20'}: Props) => {
  return (
    <svg width={size} viewBox="0 0 20 20" fill={color}>
     <use href={'icons.svg' + `#${name}`} />
   </svg>
  )
}

export default Icon