import React, { useState, useEffect } from 'react';
import { Dropdown } from "react-bootstrap";
import { Link, NavLink, useHistory } from "react-router-dom";
import { HashLink } from 'react-router-hash-link';
import "./Header.scss";

const Header = () => {
    const history=useHistory();

    const [menu, setMenu] = useState(false);

    const menuToggle = () => {
        setMenu(!menu);
    }

   
    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleWindowSizeChange = () => setWidth(window.innerWidth);
        handleWindowSizeChange();
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, [width]);

    const [SearchToggle, SearchToggleActive] = useState(false);
    const handleClick = event => {
        SearchToggleActive(current => !current);
    };

    const scrollWithOffset = (el) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -90; 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
        setMenu(!menu)
    }

    const [activeId, setActiveId] = useState();
    const handleActiveClass = (event) => {
        console.log('event.traget', event.target.id)
        setActiveId(event.target.id);
    }

    useEffect(()=>{
        console.log("i am loaded");
    },[activeId])

    const [hoveredAbout, setHoveredAbout] = useState(false);
    const toggleHoverAbout = () => setHoveredAbout(!hoveredAbout);
    const [hoveredTraining, setHoveredTraining] = useState(false);
    const toggleHoverTraining = () => setHoveredTraining(!hoveredTraining);
    const [hoveredServices, setHoveredServices] = useState(false);
    const toggleHoverServices = () => setHoveredServices(!hoveredServices);
    const [hoveredLogistics, setHoveredLogistics] = useState(false);
    const toggleHoverLogistics = () => setHoveredLogistics(!hoveredLogistics);
    const [hoveredFMS, setHoveredFMS] = useState(false);
    const toggleHoverFMS = () => setHoveredFMS(!hoveredFMS);
    
    
    const [hoveredCareeres, setHoveredCareeres] = useState(false);
    const toggleHoverCareers = () => setHoveredCareeres(!hoveredCareeres);

    return (
        <header className={`aha-header`}>
            <div className="container-fluid">
                <nav>
                <div className='align-items-center d-flex justify-content-between w-100'>
                    <Link to="/" className="logo">
                        {width >= 992 ?
                            <img src="/images/aha-logo.png" alt="aha logo" />
                            :
                            null
                        }
                        {width <= 991 ?
                            <img src="/images/mobile-logo.png" alt="aha logo" />
                            :
                            null
                        }
                    </Link>
                    <div className='d-flex justify-content-between align-items-center'>
                        <div className='toggle-menu' onClick={menuToggle}>
                            <span className='icon-bar top-bar'></span>
                            <span className='icon-bar middle-bar'></span>
                            <span className='icon-bar bottom-bar'></span>
                        </div>
                    </div>
                </div>
                    <div className={menu ? "nav-right active" : "nav-right"}>
                        <ul>
                            <li className="sub-menu">
                                <Dropdown show={hoveredAbout} onMouseEnter={toggleHoverAbout} onMouseLeave={toggleHoverAbout}>
                                    <Link to={"/about"}><Dropdown.Toggle  variant="" > About </Dropdown.Toggle></Link>

                                    <Dropdown.Menu show={hoveredAbout} className="langDropdown-menu">
                                        <HashLink className={activeId == "reel-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#reel" id="reel-tab" scroll={el => scrollWithOffset(el)}>REEL</HashLink>
                                        <HashLink className={activeId == "mission-vision-values-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#mission-vision-values" id="mission-vision-values-tab" scroll={el => scrollWithOffset(el)}>MISSION, VISION, VALUES</HashLink>                                        
                                        <HashLink className={activeId == "contract-vehicles-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about?id=contract-about-section" id="contract-vehicles-tab" scroll={el => scrollWithOffset(el)}>CONTRACT VEHICLES</HashLink>
                                        <HashLink className={activeId == "sam-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#sam" id="sam-tab" scroll={el => scrollWithOffset(el)}>SAM</HashLink>
                                       <HashLink className={activeId == "our-team-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#our-team" id="our-team-tab" scroll={el => scrollWithOffset(el)}>OUR TEAM</HashLink>
                                        <HashLink className={activeId == "milestones-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/about#milestones" id="milestones-tab" scroll={el => scrollWithOffset(el)}>MILESTONES</HashLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="sub-menu">
                                <Dropdown show={hoveredTraining} onMouseEnter={toggleHoverTraining} onMouseLeave={toggleHoverTraining}>
                                    <Link to={"/training"}><Dropdown.Toggle variant=""> Training </Dropdown.Toggle></Link>
                                    <Dropdown.Menu show={hoveredTraining} className="langDropdown-menu">
                                        <HashLink className={activeId == "pm-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/training#project-management" id="pm-tab" scroll={el => scrollWithOffset(el)}>PROJECT MANAGEMENT</HashLink>
                                        <HashLink className={activeId == "analysis-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/training#analysis" id='analysis-tab' scroll={el => scrollWithOffset(el)}>ANALYSIS</HashLink>
                                        <HashLink className={activeId == "design-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/training#design" id="design-tab" scroll={el => scrollWithOffset(el)}>DESIGN</HashLink>
                                        <HashLink className={activeId == "development-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/training#development" id="development-tab" scroll={el => scrollWithOffset(el)}>DEVELOPMENT</HashLink>
                                        <HashLink className={activeId == "conversion-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/training#conversion" id="conversion-tab" scroll={el => scrollWithOffset(el)}>CONVERSION</HashLink>
                                        <HashLink className={activeId == "experience-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/training#experience" id="experience-tab" scroll={el => scrollWithOffset(el)}>EXPERIENCE</HashLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>
                            <li className="sub-menu">
                                <Dropdown  show={hoveredServices}  onMouseEnter={toggleHoverServices} onMouseLeave={toggleHoverServices}>
                                    <Link to={"/services"}><Dropdown.Toggle renderMenuOnMount={true} flip={false} variant=""> Services </Dropdown.Toggle></Link>
                                    <Dropdown.Menu renderOnMount={true}  flip={false} show={hoveredServices} className="langDropdown-menu">
                                        <HashLink className={activeId == "pm-support-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/services#pm-support" id="pm-support-tab" scroll={el => scrollWithOffset(el)}>PM SUPPORT</HashLink>
                                        <HashLink className={activeId == "onsite-smes-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/services#onsite-smes" id="onsite-smes-tab" scroll={el => scrollWithOffset(el)}>ONSITE SMES</HashLink>
                                        <HashLink className={activeId == "instructional-services-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/services#instructional-services" id="instructional-services-tab" scroll={el => scrollWithOffset(el)}>INSTRUCTIONAL SERVICES</HashLink>
                                        <HashLink className={activeId == "administriave-management-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/services#administriave-management" id="administriave-management-tab" scroll={el => scrollWithOffset(el)}>ADMINISTRATIVE MANAGEMENT</HashLink>
                                        <HashLink className={activeId == "it-support-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/services#it-support" id="it-support-tab" scroll={el => scrollWithOffset(el)}>IT SUPPORT</HashLink>
                                        <HashLink className={activeId == "experience-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/services#experience" id="experience-tab" scroll={el => scrollWithOffset(el)}>EXPERIENCE</HashLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            <li className="sub-menu">
                                <Dropdown show={hoveredLogistics} onMouseEnter={toggleHoverLogistics} onMouseLeave={toggleHoverLogistics}>
                                    <Link to={"/logistics"}><Dropdown.Toggle variant=""> Logistics </Dropdown.Toggle></Link>
                                    <Dropdown.Menu show={hoveredLogistics} className="langDropdown-menu">
                                        <HashLink className={activeId == "capabilities-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/logistics#capabilities" id="capabilities-tab" scroll={el => scrollWithOffset(el)}>CAPABILITIES</HashLink>
                                        <HashLink className={activeId == "experience-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/logistics#experience" id="experience-tab" scroll={el => scrollWithOffset(el)}>EXPERIENCE</HashLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            <li className="sub-menu">
                            <Dropdown show={hoveredFMS} onMouseEnter={toggleHoverFMS} onMouseLeave={toggleHoverFMS}>
                                    <Link to={"/fms"}><Dropdown.Toggle variant=""> FMS </Dropdown.Toggle></Link>
                                    <Dropdown.Menu show={hoveredFMS} className="langDropdown-menu">
                                        <HashLink className={activeId == "capabilities-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/fms#capabilities" id="capabilities-tab" scroll={el => scrollWithOffset(el)}>CAPABILITIES</HashLink>
                                        <HashLink className={activeId == "niche-capabilities-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/fms#niche-capabilities" id="niche-capabilities-tab" scroll={el => scrollWithOffset(el)}>NICHE CAPABILITIES</HashLink>
                                        <HashLink className={activeId == "experience-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/fms#experience" id="experience-tab" scroll={el => scrollWithOffset(el)}>EXPERIENCE</HashLink>
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            <li className="sub-menu">
                                <Dropdown show={hoveredCareeres} onMouseEnter={toggleHoverCareers} onMouseLeave={toggleHoverCareers}>
                                    <Link to={"/careers"}><Dropdown.Toggle variant="">Careers</Dropdown.Toggle></Link>
                                    <Dropdown.Menu show={hoveredCareeres} className="langDropdown-menu">
                                        <HashLink className={activeId == "benifits-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/careers#benifits" id="benifits-tab" scroll={el => scrollWithOffset(el)}>Benefits</HashLink>
                                        <HashLink className={activeId == "veterans-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/careers#veterans" id="veterans-tab" scroll={el => scrollWithOffset(el)}>VETERANS</HashLink>
                                        <HashLink className={activeId == "jobs-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/careers#jobs" id="jobs-tab" scroll={el => scrollWithOffset(el)}>Jobs</HashLink>
                                        <HashLink className={activeId == "notice-tab" ? 'dropdown-item active' : 'dropdown-item'} onClick={(event)=>handleActiveClass(event)} smooth to="/careers#notice" id="notice-tab" scroll={el => scrollWithOffset(el)}>Notice</HashLink>
                                        
                                    </Dropdown.Menu>
                                </Dropdown>
                            </li>

                            <li className="sub-menu">
                                <NavLink to={"/contact"}> Contact </NavLink>
                            </li>
                            <li className="sub-menu">
                                <NavLink to="/employees" onClick={menuToggle}>Employees</NavLink>
                            </li>
                            {width >= 992 ?
                                <li className="search-menu">
                                    <button className={SearchToggle ? 'search-show' : ''} onClick={handleClick}>
                                        <img src="/images/search-icon.svg" alt="Search" />
                                    </button>
                                    <div className={SearchToggle ? 'searchForm searchForm-show' : 'searchForm'}>
                                        <form>
                                            <input
                                                type="text"
                                                placeholder="Search here"
                                            />
                                        </form>
                                    </div>
                                </li>
                                :
                                null
                            }
                        </ul>
                    </div>
                </nav>
            </div>
        </header>

    );
}



export default Header;
