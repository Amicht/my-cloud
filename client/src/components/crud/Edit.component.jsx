import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import {FiEdit2} from 'react-icons/fi'
import { FolderCtxt } from '../../contexts/folderCtxt';
import { updateFile, updateFolder } from '../../services/api.service';
import { Button, Form, FormLabel } from 'react-bootstrap';

const EditComponent = (props) =>{
    const { setFolderData } = useContext(FolderCtxt);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const submitFolder = e => {
        e.preventDefault();
        handleClose();
        const name = e.target[0].value;
        
        if(!!props.fileName){
            updateFile({...props, name}).then(data => setFolderData(()=> data));
        }
        else{
            updateFolder({...props, name}).then(data => setFolderData(()=> data));
        }
    }
    
    return (
        <>
        <span className='hover-light text-danger' onClick={handleShow}>
            <FiEdit2 className='fs-5 mx-2'/>
        </span>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Edit {props.fileName?"File":"Folder"}</Modal.Title>
            </Modal.Header>
            <div className='col-8 text-center mx-auto my-3'>
                <Form onSubmit={submitFolder}>
                    <FormLabel>Name: </FormLabel>
                    <Form.Group className="mb-3" controlId="folderName">
                        <Form.Control name='name' 
                        required
                        type="text" 
                        defaultValue={props.name} />
                    </Form.Group>

                    <Button variant="secondary" onClick={handleClose} className='mx-1'>
                        Close
                    </Button>
                    <Button variant="primary" type='submit'>
                        edit
                    </Button>
                </Form> 
            </div>   
        </Modal>
    </>
  )
}

export default EditComponent