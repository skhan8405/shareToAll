import axios from "axios";

export default function getAllData(url){
    return axios.get(url);
}
