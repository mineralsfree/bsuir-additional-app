import {API_URL} from "./baseApi";

import axios from 'axios'

export const filesApi = {
  getRoot: async () => {
    return axios.get(`${API_URL}/directories/root/files`)
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
  }
}