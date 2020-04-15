import {fileType} from "../constants/fileTypes";

export const getFileExtension = (file) =>{
  if (file.type===fileType.directory) return "zip";
  if (file.type === fileType.link) return "link";
  return file.fileName.split('.')[file.fileName.split('.').length -1];
}
export const getParentFolder = (id)=>{
  return {
    id,
    name: '..'
  }
}