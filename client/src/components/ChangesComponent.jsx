import { useContext } from "react";
import { FolderCtxt } from "../contexts/folderCtxt";
import IsLoadingCtxt from "../contexts/loadinfCtxt";
import { getFolderData } from "../services/api.service"

const ChangesComponent = (props) => {
  const { SetIsLoadindgValue } = useContext(IsLoadingCtxt);
  const  {setFolderData} = useContext(FolderCtxt);

  return (
    <div>
        <div></div>
    </div>
  )
}

export default ChangesComponent