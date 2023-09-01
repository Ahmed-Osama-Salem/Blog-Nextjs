import axios from 'axios';

import type { CreatePostValues } from '../forms/createPostForm';

const getPosts = async () => {
  const postsList = await axios.get(
    'https://jsonplaceholder.typicode.com/posts'
  );
  return postsList.data;
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
