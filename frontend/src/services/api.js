import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:8080/api'
});

export const getPosts = () => api.get('/posts');
export const createPost = (post) => api.post('/posts', post);