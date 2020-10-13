import axios from "axios";

const instance = axios.create({
    baseURL: "https://jsonplaceholder.typicode.com/",
    headers: {
        headerType: "example header type"
    }
});

export default instance;