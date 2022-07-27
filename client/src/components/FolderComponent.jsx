import { useContext } from 'react'
import {BsFillFolderFill} from 'react-icons/bs'
import { FolderCtxt } from '../contexts/folderCtxt'
import  IsLoadingCtxt  from '../contexts/loadinfCtxt'
import { getFolderData } from '../services/api.service'
import DeleteComponent from './Delete.component'
import EditComponent from './EditComponent'

const FolderComponent = ({props}) => {
  const { SetIsLoadindgValue } = useContext(IsLoadingCtxt);
  const  {setFolderData} = useContext(FolderCtxt);
  
  const ChangDirectory = ()=> {
    SetIsLoadindgValue(()=>true);
    getFolderData(props._id).then(data => {
      setFolderData(() => data);
      SetIsLoadindgValue(() =>false);
    });
  }
  return (
    <div className="col-md-3 icons-container">
      <span className='folder' onClick={ChangDirectory}>
        <span className='fs-3'><BsFillFolderFill /></span> 
        <span className='px-2 text-dark'>{props.name}</span>
      </span>
      <span className='crud-icons'>
        <EditComponent {...props}/>
        <DeleteComponent {...props}/>
      </span>
    </div>
  )
}

export default FolderComponent