import axios from "axios";
import {API_URL} from "./baseApi";

export const freeAudApi = {
    getNews: async (building, floor, date, time ) =>{
        let urlParams = new URLSearchParams(`${API_URL}/newsList`);

        return await axios.get(`${API_URL}/newsList?page=${page}&newsAtPage=${newsAtPage}`);
    }
}
