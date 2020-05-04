import React from 'react';
import {Menu, Item,} from 'react-contexify';
import 'react-contexify/dist/ReactContexify.min.css';
import {filesApi} from "../../../api/filesApi";
import fileDownload from 'js-file-download'
import {useDispatch} from "react-redux";
import {filesActions} from "../../../redux/files/filesSlice";
import {useSelector} from "react-redux";
import {getCurrentDirSelector} from "../../../redux/files/filesSelectors";
export const FilesMenu = props => {
    const dispatch = useDispatch();
    const dir = useSelector(getCurrentDirSelector);
    const onDownload = ({event, props}) => {
        filesApi.downloadFile(props.id)
            .then((response) => {
                fileDownload(response.data, props.fileName)
            })
    }
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

}
