const serverURL = 'http://localhost:3001';

const ENDPOINTS = {
    folders: "/api/folders/",
    files: '/api/files/',
    myFiles:'/api/my-files/'
};
const METHODS = {
    GET:'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE'
};

const getFolderData = (folderId) => fetch(ENDPOINTS.folders + folderId)
    .then(res => res.json());
    
const createFolder = ({folder, name}) => fetch(ENDPOINTS.folders, {
    method: METHODS.POST,
    headers:{"Content-type": 'application/json'},
    body: JSON.stringify({folder,name})
}).then(() => getFolderData(folder));

const createFile = (form, folder) => fetch(ENDPOINTS.files, {
    method: METHODS.POST,
    body: form,
}).then(() => getFolderData(folder));

const updateFile = (file) => fetch(ENDPOINTS.files, {
    method: METHODS.PUT,
    headers: {"Content-type": 'application/json'},
    body: JSON.stringify(file)
}).then(() => getFolderData(file.folder));

const updateFolder = ({_id,name, folder}) => fetch(ENDPOINTS.folders, {
    method: METHODS.PUT,
    headers: {"Content-type": 'application/json'},
    body: JSON.stringify({id:_id,name})
}).then(() => getFolderData(folder));
    
const deleteFolder = folderId => fetch(ENDPOINTS.folders+folderId,{method:METHODS.DELETE});
const deleteFile = fileId => fetch(ENDPOINTS.files+fileId,{method: METHODS.DELETE});
const getFileSrc = (fileName) => serverURL + ENDPOINTS.myFiles + fileName;


export {
    getFolderData,
    createFolder,
    createFile,
    updateFile,
    updateFolder,
    deleteFile,
    deleteFolder,
    getFileSrc,
}