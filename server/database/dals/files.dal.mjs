import FileModel from '../models/file.model.mjs';
import { ObjectId } from 'mongodb';

const getFile = (fileId) => {
    return FileModel.findById(fileId);
};
const getFiles = (folderId) => {
    return FileModel.find({folder: folderId})
};
const addFile = (file) => {
    const newFile = new FileModel(file);
    return newFile.save();
};
const updateFile = (file) => {
    return FileModel.updateOne({id: file.id},{$set: {name:file.name}})
}
const updateFilesFolder = (folderId, newFolderId) => {
    return FileModel.updateMany({folder: folderId}, {$set:{folder:newFolderId}})
}
const deleteFile = (fileID) => {
    return FileModel.deleteOne({_id:ObjectId(fileID)});
}
const deleteAllFilesInFolder = (folderId) => {
    return FileModel.deleteMany({folder:folderId});
}
  
export {
    getFile,
    getFiles,
    addFile,
    updateFile,
    updateFilesFolder,
    deleteFile,
    deleteAllFilesInFolder
}



