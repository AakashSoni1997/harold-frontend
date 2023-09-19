// import React,  { useState, useEffect } from 'react'
// import { Dropdown } from "react-bootstrap";
// import { HashLink } from 'react-router-hash-link';

// function DropdownCommon({title}) {
//     const scrollWithOffset = (el) => {
//         const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
//         const yOffset = -90; 
//         window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
//     }
//     const [activeId, setActiveId] = useState();
//     const handleActiveClass = (event) => {
//         // console.log('event.traget', event.target.id)
//         setActiveId(event.target.id);
//     }
//     const [hovered, setHovered] = useState(false);
//     const toggleHover = () => setHovered(!hovered);
//     const [showDropdown, setShowDropdown] = useState(false);
//   return (
//     <>
//        <Dropdown show={hovered} onMouseLeave={() => setShowDropdown(false)}  onMouseOver={() => setShowDropdown(true)}>
//             <Dropdown.Toggle variant="" onMouseEnter={toggleHover} onMouseLeave={toggleHover}> {title} </Dropdown.Toggle>
//             <Dropdown.Menu className="langDropdown-menu" show={showDropdown}>                                        
//                 <HashLink className={activeId == "reel-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#reel" id="reel-tab" scroll={el => scrollWithOffset(el)}>REEL</HashLink>
//                 <HashLink className={activeId == "mission-vision-values-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#mission-vision-values" id="mission-vision-values-tab" scroll={el => scrollWithOffset(el)}>MISSION, VISION, VALUES</HashLink>                                        
//                 <HashLink className={activeId == "contract-vehicles-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#contract-vehicles" id="contract-vehicles-tab" scroll={el => scrollWithOffset(el)}>CONTRACT VEHICLES</HashLink>
//                 <HashLink className={activeId == "sam-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#sam" id="sam-tab" scroll={el => scrollWithOffset(el)}>SAM</HashLink>
//                 <HashLink className={activeId == "our-team-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#our-team" id="our-team-tab" scroll={el => scrollWithOffset(el)}>OUR TEAM</HashLink>
//                 <HashLink className={activeId == "milestones-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#milestones" id="milestones-tab" scroll={el => scrollWithOffset(el)}>MILESTONES</HashLink>
//             </Dropdown.Menu>
//         </Dropdown>
//     </>
//   )
// }

// export default DropdownCommon