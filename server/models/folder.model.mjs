class FolderModel {

    constructor(folder){
        this.id = folder.id;
        this.name = folder.name;
        this.folder = folder.folder || 'root';
    }
}

export default FolderModel;
