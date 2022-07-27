import { ObjectId } from 'mongodb';
import FolderModel from '../models/folder.model.mjs';


const getFoldersInFolder = (folderId) => {
    return FolderModel.find({folder: folderId})
};

const getFolderByName = (folderName) => {
    return FolderModel.findOne({name: folderName});
};
const getFolderById = (folderId) => {
    return FolderModel.findById(ObjectId(folderId));
};
const addFolder = (folder) => {
    const newFolder = new FolderModel(folder);
    return newFolder.save();
}
const updateFolder = (folder) => {
    return FolderModel.updateOne({id:folder.id}, {$set:folder});
}
const deleteFolderById = (folderId) => {
    return FolderModel.deleteOne({id: folderId});
}

export {
    getFolderByName,
    getFolderById,
    getFoldersInFolder,
    addFolder,
    updateFolder,
    deleteFolderById
}

