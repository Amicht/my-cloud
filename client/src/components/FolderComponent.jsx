import { useContext } from 'react'
import {BsFillFolderFill} from 'react-icons/bs'
import { FolderCtxt } from '../contexts/folderCtxt'
import  IsLoadingCtxt  from '../contexts/loadinfCtxt'
import { getFolderData } from '../services/api.service'

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
    <span className="col-md-3">
      <span className='folder' onClick={ChangDirectory}>
        <span className='fs-3'><BsFillFolderFill /></span> 
        <span className='px-2 text-dark'>{props.name}</span>
      </span>
    </span>
  )
}

export default FolderComponent