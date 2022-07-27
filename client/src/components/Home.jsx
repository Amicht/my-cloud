import { useEffect, useState } from "react"
import { getFolderData } from "../services/api.service";
import FileComponent from "./FileComponent";
import FolderComponent from "./FolderComponent";
import { FolderCtxt } from "../contexts/folderCtxt";
import IsLoadindgCtxt from '../contexts/loadinfCtxt'
import HeaderComponent from "./HeaderComponent";
import LoadingComponent from "./LoadingComponent";
import AddFileComponent from "./AddFileComponent";
import FolderTitle from "./FolderTitle";
import AddFolder from "./AddFolder";


const Home = () => {
  const [isLoadindgValue, SetIsLoadindgValue] = useState(false);
  const [ folderData, setFolderData ] = useState({folderId: "root",files:[],folders:[]});

  useEffect(()=>{
    getFolderData("root").then(data => {
      setFolderData(data);
    });
  },[setFolderData]);

  return (
    <FolderCtxt.Provider value={{folderData,setFolderData}}>
    <IsLoadindgCtxt.Provider value={{isLoadindgValue, SetIsLoadindgValue}}>

      <HeaderComponent {...folderData}/>
      <div>
        <AddFileComponent />
        <AddFolder />
      </div>

      <div className="text-center">
        {folderData.folderName? <>

        <FolderTitle title={folderData.folderName}/>

        <div className="row mt-5 text-start">
          {folderData.folders.map((file,i) => <FolderComponent key={i} props={file} />)}
        </div>

        {folderData.folders.length> 0?<hr />:null}

        <div className="row mt-5 text-start">
          {folderData.files.map((folder,i) => <FileComponent key={i} props={folder} />)}
        </div></>
        
        :null}
      </div>

      <LoadingComponent />

    </IsLoadindgCtxt.Provider>
    </FolderCtxt.Provider>
  );
}

export default Home