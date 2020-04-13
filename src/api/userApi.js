import axios from "axios";
import {API_URL} from "./baseApi";

export const userApi = {
    getUser: async () =>{
        return await axios.get(`${API_URL}/students/me`);
    },
    getRecordBook: async () =>{
        return await axios.get(`${API_URL}/students/me/record-book`)
    }
}
