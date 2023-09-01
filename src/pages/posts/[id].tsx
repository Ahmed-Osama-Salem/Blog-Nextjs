/* eslint-disable import/no-extraneous-dependencies */
import { Spinner, Stack } from '@chakra-ui/react';
import axios from 'axios';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import SinglePostPage from '@/component/sections/SinglePostPage';
import { Main } from '@/component/templates/Main';

const fetchPost = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}`
  );
  return res.data;
};

const fetchComments = async (id: string) => {
  const res = await axios.get(
    `https://jsonplaceholder.typicode.com/posts/${id}/comments`
  );
  return res.data;
};

const Posts = () => {
  const router = useRouter();
  const postid = typeof router.query?.id === 'string' ? router.query.id : '';

  const {
    isSuccess,
    data: posts,
    isLoading,
    isError,
  } = useQuery(['posts', postid], () => fetchPost(postid), {
    enabled: postid.length > 0,
  });

  const {
    isSuccess: commentsSuccess,
    data: comments,
    isLoading: commentsLoading,
    isError: commentsError,
  } = useQuery(['comments', postid], () => fetchComments(postid), {
    enabled: postid.length > 0,
  });
  console.log(comments, 'comm from query');

  // loading state
  if (isLoading || commentsLoading) {
    return (
      <Stack>
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      </Stack>
    );
  }

  if (isSuccess || commentsSuccess) {
    return (
      <Main meta={<Meta title="blog" description="posts." />}>
        <BlogLayout>
          <SinglePostPage posts={posts} comments={comments} />
        </BlogLayout>
      </Main>
    );
  }

  if (isError || commentsError) {
    return <div>We couldent find your post</div>;
  }

  return <>Waiting for data...</>;
};

export default Posts;

export async function getStaticPaths() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  const posts = await res.json();

  const paths = posts.map((post: any) => ({
    params: { id: post.id.toString() },
  }));

  return { paths, fallback: 'blocking' };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id as string;
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['posts', id], () => fetchPost(id));

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};
