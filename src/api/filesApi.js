import {API_URL} from "./baseApi";

import axios from 'axios'

export const filesApi = {
  getDir: async (id) => {
    return axios.get(`${API_URL}/directories/${id}/files`)
  },
  uploadFile: async (file, path) => {
    let formData = new FormData();
    formData.append("file", file);
    return axios({
      method: 'post', url: `${API_URL}/directories/${path}/file`, data: formData,
      headers: {
        'Content-Type': 'multipart/form-data'
      }
    })
  },
  downloadFile: async (id) =>{
    return axios.get(`${API_URL}/files/${id}/download`)
  },
  deleteFile: async (id) =>{
    return axios.get(`${API_URL}/files/${id}/download`);
  },
  createDirectory: async (id, fileName) =>{
      return axios.post(`${API_URL}/directories/${id}/directory`,{fileName})
  },
  changeRights: async (id, rights) => {

  }
}
