/* eslint-disable @typescript-eslint/no-use-before-define */
/* eslint-disable react/no-array-index-key */
// eslint-disable-next-line import/no-extraneous-dependencies

import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getPosts } from '@/apps/server/handleFetchPosts';
import LoadingSpinner from '@/component/elements/LoadingSpinner';
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
  const { isSuccess, data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  // console.log(da ta, 'client');

  // loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // if success load page component
  if (isSuccess) {
    return (
      <Main
        meta={
          <Meta title="The Blog" description="ahmed osama blog with next js" />
        }
      >
        <BlogLayout>
          <HomePage posts={data} />
        </BlogLayout>
      </Main>
    );
  }

  // if error return error component
  if (isError) {
    return <div>We couldent find your posts</div>;
  }

  return <>Waiting for data...</>;
};

export default Index;

export async function getStaticProps() {
  const queryClient = new QueryClient();

  try {
    await queryClient.prefetchQuery(['postsList'], getPosts);
  } catch (error) {
    console.error('Error prefetching data:', error);
  }

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
    revalidate: 30,
  };
}
