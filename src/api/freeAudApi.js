import axios from "axios";
import {API_URL} from "./baseApi";
import moment from "moment"

export const freeAudApi = {
    getFreeAuds: async (building, floor, date, time = moment().format('HH:mm')) => {
        if (!date) {
            date = new Date().toISOString().split('T')[0]
        }
        const esc = encodeURIComponent;
        const params = {building, floor, date, time};
        const query = Object.keys(params)
            .map(k => esc(k) + '=' + params[k])
            .join('&');
        return axios.get(`${API_URL}/auditoriums/free?` + query);
    }
}
