const types = {
    "pdf": "pdf",
    "txt": "text",
    "zip": "zip",
    "aac": "audio",
    "wav": "audio",
    "mp3": "audio",
    "mp4": "video",
    "mpeg": "video",
    "avi": "video",
    "avif": "image",
    "gif": "image",
    "jpeg": "image",
    "jpg": "image",
    "png": "image",
    "svg": "image"
};

// const icons = {
//     text: "AiFillFileText",
//     image: "BsFillFileImageFill",
//     audio: "BsFillFileMusicFill",
//     video: "BsFillFilePlayFill",
//     pdf: "BsFillFilePdfFill",
//     zip: "GrDocumentZip",
//     other: "AiFillFile"
// }

const getFileType = fileName => {
    const fileEnd = fileName.split('.').pop();
    return types[fileEnd] || "other";
}



export { getFileType };