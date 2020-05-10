import React from 'react';
import {Menu, Item,} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import {filesApi} from "../../../api/filesApi";
import {useDispatch} from "react-redux";
import {filesActions} from "../../../redux/files/filesSlice";
import {useSelector} from "react-redux";
import {getCurrentDirSelector} from "../../../redux/files/filesSelectors";
import {saveAs} from "file-saver";

export const FilesMenu = props => {
    const dispatch = useDispatch();
    const dir = useSelector(getCurrentDirSelector);

    const onDownload = ({event, props}) => {
        filesApi.downloadFile(props.id)
            .then(({data}) => {
                saveAs(new Blob([data]), props.fileName);
            })
    };

    const onDelete = ({event, props}) => {
        filesApi.deleteFile(props.id).then((response) => {
            dispatch(filesActions.getDir(dir))
        })
    };

    return (
        <Menu id='menu_id'>
            <Item onClick={onDownload}>Download</Item>
            <Item onClick={onDelete}>Delete</Item>
        </Menu>
    );

};
