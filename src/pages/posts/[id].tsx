/* eslint-disable import/no-extraneous-dependencies */
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import fetchComments from '@/apps/server/handleFetchComments';
import { fetchPost } from '@/apps/server/handleFetchPosts';
import LoadingSpinner from '@/component/elements/LoadingSpinner';
import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import SinglePostPage from '@/component/sections/SinglePostPage';
import { Main } from '@/component/templates/Main';

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

  // loading state
  if (isLoading || commentsLoading) {
    return <LoadingSpinner />;
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
