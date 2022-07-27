import {BsFillFileImageFill, BsFillFileMusicFill, BsFillFilePlayFill, BsFillFilePdfFill} from 'react-icons/bs';
import {AiFillFileText, AiFillFile} from 'react-icons/ai';
import { GrDocumentZip } from 'react-icons/gr';
import { getFileType } from '../services/fileType.service';
import { getFileSrc } from '../services/api.service';
import { useState } from 'react';


const FileComponent = ({props}) => {
  const fileType = getFileType(props.fileName);
  const [show, setShow] = useState(false);
  const showFile = () => setShow(()=> true);
  const hideFile = () => setShow(()=> false);
  return (
    <>
    <span className="col-md-3 text-dark">
      <span className='file hover-light' onClick={showFile}>
        <span className='fs-3'>
          {fileType === 'image'?<BsFillFileImageFill className='text-primary'/>:null}
          {fileType === 'audio'?<BsFillFileMusicFill className='text-primary'/>:null}
          {fileType === 'video'?<BsFillFilePlayFill className='text-primary'/>:null}
          {fileType === 'text'?<AiFillFileText className='text-secondary'/>:null}
          {fileType === 'pdf'?<BsFillFilePdfFill className='text-secondary'/>:null}
          {fileType === 'zip'?<GrDocumentZip className='text-success'/>:null}
          {fileType === 'other'?<AiFillFile className='text-dark'/>:null}
        </span> 
        <span className='px-2'>{props.name}</span>
      </span>
    </span>

    {show && fileType==='image'?<div className='popup-image'>
      <img className='col-sm-5' src={getFileSrc(props.fileName)} alt={props.name}/>
      <div className='mt-4'>
        <button className='btn btn-light' onClick={hideFile}>close</button>
      </div>
      </div>:null}
    </>
  )
}

export default FileComponent