import Modal from 'react-bootstrap/Modal';
import { useContext, useState } from 'react';
import { RiDeleteBin7Line } from 'react-icons/ri'
import { FolderCtxt } from '../../contexts/folderCtxt';
import { deleteFile, deleteFolder, getFolderData } from '../../services/api.service';
import { Button } from 'react-bootstrap';

const DeleteComponent = (props) =>{
    const { setFolderData } = useContext(FolderCtxt);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleDelete = e => {
        e.preventDefault();
        handleClose();
        console.log(props);
        if(!!props.fileName){
            deleteFile(props._id)
            .then(()=> getFolderData(props.folder))
            .then(data => setFolderData(()=> data));
        }
        else{
            deleteFolder(props._id)
            .then(()=> getFolderData(props.folder))
            .then(data => setFolderData(()=> data));
        }
    }
    
    return (
        <>
        <span className='hover-light text-secondery' onClick={handleShow}>
            <RiDeleteBin7Line className='fs-5 mx-2' />
        </span>

        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Delete {props.fileName? "File":"Folder"}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                Are you sure you want to delete "{props.name}"?
            </Modal.Body>
   
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose} className='mx-1'>
                    Close
                </Button>
                <Button variant="danger" onClick={handleDelete}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    </>
  )
}

export default DeleteComponent