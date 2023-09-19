import './Footer.scss';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
const Footer = () => {
    const [isActive, setActive] = useState(false);

    const bottomMenu = () => {
        setActive(!isActive);
    };

    const [footerSearch, footerSearchActive] = useState(false);

    const footerSearchClick = () => {
        footerSearchActive(!footerSearch);
    };


    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleWindowSizeChange = () => setWidth(window.innerWidth);
        handleWindowSizeChange();
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, [width]);
    return (
        <>
            {width >= 992 ?
                <section className={isActive ? 'bottom-footer active' : 'bottom-footer'} >
                    <button className='bottom-bar-btn' onClick={bottomMenu}><img src='/images/three-arrows-icons.png' width={50} /></button>

                    <div className='footer-menu'>
                        <div className='row align-items-end'>
                            <div className='col-xl-9 col-lg-8 col-2'>
                                <ul className='menu-items'>
                                    <li>
                                        <a href='/careers'>Work With Us </a>
                                    </li>
                                    <li>
                                        <a href='/about/reel'>Corporate Reel</a>
                                    </li>
                                    <li>
                                        <a href='/news'>News</a>
                                    </li>
                                    <li>
                                        <a href='/training'>Training Products </a>
                                    </li>
                                    <li>
                                        <a href='/services'>Support Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-xl-3 col-lg-4 col-10 d-flex align-items-end justify-content-end'>
                                <ul className='social-links'>
                                    <li>
                                        <a href='https://www.linkedin.com/company/a--harold-&-associates-llc/'  target="_blank">
                                            <img src="/images/linkedin-icon.png" className='img-fluid' />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>
                :
                <section className={isActive ? 'bottom-footer active' : 'bottom-footer'} >
                    <button className={footerSearch ? 'bottom-bar-btn active' : 'bottom-bar-btn'} onClick={footerSearchClick}><img src='/images/three-arrows-icons.png' width={50} /></button>

                    <div className={footerSearch ? 'footer-menu footer-mobile-show' : 'footer-menu'}>
                        <div className='row align-items-end'>
                            <div className='col-xl-12'>
                                <ul className='menu-items'>
                                    <li>
                                        <a href='/careers'>Work With Us </a>
                                    </li>
                                    <li>
                                        <a href='/about'>Corporate Reel</a>
                                    </li>
                                    <li>
                                        <a href='/news'>News</a>
                                    </li>
                                    <li>
                                        <a href='/training'>Training Products </a>
                                    </li>
                                    <li>
                                        <a href='/services'>Support Services</a>
                                    </li>
                                </ul>
                            </div>
                            <div className='col-xl-12 d-flex align-items-center justify-content-between'>
                                {width >= 521 ?
                                    <Link to="/" className="logo">
                                        <img src="/images/mobile-logo-white.png" alt="aha logo" />
                                    </Link>
                                    :
                                    null
                                }
                                {width <= 520 ?
                                    <>
                                        <div className='logo-social-icons'>
                                            <Link to="/" className="logo">
                                                <img src="/images/mobile-logo-white.png" alt="aha logo" />
                                            </Link>
                                            <ul className='social-links'>
                                                <li>
                                                    <a href='https://www.linkedin.com/company/a--harold-&-associates-llc/'  target="_blank">
                                                        <img src="/images/linkedin-icon.png" className='img-fluid' />
                                                    </a>
                                                </li>
                                                {/* <li>
                                                    <a href='#'>
                                                        <img src="/images/facebook-icon.png" className='img-fluid' />
                                                    </a>
                                                </li> */}
                                            </ul>
                                        </div>
                                    </>
                                    :
                                    null
                                }
                                <div className='right-icon-footer'>
                                    {width >= 521 ?
                                        <ul className='social-links'>
                                            <li>
                                                <a href='https://www.linkedin.com/company/a--harold-&-associates-llc/' target="_blank">
                                                    <img src="/images/linkedin-icon.png" className='img-fluid' />
                                                </a>
                                            </li>
                                            {/* <li>
                                                <a href='#'>
                                                    <img src="/images/facebook-icon.png" className='img-fluid' />
                                                </a>
                                            </li> */}
                                        </ul>
                                        :
                                        null
                                    }
                                    {/* <div className={footerSearch ? 'searchFormFooter show' : 'searchFormFooter'}>
                                        <form>
                                            <img src="/images/search-icon.svg" className='search-icon' />
                                            <input
                                                type="text"
                                                placeholder="Search here"
                                            />
                                        </form>
                                    </div> */}
                                    {/* <div className={footerSearch ? 'search-bx active' : 'search-bx'} onClick={footerSearchClick}>
                                        <img src="/images/search-icon.svg" className='search-icon' />
                                        <div className='close-footer-btn'>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="18.442" height="13.391" viewBox="0 0 18.442 13.391">
                                                <path id="Path_192" data-name="Path 192" d="M1623.728,9543.574l12.241-8.756-12.241-8.875" transform="translate(-9525.538 1636.825) rotate(-90)" fill="none" stroke="#000" strokeMiterlimit="10" strokeWidth="1" />
                                            </svg>

                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            }


        </>
    );
}


export default Footer;