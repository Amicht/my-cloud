import express  from "express";
import dotenv from 'dotenv';
import cors from 'cors';
import fileUpload from 'express-fileupload';
import folderCtrl from './controllers/folderCtrl.mjs'
import fileCtrl from "./controllers/fileCtrl.mjs";
dotenv.config();

const PORT = process.env.PORT;
const app = express();

app.use(cors({ origin:"http://localhost:3000/" }));
app.use(express.urlencoded({extended:true}));
app.use(express.json());
app.use(fileUpload({limits: { fileSize: 50 * 1024 * 1024 }}));

app.use('/api/my-files', express.static('files'));
app.use('/api/files', fileCtrl);
app.use('/api/folders', folderCtrl);
  

app.listen(PORT, ()=> console.log('Listening to http://localhost:' + PORT))