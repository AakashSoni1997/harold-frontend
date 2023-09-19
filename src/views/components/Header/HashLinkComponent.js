import React, { useState } from 'react'
import { HashLink } from 'react-router-hash-link';

const HashLinkComponent = ({title}) => {
  const scrollWithOffset = (el) => {
    const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
    const yOffset = -90; 
    window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
}
 const [subMenu, setsubMenu] = useState(false);
    const subMenuOnclick = () => {
        setsubMenu(!subMenu);
    }

  return (
    <>
      <HashLink className={subMenu ? "dropdown-item active" : "dropdown-item"} onClick={subMenuOnclick} smooth to="/about#sam" scroll={el => scrollWithOffset(el)}>{title}</HashLink>
    </>
  )
}

export default HashLinkComponent
