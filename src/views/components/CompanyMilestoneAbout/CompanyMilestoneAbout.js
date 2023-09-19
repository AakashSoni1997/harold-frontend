import React, { useEffect, useState } from 'react';
import "./CompanyMilestoneAbout.scss";
import ImageGallery from 'react-image-gallery';
import { getApicalling } from '../../Apicalling/api';



const CompanyMilestoneAbout = () => {
    const [Apidata, setApidata] = useState()

    useEffect(() => {
        console.log("apicalling", getApicalling("about-milestone").then(res => res.status && setApidata(res.success)))
    }, [])
    console.log(Apidata, "Apidataaaaaaaaaaaaaaaaaaaaaaaaa")

    return (
        <>
            {
                Apidata &&
                (<ImageGallery
                    thumbnailPosition="top"
                    infinite={true}
                    autoPlay={true}
                    items={Apidata}
                    slideInterval={10000}
                />)
            }
        </>
    );
}

export default CompanyMilestoneAbout;
