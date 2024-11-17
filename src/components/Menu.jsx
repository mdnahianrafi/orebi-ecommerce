import React from 'react'

const Menu = ({menuName,className}) => {
  return (
<ul>
    <a href="#"><li className={`font-dm text-sm text-menuText hover:font-bold hover:text-menuTextHover hover:ease-in-out duration-300  ${className}`}>{menuName}</li></a>
</ul>
  )
}

export default Menu
