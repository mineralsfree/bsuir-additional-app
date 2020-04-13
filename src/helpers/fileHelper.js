export const getFileExtension = (file) =>{
  return file.fileName.split('.')[file.fileName.split('.').length -1];
}