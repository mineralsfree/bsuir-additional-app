import {fileType} from "../constants/fileTypes";

export const getFileExtension = (file) =>{
  if (file.type===fileType.directory) return "zip";
  return file.fileName.split('.')[file.fileName.split('.').length -1];
}