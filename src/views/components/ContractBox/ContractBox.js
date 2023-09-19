import React, { useState } from 'react';
import "./ContractBox.scss";

export const ContractBox = ({ className, contractData }) => {
    return (
        <div className={`contract-box ${className}`} dangerouslySetInnerHTML={{ __html: contractData }}></div>
    );
}




export default ContractBox;
