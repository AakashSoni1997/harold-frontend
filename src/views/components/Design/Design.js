import React from 'react';
import "./Design.scss";

export const Design = ({ className, ImageUrl, DesignContent }) => {
    return (
        <div className={`design-box ${className}`}>
            <div className='image-bx'>
                <img src={ImageUrl} className='img-fluid' />
            </div>
            <div className='content-design'>
                <p>
                    {DesignContent}
                </p>
            </div>
        </div>
    );
}

export const InstructionalServices = ({ className, ImageUrl, InstructionalServicesList }) => {
    return (
        <div className={`design-box ${className}`}>
            <div className='image-bx'>
                <img src={ImageUrl} className='img-fluid' />
            </div>
            <div className='content-design'>
                <ul>
                    {InstructionalServicesList}
                </ul>
            </div>
        </div>
    );
}
