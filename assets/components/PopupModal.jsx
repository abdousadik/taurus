import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const PopupModal = ({ show, handleClose, onChangeEvent, value, title, content, button, buttonColor }) => {

    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>{title}</Modal.Title>
                </Modal.Header>
                <Modal.Body>{content}</Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Fermer
                    </Button>
                    <Button variant={buttonColor} onClick={() => onChangeEvent(value)}>
                        {button}
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default PopupModal;