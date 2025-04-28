import axios from 'axios';
import { BASE_URL } from '../config/config';
import { from } from 'rxjs';
import { map } from 'rxjs/operators';

export const getCommentsByArticle = (articleId) => {
  return from(axios.get(`${BASE_URL}/comments?articleId=${articleId}`)).pipe(
    map(res => res.data)
  );
};

export const addComment = (commentData) => {
  return from(axios.post(`${BASE_URL}/comments`, commentData)).pipe(
    map(res => res.data)
  );
};

export const deleteComment = (id) => {
  return from(axios.delete(`${BASE_URL}/comments/${id}`));
};

export const updateComment = (id, updatedData) => {
  return from(axios.put(`${BASE_URL}/comments/${id}`, updatedData));
};
