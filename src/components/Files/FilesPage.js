import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cn} from "@bem-react/classname";
import './FilesPage.scss';
import {filesActions} from "../../redux/files/filesSlice";
import {FileDrop} from "react-file-drop";
import {error} from '../../helpers/toaster-helper'
import {filesApi} from "../../api/filesApi";
import {getFilesSelector} from "../../redux/files/filesSelectors";
import FileIcon, {defaultStyles} from 'react-file-icon';
import {FilesItem} from "../common/FileItem/FileItem";

const FilesPageCn = cn('files-page')
export const FilesPage = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(filesActions.getRoot())
  }, [dispatch])
  const files = useSelector(getFilesSelector);
  const uploadFile = (fileList, e) => {
    const files = Array.from(fileList);
    if (files.length > 1) {
      error("Only one file at time for now")
      return
    }
    filesApi.uploadFile(fileList[0], 'root').then(dispatch(filesActions.getRoot()))
  }
  const filesMapped = files.map((el) => {

    return (<FilesItem file={el}/>
    )
  })
  return (
    <>
      <div className={FilesPageCn('container')}>
        {filesMapped}
      </div>

      <FileDrop onDrop={(fileList, e) => {
      uploadFile(fileList, e);
    }}>

    </FileDrop></>)
}