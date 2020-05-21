import axios from "axios";
import {API_URL} from "./baseApi";

export const feedbackApi = {
  feedback: async (data) => {
    return await axios.post(`${API_URL}/feedback`, data);
  }
}