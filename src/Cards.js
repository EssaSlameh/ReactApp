import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';



function CardComp(props) {

    let [showModal, setShowModal] = useState(false);

    let handleShowModal = () => {
        setShowModal(true);
    };

    let handleCloseModal = () => {
        setShowModal(false);
    };

    return (

        <div className="card-wrapper" >
            <Card style={{
                width: '16rem',
                border: '1px solid rgba(0, 0, 0, 0.1)',
                position: 'relative',
                boxShadow: '10px 10px 10px rgba(0, 0, 0, 0.2)',
                top: '30%'

            }}>
                <Card.Img variant="top" src={props.strMealThumb} />
                <Card.Body style={{
                    padding: '1rem',
                    backgroundColor: 'transparent'

                }}>

                    <Card.Title style={{
                        color: 'InfoBackground'
                    }}>{props.title} </Card.Title>

                    <div style={{
                        textAlign: 'center'
                    }}>
                    </div>


                </Card.Body>
                <div className="button-wrapper">
                    <Button style={{
                        padding: '10px',
                        margin: '10px',
                        border: '0',
                        background: 'transparent'

                    }} onClick={handleShowModal}>See more</Button>
                </div>
            </Card>

            <Modal show={showModal} onHide={handleCloseModal} dialogClassName="custom-modal">
                <Modal.Header closeButton>
                    <Modal.Title>{props.title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {props.description}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleCloseModal} className='btn'>
                        Close
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
}

export default CardComp;
