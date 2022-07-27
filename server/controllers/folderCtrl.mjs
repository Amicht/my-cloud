import { Router }  from "express";
import { addNewFolderAsync, removeAllFolderContentAsync, 
    getAllFolderContentByIdAsync, updateFolderAsync } from '../bl/folders.bl.mjs'
import ErrorModel from "../models/error.model.mjs";

const folderCtrl = Router();


folderCtrl.get('/:folderId',async(req,res) => {
    try{
        const folderContent = await getAllFolderContentByIdAsync(req.params.folderId);
        return res.send(folderContent);
    }
    catch(err){ res.status(err.status || 500).send(err.message || 'Error')}
});

folderCtrl.post('/', async(req,res) =>{
    try{
        const folder = req.body;
        const newFolder = await addNewFolderAsync(folder);
        if(newFolder.name !== undefined){
            res.status(201).send(newFolder);
            return;
        }
        else{
            throw new ErrorModel(400,'unable to add folder' )
        }
    }
    catch(err){ res.status(err.status || 500).send(err.message || 'Error')}
});

folderCtrl.put('/',async(req,res)=>{
    try{
        const folder = req.body;
        const updatedFolder = await updateFolderAsync(folder);
        res.send(updatedFolder);
    }
    catch(err){ res.status(err.status || 500).send(err.message || 'Error')}
})

folderCtrl.delete('/:folderId', async(req,res)=>{
    try{
        await removeAllFolderContentAsync(req.params.folderId);
        res.status(204).send();
        return;
    }
    catch(err){ res.status(204).send(err.message);}
});


export default folderCtrl;