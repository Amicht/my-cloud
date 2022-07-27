import  mongoose from 'mongoose';
const {model, Schema }  = mongoose;

const FileSchema = new Schema({
    name: {type: String , required: true},
    fileName: {type: String, required: true},
    folder: {type: String, required: true}
});

const FileModel = model('files', FileSchema);

export default FileModel;