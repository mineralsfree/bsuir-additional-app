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
import {Button, MyButton} from "../common/Button/Button";
import {Input} from "../common/TextInput/TextInput";

const FilesPageCn = cn('files-page')
export const FilesPage = () => {
    const dispatch = useDispatch();
    const dir = useSelector(getCurrentDirSelector);
    const files = useSelector(getFilesSelector);

    useEffect(() => {
        dispatch(filesActions.getDir(dir))
    }, [dispatch])
    const uploadFile = (fileList, e) => {
        const files = Array.from(fileList);
        if (files.length > 1) {
            error("Only one file at time for now")
            return
        }
        filesApi.uploadFile(fileList[0], dir).then(dispatch(filesActions.getDir(dir)))
    }
    const filesMapped = files.map((el, i) => {
        return (<>  <MenuProvider id={"menu_id"} data={el}>
            <FilesItem file={el}/> </MenuProvider>
        </>)
    })
    return (
        <>
            <div id={'file-page'} className={FilesPageCn('container')}>
                <Input></Input>  <MyButton>Create folder</MyButton>
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
