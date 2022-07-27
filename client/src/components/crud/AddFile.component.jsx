import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineFileAdd } from 'react-icons/ai';
import { FolderCtxt } from '../../contexts/folderCtxt';
import { createFile } from '../../services/api.service';

const AddFileComponent = () => {
    const [show, setShow] = useState(false);
    const {folderData, setFolderData } = useContext(FolderCtxt);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    
    const onFileSubmit = e => {
        e.preventDefault();
        handleClose();
        console.log(folderData.folderId);
        const formData = new FormData(e.target);
        createFile(formData, folderData.folderId)
            .then(data => setFolderData(()=> data));
    }

    return (
    <>
        <span className='add-file' onClick={handleShow}>
            <AiOutlineFileAdd className='fs-3 hover-light' />
        </span>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add File:</Modal.Title>
            </Modal.Header>
            <div className='col-8 text-center mx-auto my-3'>
                <Form onSubmit={onFileSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control 
                        name='name' 
                        type="text" 
                        placeholder="file name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="file">
                        <Form.Control 
                        name='file' 
                        type="file" required />
                    </Form.Group>
                    <Form.Group className="mt-5 mb-3 " controlId="folder">
                        <Form.Control 
                        name='folder' 
                        type="text" 
                        readOnly
                        value={folderData.folderId} />
                    </Form.Group>
                    <Button variant="secondary" onClick={handleClose} className='mx-1'>
                        Close
                    </Button>
                    <Button variant="primary" type="submit">
                        Add
                    </Button>
                </Form> 
            </div>   
        </Modal>
    </>
  )
}

export default AddFileComponent