import React from 'react'
import {cn} from "@bem-react/classname";
import FileIcon, {defaultStyles} from "react-file-icon";
import {getFileExtension} from "../../../helpers/fileHelper";
import { MenuProvider } from 'react-contexify';
import './FileItem.scss'
import {FilesMenu} from "../../Files/FilesMenu/FilesMenu";
const fileItemCn = cn('file-item')
export const FilesItem = props => {
    const file = props.file;
    const fileExtension = (typeof file.fileName == "string") && getFileExtension(file);

    return (<div className={fileItemCn('container')}>


        <FileIcon size={75} extension={fileExtension} {...defaultStyles[`${fileExtension}`]} />
        <div className={fileItemCn("capture")}>{file.fileName}</div>
    </div>)
}

//accessType: "GROUP"
//fileName: "text.esp"
//groupOwner: "751006"
//id: 1
//link: null
//mimeType: "application/octet-stream"
//parentFileId: null
//studentIisId: 824
//studentName: "Никита Пилинко"
//type: "FILE"
