import {addFile, getFiles, updateFile, deleteFile, getFile } from "../database/index.mjs";
import FileModel from "../models/file.model.mjs";
import ErrorModel from "../models/error.model.mjs";
import { addFileHelper, removeFileHelper } from "../helpers/file-helper.mjs";


const addNewFileAsync = async(fileData, file) => {
    const fileName = addFileHelper(file);
    if(!fileName){
        throw new ErrorModel(400, 'no file sent');
    };
    const newFile = await addFile(new FileModel({...fileData, fileName}));
    return newFile;
};

const updateFileDataAsync = async(updatedFile) => {
    return updateFile(updatedFile);
};

const removeFileAsync = async(fileId) => {
    const file = await getFile(fileId);
    removeFileHelper(file.fileName);
    await deleteFile(fileId);
};

export {
    addNewFileAsync,
    updateFileDataAsync,
    removeFileAsync
}
