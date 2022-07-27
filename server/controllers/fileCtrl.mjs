import {Router}  from "express";
import { addNewFileAsync, removeFileAsync, updateFileDataAsync } from '../bl/files.bl.mjs'
import ErrorModel from "../models/error.model.mjs";

const fileCtrl = Router();

fileCtrl.post('/', async (req,res) => {
    try{
        console.log("files: "+req);
        console.log("req.body: "+req);
        const newFile = await addNewFileAsync(req.body, req.files.file);
        if(!newFile.name){
            throw new ErrorModel(400, 'unable to add');
        };
        res.send(newFile);
        return;
    }
    catch(err) { res.status(err.status || 500).send(err.message || 'Error')}
});

fileCtrl.put('/',async(req,res)=>{
    try{
        const updatedFile = req.body;
        const result = await updateFileDataAsync(updatedFile);
        res.send(result);
    }
    catch(err){ res.status(400).send('Error')}
})

fileCtrl.delete('/:fileId', async(req,res)=>{
    try{
        await removeFileAsync(req.params.fileId);
        res.status(204).send();
    }
    catch(err){res.status(204).send()}
});


export default fileCtrl;