class FileModel{

    constructor(file){
        this.id = file.id;
        this.name = file.name;
        this.fileName = file.fileName;
        this.folder = file.folder || 'root';
    }
};

export default FileModel;
