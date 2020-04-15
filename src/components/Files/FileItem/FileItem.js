import React from 'react'
import {cn} from "@bem-react/classname";
import FileIcon, {defaultStyles} from "react-file-icon";
import {getFileExtension} from "../../../helpers/fileHelper";
import './FileItem.scss'
import {fileType} from "../../../constants/fileTypes";

const fileItemCn = cn('file-item')
export const  FilesItem = props => {
  const file = props.file;
  console.log(props);
  let dblClickAction = null;
  if (props.file.type === fileType.directory) {
    dblClickAction = () => props.onDoubleClick(props.file);
  } else if (props.file.type === fileType.link) {
    dblClickAction = () => window.open(file.link);
  }
  const fileExtension = (typeof file.fileName == "string") && getFileExtension(file);
  return (<div onDoubleClick={dblClickAction}
               className={fileItemCn('container')}>
    <FileIcon size={75}
              extension={file.type !== fileType.directory ? fileExtension : ''} {...defaultStyles[`${fileExtension}`]} />
    <div className={fileItemCn("capture")}>{file.fileName}</div>
  </div>)
}