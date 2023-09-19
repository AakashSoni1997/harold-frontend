import React, { useState } from 'react';
import "./ExperienceTraining.scss";

export const ExperienceTraining = ({ ImageUrl, ExperienceTitle, ExperienceDescripition, ExperienceFooter, IndexNumber, }) => {
    const [currentIndex, setCurrentIndex] = useState();

    const ShowContent = (id) => {
        if (currentIndex === id) {
            setCurrentIndex()
        } else {
            setCurrentIndex(id)
        }
    }
    return (
        <>
            <div className='col-xl-4 col-lg-6 col-sm-6 d-flex'>
                <div className={currentIndex === IndexNumber ? 'experience-bx active' : 'experience-bx'}>
                    <img src={ImageUrl} className="img-fluid" />
                    <div className='content-experience'>
                        <h3>{ExperienceTitle}</h3>
                        <p>{ExperienceDescripition}</p>
                        <div className='bottom-tag'>{ExperienceFooter}</div>
                        <a className='plusicon-button' onClick={() => ShowContent(IndexNumber)}>+</a>
                    </div>
                </div>
            </div>
        </>
    );
}




export default ExperienceTraining;
