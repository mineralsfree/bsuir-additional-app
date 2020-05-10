import {API_URL} from "./baseApi";

import axios from 'axios'
import {notify} from "../helpers/toaster-helper";


export const filesApi = {
  getDir: async (id) => {
    return axios.get(`${API_URL}/directories/${id}/files`)
  },
  uploadFile: async (file, path) => {
    notify('Upload may take time, pls, wait');
    let formData = new FormData();
    formData.append("file", file);
    return axios({
      method: 'post', url: `${API_URL}/directories/${path}/file`, data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  downloadFile: async (id) => {
    return axios.get(`${API_URL}/files/${id}/download`, {responseType: 'blob'});
  },
  deleteFile: async (id) => {
    return axios.delete(`${API_URL}/files/${id}`);
  },
  createDirectory: async (id, fileName) => {
    return axios.post(`${API_URL}/directories/${id}/directory`, {fileName})
  },
  changeRights: async (id, rights) => {

  },
  addLink: async (id, fileName, url) => {
    return axios.post(`${API_URL}/directories/${id}/link`, {fileName, url})
  }
}
