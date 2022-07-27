import {v4} from 'uuid';
import { writeFileSync, unlinkSync } from 'fs';

const addFileHelper = (file) => {
    
    if(file.data){
        const fileNameEnd = file.name.split('.').pop();
        const fileName = v4()+ '.' + fileNameEnd;
        writeFileSync('./files/' + fileName,file.data);
        return fileName;
    }
    else{
        return null;
    };
};

const removeFileHelper = (fileName) => {
    if(!fileName || !unlinkSync('./files/' + fileName)) return;
    unlinkSync('./files/' + fileName);
}

export {
    addFileHelper,
    removeFileHelper
}
