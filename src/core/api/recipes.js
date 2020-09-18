// Imports
import axios from "axios";

const API_URL_BASE = "https://www.themealdb.com/api/json/v1/1/"


export const apiCall = (path, query="", data={}) => {
  var url = API_URL_BASE + path;
  if(query){
    url += "?" + query;
  }
  return axios({
    method: "get",
    url,
    headers: {
      'Content-Type': "text/plain",
    },
    data,
  }).then((response) => {
    return {...response.data};
  }).catch((error) => {
    console.error(error);
    return {error};
  });
};

export default apiCall;