/* eslint-disable import/no-extraneous-dependencies */

import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Spinner,
  Stack,
  Text,
} from '@chakra-ui/react';
import axios from 'axios';
import type { GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { dehydrate, QueryClient, useQuery } from 'react-query';

import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import PostCard from '@/component/modules/posts/PostCard';
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
          <Grid
            h="full"
            templateRows="repeat(2, 1fr)"
            templateColumns="repeat(6, 1fr)"
            gap={2}
          >
            <GridItem rowSpan={3} colSpan={2} bg="white" py="90px">
              <Stack spacing="24" py="4">
                {[1, 2].map((el) => {
                  return <PostCard key={el} post={posts} />;
                })}
              </Stack>
            </GridItem>
            <GridItem colSpan={4} rowSpan={2} bg="white">
              <Stack mt="6" spacing="3" py="4">
                <Text color="purple.500" fontWeight="bold" fontSize="md">
                  Sunday , 1 Jan 2023
                </Text>
                <Heading
                  size="md"
                  color="black"
                  fontWeight="bold"
                  fontSize="4xl"
                >
                  {posts.title}
                </Heading>
              </Stack>
              <Image
                src="https://picsum.photos/426"
                alt="Green double couch with wooden legs"
                w="full"
                h="426px"
                className="object-cover"
              />
              <Stack mt="6" spacing="3" py="4">
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  {posts.body}
                </Text>
                {[1, 2, 3, 4].map((i) => {
                  return (
                    <Text
                      key={i}
                      color="gray.400"
                      fontWeight="normal"
                      fontSize="md"
                    >
                      If you’ve been to New York City and have walked the
                      streets, it is easy to figure out how to get from one
                      place to another because of the grid system that the city
                      is built on. Just as the predictability of a city grid
                      helps locals and tourists get around easily, so do webpage
                      grids provide a structure that guides users and designers
                      alike. Because of their consistent reference point, grids
                      improve page readability and scannability and allow people
                      to quickly get where they need to go.
                    </Text>
                  );
                })}

                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  {posts.body}
                </Text>
              </Stack>
            </GridItem>
          </Grid>
          <Stack className="bg-[#F8FAFB]" p="16" spacing="10">
            <Text color="black" fontWeight="bold" fontSize="xl" mb="2">
              {`${comments.length} Comments`}
            </Text>
            {comments.map((el: any) => {
              return (
                <Flex key={el.id}>
                  <Avatar src="https://ionicframework.com/docs/img/demos/avatar.svg" />
                  <Box ml="3">
                    <Text fontWeight="bold">
                      {el.name}
                      <Badge ml="1" colorScheme="green">
                        @Rolling
                      </Badge>
                      <Text color="gray.400" fontWeight="normal" fontSize="md">
                        2 days
                      </Text>
                    </Text>
                    <Text fontSize="sm">{el.body}</Text>
                  </Box>
                </Flex>
              );
            })}
          </Stack>
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

// export const getStaticProps = async (context: GetStaticPropsContext) => {
//   const { params } = context;

//   const res = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${params?.id}`
//   );

//   const response = await axios.get(
//     `https://jsonplaceholder.typicode.com/posts/${params?.id}/comments`
//   );

//   const { data } = res;

//   return { props: { post: data, comments: response.data }, revalidate: 30 };
// };

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
