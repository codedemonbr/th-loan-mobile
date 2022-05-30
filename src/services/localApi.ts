import axios from "axios";

const localObj = {
    baseURL: "http://192.168.18.4:3333",
    timeout: 2 * 1000,
};

const localApi = axios.create(localObj);

export default localApi;
