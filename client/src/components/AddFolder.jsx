import React, { useContext, useState } from 'react';
import { Form } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { AiOutlineFolderAdd } from 'react-icons/ai';
import { FolderCtxt } from '../contexts/folderCtxt';
import { createFolder } from '../services/api.service';


const AddFolder = () => {
    const {folderData, setFolderData } = useContext(FolderCtxt);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    const submitFolder = e => {
        e.preventDefault();
        handleClose();
        console.log(folderData);
        const folder = {
            name: e.target[0].value,
            folder: folderData.folderId
        }
        createFolder(folder).then(data => setFolderData(()=> data));
        
    }

    return (
    <>
        <span className='folder' onClick={handleShow}>
        <AiOutlineFolderAdd className='fs-1'/>
        </span>

        <Modal show={show} onHide={handleClose}>
            <div className='col-8 text-center mx-auto my-3'>
                <h3>Add folder:</h3>
                <Form onSubmit={submitFolder}>
                    <Form.Group className="mb-3" controlId="folderName">
                        <Form.Control name='foldernName' required
                        type="text" placeholder="folder name" />
                    </Form.Group>

                    <Button variant="secondary" onClick={handleClose} className='mx-1'>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        add
                    </Button>
                </Form> 
            </div>   
        </Modal>
    </>
    )
}

export default AddFolder