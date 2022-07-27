# My Cloud - dropbox app
Dropbox / Google-drive 'MERN' mockup app, allows all the crud operations of files and directories management.


## CRUD operations on client side
    Endpoints: 
        folder - `/api/folders/`
        file - `/api/files/`
    GET:
        * get dictory by `id` (params), with all of its content.
    POST:
        * add one directory (most have a uniqe name): 
            request body: `name`, `folder` (parent folderId).
        * add one file:
            request body: `name`, `file`, `folder`(parent folderId).
    PUT: 
        * update file name (`id`, `name`).
        * update folder name (`id` , `name`).
    DELETE
        * delete folder by `id`(params) , with all of its content.
        * delete file by `id` (params).

## Models / interfaces
### file:
```
{
    _id: string;
    name: string;
    fileName: string;
    folder: string;
    file: file
}
```
### Mongo folder:
```
{
    _id: string;
    name: string;
    folder: string;
}
```
### folder responce:
```
{
    folderId: string;
    folderName: string;
    folders: mongo folder[];
    files: file[];
}
```


## Project frameworks / dependencies

### React client:
    react.js
    react-router-dom
    react-bootstrap / bootstrap
    react icons 

### Server:
    node.js
    express.js
    express-fileupload
    mongodb
    mongoose
    uuid
    dotenv
    cors

### Deatabase: 
    mongoDb