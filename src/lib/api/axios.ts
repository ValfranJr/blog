import axios from "axios";

const noticiasApi = axios.create({
    baseURL: "https://newsapi.org/v2",
});

export default noticiasApi;