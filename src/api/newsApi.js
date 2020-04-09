import axios from "axios";
import {API_URL} from "./baseApi";

export const newsApi = {
    getNews: async (page, pageSize ) =>{
        return await axios.post(`${API_URL}/news/search`, {page, pageSize});
    }
}
