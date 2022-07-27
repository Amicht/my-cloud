import React from 'react'
import { BsFillFolderFill } from 'react-icons/bs'

const FolderTitle = ({title}) => {
  return (
    <div className="text-center mx-auto">
      <span className='title-folder' >
        {title !== 'root'?<>
        <span ><BsFillFolderFill /></span> 
        <span className='px-2 text-dark'>{title}</span>
        </>: <span className='px-2 text-dark'>My Cloud</span>
        }
      </span>
    </div>
  )
};

export default FolderTitle;