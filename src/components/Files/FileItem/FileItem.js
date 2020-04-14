import React from 'react'
import {cn} from "@bem-react/classname";
import FileIcon, {defaultStyles} from "react-file-icon";
import {getFileExtension} from "../../../helpers/fileHelper";
import './FileItem.scss'
import {fileType} from "../../../constants/fileTypes";

const fileItemCn = cn('file-item')
export const FilesItem = props => {
  const file = props.file;
  const fileExtension = (typeof file.fileName == "string") && getFileExtension(file);
  return (<div onDoubleClick={props.file.type === fileType.directory ? (e => props.onDoubleClick(props.file)) : null}
               className={fileItemCn('container')}>
    <FileIcon size={75} extension={file.type !== fileType.directory ? fileExtension: ''} {...defaultStyles[`${fileExtension}`]} />
    <div className={fileItemCn("capture")}>{file.fileName}</div>
  </div>)
}