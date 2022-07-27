import { createContext } from "react";

const initialFolderValues = {name: "root", files:[],folders:[]}

export const  FolderCtxt = createContext(initialFolderValues);