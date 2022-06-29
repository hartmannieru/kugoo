import React from 'react'

type Props = {
  icons: string;
  name: string;
  color: string;
  size: string;
}

const Icon = ({icons, name, color, size}: Props) => {
  return (
    <svg width={size} viewBox="0 0 20 20" fill={color}>
     <use href={icons + `#${name}`} />
   </svg>
  )
}

export default Icon