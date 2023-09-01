// eslint-disable-next-line import/no-extraneous-dependencies

import { dehydrate, QueryClient, useQuery } from 'react-query';

import { getPosts } from '@/apps/server/handleFetchPosts';
import LoadingSpinner from '@/component/elements/LoadingSpinner';
import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import ListPostsPage from '@/component/sections/ListPostsPage';
import { Main } from '@/component/templates/Main';

const Index = () => {
  const { isSuccess, data, isLoading, isError } = useQuery({
    queryKey: ['posts'],
    queryFn: getPosts,
  });

  // loading state
  if (isLoading) {
    return <LoadingSpinner />;
  }

  // if success load page component
  if (isSuccess) {
    return (
      <Main meta={<Meta title="All posts" description="list of blogs" />}>
        <BlogLayout>
          <ListPostsPage posts={data} />
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

  await queryClient.prefetchQuery(['postsList'], () => getPosts());

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
}
