import React, { useState } from 'react';
import "./FmsTraining.scss";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

export const FmsTraining = ({ FmsImageUrl, FmsExperienceTitle, FmsExperienceDescripition, IndexNumber }) => {
    const [currentIndex, setCurrentIndex] = useState();

    const ShowContent = (id) => {
        if (currentIndex === id) {
            setCurrentIndex()
        } else {
            setCurrentIndex(id)
        }
    }
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    return (
        <>
            <div className="col-lg-4 col-md-6 d-flex">
                <div className={currentIndex === IndexNumber ? 'Fms-experience-bx active' : 'Fms-experience-bx'}>
                    <img src={FmsImageUrl} className="img-fluid" />
                    <div className='Fms-content-experience'>
                        <h3>{FmsExperienceTitle}</h3>
                        <p>{FmsExperienceDescripition}</p>
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
                    <div className='Fms-experience-bx'>
                        <img src={FmsImageUrl} className="img-fluid" />
                        <div className='Fms-content-experience'>
                            <h3>{FmsExperienceTitle}</h3>
                            <p>{FmsExperienceDescripition}</p>
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




export default FmsTraining;
