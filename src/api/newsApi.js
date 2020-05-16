import axios from "axios";
import {API_URL} from "./baseApi";

export const newsApi = {
  getNews: async (page, pageSize, mySources) => {
    const body = {page, pageSize};
    if (mySources && mySources.length > 0) {
      body.filters = [
        {
          "type": "string",
          "comparison": "IN",
          "value": mySources,
          "field": "source.alias"
        }
      ]
    }
    return await axios.post(`${API_URL}/news/search`, body)
  },
  getSources: async () => {
    return await axios.get(`${API_URL}/news/sources`);
  },
  putSources: async (sources = []) => {
    return await axios.put(`${API_URL}/news/sources/subscriptions`, {newsSourcesAliases: sources})

  },
  getMySources: async () => {
    return await axios.get(`${API_URL}/news/sources/subscriptions`)
  }
}
