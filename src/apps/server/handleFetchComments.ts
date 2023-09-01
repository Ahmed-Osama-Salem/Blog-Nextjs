import axios from 'axios';

const fetchComments = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.data;
};

export default fetchComments;
