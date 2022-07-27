import { useEffect, useState } from "react"
import { getFolderData } from "../services/api.service";
import FileComponent from "./File.component";
import FolderComponent from "./Folder.component";
import { FolderCtxt } from "../contexts/folderCtxt";
import IsLoadindgCtxt from '../contexts/loadinfCtxt'
import HeaderComponent from "./Header.component";
import LoadingComponent from "./Loading.component";
import AddFileComponent from "./crud/AddFile.component";
import FolderTitle from "./FolderTitle.component";
import AddFolder from "./crud/AddFolder.component";


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
          {folderData.folders.map((folder,i) => <FolderComponent key={i} props={folder} />)}
        </div>

        {folderData.folders.length> 0?<hr />:null}

        <div className="row mt-5 text-start">
          {folderData.files.map((file,i) => <FileComponent key={i} props={file} />)}
        </div></>
        
        :null}
      </div>

      <LoadingComponent />

    </IsLoadindgCtxt.Provider>
    </FolderCtxt.Provider>
  );
}

export default Home