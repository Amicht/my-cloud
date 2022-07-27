import { addFolder, getFiles, getFolderByName,getFolderById, deleteFolderById, getFoldersInFolder, 
    updateFolder, deleteAllFilesInFolder } from "../database/index.mjs";
import { removeFileHelper } from "../helpers/file-helper.mjs";
import ErrorModel from "../models/error.model.mjs";
import FolderModel from "../models/folder.model.mjs";


const getAllFolderContentByNameAsync = async (folderName) => {
    const folder = await getFolderByName(folderName);
    if(!folder && folderName !== 'root'){
        throw new ErrorModel(404, 'No matching folder')
    }
    const id = folder? folder.id: "root";
    const parentFolder = folder? folder.folder: null;
    const folders = await getFoldersInFolder(id);
    const files = await getFiles(id);
    return {folderName, folderId:id, folders, files, parentFolder};
}

const getAllFolderContentByIdAsync = async (folderId) => {
    
    let folderName = null;
    let folder;
    if(folderId === 'root'){folderName = 'root';}
    else{
        folder = await getFolderById(folderId);
        if(!folder) throw new ErrorModel(404, 'No matching folder');
        folderName = folder.name;
    }
    const parentFolder = folder? folder.folder: null;
    const folders = await getFoldersInFolder(folderId);
    const files = await getFiles(folderId);
    return {folderName, folderId, folders, files, parentFolder};
}

const addNewFolderAsync = async (folder) => {
    const newFolder = await addFolder(new FolderModel(folder));
    return newFolder;
};

const updateFolderAsync = async(folder) => {
    return updateFolder(folder);
}

const deleteFolderAsync = async(folderId) => {
    return deleteFolderById(folderId);
}

const removeAllFolderContentAsync = async(folderId) => {
    const folder = await getAllFolderContentByIdAsync(folderId);
    // 1. delete all the files in the folder:
    folder.files.forEach(f => removeFileHelper(f.fileName));
    await deleteAllFilesInFolder(folderId);
    // 2. check for folders inside thet folder and delete them (recursive):
    folder.folders.forEach(async f => await removeAllFolderContentAsync(f.id));
    // 3. delete folder:
    return deleteFolderAsync(folderId);
}

export {
    getAllFolderContentByNameAsync,
    getAllFolderContentByIdAsync,
    addNewFolderAsync,
    updateFolderAsync,
    removeAllFolderContentAsync
};
