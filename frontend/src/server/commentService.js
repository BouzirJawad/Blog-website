import axios from "axios";

const BASE_URL = "http://localhost:7460/comments";

export const getCommentsByArticle = async (articleId) => {
    const res = await axios.get(`${BASE_URL}?articleId=${articleId}`);
    return res.data;
};

export const addComment = async (commentData) => {
    const res = await axios.post(BASE_URL, commentData);
    return res.data;
};

export const deleteComment = async (id) => {
    await axios.delete(`${BASE_URL}/${id}`);
};

export const updateComment = async (id, updatedData) => {
    const res = await axios.put(`${BASE_URL}/${id}`, updatedData);
};