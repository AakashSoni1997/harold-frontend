import React, { useState } from 'react';
import "./ExperienceServices.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const ExperienceServices = ({ ImageUrl, ExperienceTitle, ExperienceDescripition, ExperienceFooter, IndexNumber, }) => {

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className='col-xl-4 col-lg-6 col-md-6 d-flex'>
                <div className='sevices-experience-bx'>
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
            </div>

            <Modal show={show} dialogClassName="modal-90w" centered onHide={handleClose}>
                {/* <Modal.Header closeButton>
                </Modal.Header> */}
                <Modal.Body>
                    <div className='sevices-experience-bx'>
                        <img src={ImageUrl} className="img-fluid" />
                        <div className='content-experience'>
                            <div className='row'>
                                <div className='col-md-9'>
                                    <h3>{ExperienceTitle}</h3>
                                    <p>{ExperienceDescripition}</p>
                                </div>
                                <div className='col-md-3'>
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




export default ExperienceServices;
