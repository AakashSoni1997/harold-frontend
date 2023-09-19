import React, { useEffect, useState } from 'react';
import "./InformationTechnologyServicesPage.scss";
import ReactPlayer from 'react-player';


export const InformationTechnologyServicesPage = ({ ConversionTitle, List, VideoUrl }) => {

    const [width, setWidth] = useState(0);

    useEffect(() => {
        const handleWindowSizeChange = () => setWidth(window.innerWidth);
        handleWindowSizeChange();
        window.addEventListener("resize", handleWindowSizeChange);
        return () => window.removeEventListener("resize", handleWindowSizeChange);
    }, [width]);

    return (
        <>
            <div className='information-conversion-content'>
                <div className='row align-items-center'>
                    <div className='col-lg-6'>
                        {width >= 992 ?
                            <div className='point-bullet'></div>
                            :
                            null
                        }
                        <h2>{ConversionTitle}</h2>
                        {width <= 991 ?
                            <div className='video-bx mb-5'>
                                <ReactPlayer url={VideoUrl} playing="true" loop="true" controls="true" width='100%' height='100%' />
                            </div>
                            :
                            null
                        }
                        <ul>
                            {List}
                        </ul>
                    </div>
                    {width >= 992 ?
                        <div className='col-lg-6'>
                            <div className='video-bx'>
                                <ReactPlayer url={VideoUrl} playing="true" loop="true" controls="true" width='100%' height='100%' />
                            </div>
                        </div>
                        :
                        null
                    }
                </div>
            </div>
        </>
    );
}




export default InformationTechnologyServicesPage;
