/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line import/no-extraneous-dependencies

import { Spinner, Stack } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getPosts } from '@/apps/server/handleFetchPosts';
import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import HomePage from '@/component/sections/HomePage';
import { Main } from '@/component/templates/Main';

export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const Index = () => {
  const {
    isSuccess,
    data: postsList = [],
    isLoading,
    isError,
  } = useQuery(['postsList'], () => getPosts(), {});

  // loading state
  if (isLoading) {
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

  // if success load page component
  if (isSuccess)
    return (
      <Main
        meta={
          <Meta title="The Blog" description="ahmed osama blog with next js" />
        }
      >
        <BlogLayout>
          <HomePage posts={postsList} />
        </BlogLayout>
      </Main>
    );

  // if error return error component
  if (isError) {
    return <div>We couldent find your posts</div>;
  }

  return <>Waiting for data...</>;
};

export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery(['postsList'], () => getPosts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
