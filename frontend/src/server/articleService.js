import axios from "axios";

export const getALLArticles = async ()=> {
    const response = await axios.get("http://localhost:7460/articles");
    return response.data;
}