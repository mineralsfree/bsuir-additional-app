import axios from "axios";
import {API_URL} from "./baseApi";

export const newsApi = {
    getNews: async (page, newsAtPage ) =>{
        return await axios.get(`${API_URL}/newsList?page=${page}&newsAtPage=${newsAtPage}`);
    }
}
