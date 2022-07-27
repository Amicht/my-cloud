import mongoose from 'mongoose';
const HOSTURL = 'mongodb://localhost:27017/'
const DATABASE = 'my-cloud';

mongoose.connect(HOSTURL + DATABASE);


export { 
    getFile, getFiles, addFile, updateFile,
    updateFilesFolder, deleteFile, deleteAllFilesInFolder
 } from './dals/files.dal.mjs';

export { getFolderById, getFolderByName, getFoldersInFolder, 
    addFolder, updateFolder,deleteFolderById
} from './dals/folders.dal.mjs';

