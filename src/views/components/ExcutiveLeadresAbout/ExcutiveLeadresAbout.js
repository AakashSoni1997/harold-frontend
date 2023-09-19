import React, { useEffect, useState } from 'react';
import { getApicalling } from '../../Apicalling/api';
import "./ExcutiveLeadresAbout.scss";
import { baseUrlPostGres } from '../constant';
import Parser from 'html-react-parser';
export const ExcutiveLeadresAbout = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const MouseOver = (id) => {
        setCurrentIndex(id)
    }

    const [Apidata, setApidata] = useState()

    useEffect(() => {
        console.log("apicalling", getApicalling("about-leaders").then(res => res.status && setApidata(res.success.reverse())))
    }, [])

    return (
        <>
            <div className='leadres-position-sec'>
                <div className='row'>
                    <div className='col-lg-6 leaders-bx'>
                        {Apidata && Apidata.map((ele, i) => {
                            return (
                                <>
                                    <div className={currentIndex === (i + 1) ? 'leaders-col leaders-1 active' : 'leaders-col leaders-1'} onClick={() => MouseOver(i + 1)}>
                                        <div className='leader-profile'>
                                            <img src={`${baseUrlPostGres()}/${ele && ele.image}`} alt='img' className='img-fluid' />
                                            <div className='leader-detail'>
                                                <h4>{ele.leaders_name}</h4>
                                                <p>{ele.designation}</p>
                                            </div>
                                        </div>
                                    </div>
                                </>
                            )
                        })}
                    </div>
                    <div className='col-lg-6'>
                        {Apidata && Apidata.map((ele, i) => {
                            return (
                                <>
                                    <div className={currentIndex === (i + 1) ? 'leader-text active' : "leader-text"}>

                                        <div className='head-leader'>
                                            <h5>{ele.leaders_name}</h5>

                                            {ele.leaders_name.includes("Andrew")  && <a rel='noreferrer' href="https://www.linkedin.com/in/andy-harold-421bb2/" className='linkedin-icon' target="_blank">
                                                    <img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
                                                </a>
                                            }

                                            {ele.leaders_name.includes("Leslie") && <a rel='noreferrer' href="https://www.linkedin.com/in/leslieleavell/" className='linkedin-icon' target="_blank">
                                                <img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
                                            </a>}
                                            {/* <span>hello</span> */}
                                            {
                                            ele.leaders_name.includes("Angie") && <a rel='noreferrer' href="https://www.linkedin.com/in/angie-harper-23a89b3a/" className='linkedin-icon' target="_blank">
                                                <img src='/images/linkedin-icon-dark.svg' alt='linkedin' className='img-fluid' />
                                            </a>}

                                        </div>

                                        {Parser(ele.description)}
                                    </div>
                                </>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ExcutiveLeadresAbout;
