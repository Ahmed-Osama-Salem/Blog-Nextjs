import axios from 'axios';

import type { CreatePostValues } from '../forms/createPostForm';

const getPosts = async () => {
  try {
    const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
    console.log(res.data, 'res await');

    return res.data;
  } catch (err) {
    return err;
  }
};

const fetchPost = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
};

const createNewPost = async (payload: CreatePostValues) => {
  try {
    const res = await axios.post(
      'https://jsonplaceholder.typicode.com/posts',
      payload
    );

    console.log('Created post:', res.data);

    return res.data;
  } catch (error) {
    console.error('Error creating post:', error);
    return error;
  }
};

export { createNewPost, fetchPost, getPosts };
