import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {cn} from "@bem-react/classname";
import './FilesPage.scss';
import {filesActions} from "../../redux/files/filesSlice";
import {FileDrop} from "react-file-drop";
import {error} from '../../helpers/toaster-helper'
import {filesApi} from "../../api/filesApi";
import {getFilesSelector, getCurrentDirSelector} from "../../redux/files/filesSelectors";
import {FilesItem} from "./FileItem/FileItem";
import {MenuProvider} from "react-contexify";
import {FilesMenu} from "./FilesMenu/FilesMenu";
import {Input} from "../common/TextInput/TextInput";
import {Field, reduxForm} from "redux-form";
import formValueSelector from "redux-form/lib/formValueSelector";
import {CommonButton} from "../common/Button/Button";

const FilesPageCn = cn('files-page')
export const MyFilesPage = () => {
  const dispatch = useDispatch();
  const dir = useSelector(getCurrentDirSelector);
  const files = useSelector(getFilesSelector);
  const formValueSector = formValueSelector('createDirectoryForm');
  const dirNameSelector = state => formValueSector(state, 'dirName')
  const dirName = useSelector(dirNameSelector);
  useEffect(() => {
    dispatch(filesActions.getDir(dir))
  }, [dispatch, dir])
  const handleForm = (e) => {
    e.preventDefault();
    filesApi.createDirectory(dir, dirName).then((response) =>{
      dispatch(filesActions.getDir(dir));
    })
  }
  const uploadFile = (fileList, e) => {
    const files = Array.from(fileList);
    if (files.length > 1) {
      error("Only one file at time for now")
      return
    }
    filesApi.uploadFile(fileList[0], dir).then(dispatch(filesActions.getDir(dir)))
  }
  const openDirectory = (file)=>{
    dispatch(filesActions.cd(file.id));
  }

  const filesMapped = files.map((el, i) => {
    return (<>  <MenuProvider id={"menu_id"} data={el}>
      <FilesItem onDoubleClick={openDirectory} file={el}/> </MenuProvider>
    </>)
  })
  return (
    <>
      <div id={'file-page'} className={FilesPageCn('container')}>
        <form onSubmit={e => handleForm(e)} className={FilesPageCn('add-directory-form')}>
          <Field component={Input} name='dirName'/>
          <CommonButton>Create folder</CommonButton>
        </form>

        <div className={FilesPageCn('files-area')}>
          {filesMapped}
          <FilesMenu/>
        </div>
        <FileDrop
          onDrop={(fileList, e) => {
            uploadFile(fileList, e);
          }}>
        </FileDrop>
      </div>
    </>)
}
export const FilesPage = reduxForm({
  form: 'createDirectoryForm',
})(MyFilesPage)