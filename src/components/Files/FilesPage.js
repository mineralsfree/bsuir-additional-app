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
import { useParams, useHistory } from 'react-router-dom';

const ROOT = 'root';

const FilesPageCn = cn('files-page');
export const MyFilesPage = props => {
  const dispatch = useDispatch();
  const dir = useSelector(getCurrentDirSelector);
  const files = useSelector(getFilesSelector);
  const formValueSector = formValueSelector('filesPageForm');
  const dirNameSelector = state => formValueSector(state, 'dirName');
  const urlSelector = state => formValueSector(state, 'linkUrl');
  const urlNameSelector = state => formValueSector(state, 'linkName');
  const url = useSelector(urlSelector);
  const urlName = useSelector(urlNameSelector);
  const dirName = useSelector(dirNameSelector);

  const { directoryId: paramsInitialDirectoryId } = useParams();
  const history = useHistory();
  const initialDirectoryId = paramsInitialDirectoryId || ROOT;

  useEffect(() => {
    dispatch(filesActions.cd(initialDirectoryId));
  }, [initialDirectoryId, dispatch]);

  useEffect(() => {
    dispatch(filesActions.getDir(dir));

    const newPath = dir !== ROOT ? `/files/${dir}` : '/files';

    history.push({
      pathname: newPath
    });
  }, [dispatch, dir, history]);


  const handleAddFile = (e) => {
    e.preventDefault();
    filesApi.createDirectory(dir, dirName).then(() => {
      dispatch(filesActions.getDir(dir));
    })
  }
  const addLink = (e) => {
    e.preventDefault();
    filesApi.addLink(dir, urlName, url).then(() => {
      props.reset();
      dispatch(filesActions.getDir(dir))
    })
  }
  const uploadFile = (fileList, e) => {
    const files = Array.from(fileList);
    if (files.length > 1) {
      error("Only one file at time for now")
      return
    }
    filesApi.uploadFile(fileList[0], dir).then(() => dispatch(filesActions.getDir(dir)))
  }
  const openDirectory = (file) => {
    dispatch(filesActions.cd(file.id));
  }

  const filesMapped = files.map((el, i) => {
    return (<>  <MenuProvider id={"menu_id"} data={el}>
      <FilesItem onDoubleClick={openDirectory} file={el}/>
    </MenuProvider>
    </>)
  })
  return (
    <>
      <div id={'file-page'} className={FilesPageCn('container')}>
        <div className={FilesPageCn('forms')}>
          <form onSubmit={e => handleAddFile(e)} className={FilesPageCn('add-directory-form')}>
            <Field component={Input} name='dirName' placeholder={'Folder name'}/>
            <CommonButton>Create folder</CommonButton>
          </form>
          <form className={FilesPageCn('add-link-form')} onSubmit={e => addLink(e)}>
            <div className={FilesPageCn('add-link-form-input-container')}>
              <Field required component={Input} type={'url'} pattern={'https://.*'} name='linkUrl' label={'Url'}
                     className={FilesPageCn('add-link-input')}/>
              <Field required component={Input} name='linkName' label={'Name'}
                     className={FilesPageCn('add-link-input')}/>
            </div>
            <CommonButton>Add Link</CommonButton>
          </form>
        </div>
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
  form: 'filesPageForm',
})(MyFilesPage)