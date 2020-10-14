import axios from "axios";

const instance = axios.create({
    baseURL: "http://my-json-server.typicode.com/NuranTerlan/blog-data",
    headers: {
        headerType: "example header type"
    }
});

export default instance;