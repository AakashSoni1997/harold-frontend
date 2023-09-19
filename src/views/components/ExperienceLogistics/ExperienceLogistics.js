import React, { useState } from 'react';
import "./ExperienceLogistics.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ExperienceLogistics = ({ location,ImageUrl, ExperienceTitle, ExperienceDescripition, ExperienceFooter, IndexNumber, }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
	console.log("Fsfsdfsdfsfsfsfsf" ,location);
    return (
        <>
            <div className='logistics-experience-bx'>
                <img src={ImageUrl} className="img-fluid" />
                <div className='content-experience'>
                    <h3>{ExperienceTitle}</h3>
                    <p>{ExperienceDescripition}</p>
                    <div className='bottom-tag'>{ExperienceFooter}</div>
                    {/* <a className='plusicon-button' onClick={() => ShowContent(IndexNumber)}>+</a> */}
                    <Button className='plusicon-button' variant="primary" onClick={handleShow}>
                        +
                    </Button>
                </div>
            </div>

            <Modal show={show} dialogClassName="modal-90w" centered onHide={handleClose}>
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
                <Modal.Body>
                    <div  className={`${location == "/services" ? "services" : location == "/logistics" ? "logistics" : location == "/training" ? "training" : ""}-logistics-experience-bx logistics-experience-bx`}>
                        <img src={ImageUrl} className="img-fluid" />
                        <div className='content-experience'>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h3>{ExperienceTitle}</h3>
                                    <p>{ExperienceDescripition}</p>
                                </div>
                                <div className='col-md-3 d-flex align-items-end justify-content-end'>
                                    <div className='bottom-tag'>{ExperienceFooter}</div>
                                </div>
                            </div>
                            <Button className='plusicon-button' variant="primary" onClick={handleClose}>
                                -
                            </Button>
                        </div>
                    </div>
                </Modal.Body>
                {/* <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                </Modal.Footer> */}
            </Modal>
        </>
    );
}




export default ExperienceLogistics;
