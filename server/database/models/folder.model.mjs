import  mongoose from 'mongoose';
const {model, Schema }  = mongoose;

const FolderSchema = new Schema({
    name: {type: String , required: true, index: { unique: true }},
    folder: {type: String, required: true},
});

const FolderModel = model('folders', FolderSchema);

export default FolderModel;