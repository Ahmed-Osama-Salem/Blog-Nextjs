// eslint-disable-next-line import/no-extraneous-dependencies

import { Spinner, Stack } from '@chakra-ui/react';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import ListPostsPage from '@/component/sections/ListPostsPage';
import { Main } from '@/component/templates/Main';

import type { PostProps } from '..';
import { getPosts } from '..';

const Index = () => {
  const {
    isSuccess,
    data: postsList = [] as PostProps[],
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
      <Main meta={<Meta title="All posts" description="list of blogs" />}>
        <BlogLayout>
          <ListPostsPage posts={postsList} />
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
