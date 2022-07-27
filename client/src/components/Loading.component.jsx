import React, { useContext } from 'react';
import IsLoadingCtxt from '../contexts/loadinfCtxt';

function LoadingComponent() {
  const {isLoadindgValue} = useContext(IsLoadingCtxt)

  return (
    <>
    {isLoadindgValue?<div className='container loading-modal'>
        <div> <div className="spinner-border text-primary mx-auto bg-transparent" 
        style={{width: "5rem", height: "5rem"}} role="status">
    <span className="visually-hidden bg-transparent">Loading...</span>
    </div></div></div>:null}
    </>
  );
}

export default LoadingComponent;