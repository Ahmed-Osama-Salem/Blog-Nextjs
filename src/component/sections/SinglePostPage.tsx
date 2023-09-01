import {
  Avatar,
  Badge,
  Box,
  Flex,
  Grid,
  GridItem,
  Heading,
  Image,
  Stack,
  Text,
} from '@chakra-ui/react';

import PostCard from '../modules/posts/PostCard';

const SinglePostPage = ({ posts, comments }: { posts: any; comments: any }) => {
  return (
    <>
      <Grid
        h="full"
        templateRows="repeat(2, 1fr)"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }}
        gap={2}
      >
        <GridItem
          rowSpan={3}
          colSpan={{ base: 2, md: 2 }}
          py={{ base: 4, md: 90 }}
        >
          <Stack spacing="24" py="4">
            {[1, 2].map((el) => {
              return <PostCard key={el} post={posts} />;
            })}
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 4 }} rowSpan={2}>
          <Stack mt="6" spacing="3" py="4">
            <Text color="purple.500" fontWeight="bold" fontSize="md">
              Sunday, 1 Jan 2023
            </Text>
            <Heading
              size="md"
              fontWeight="bold"
              fontSize={{ base: '2xl', md: '4xl' }}
            >
              {posts.title}
            </Heading>
          </Stack>
          <Image
            src="https://picsum.photos/426"
            alt="Green double couch with wooden legs"
            w="full"
            h={{ base: 'auto', md: '426px' }}
            objectFit="cover"
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
                  If you’ve been to New York City and have walked the streets,
                  it is easy to figure out how to get from one place to another
                  because of the grid system that the city is built on. Just as
                  the predictability of a city grid helps locals and tourists
                  get around easily, so do webpage grids provide a structure
                  that guides users and designers alike. Because of their
                  consistent reference point, grids improve page readability and
                  scannability and allow people to quickly get where they need
                  to go.
                </Text>
              );
            })}

            <Text color="gray.400" fontWeight="normal" fontSize="md">
              {posts.body}
            </Text>
          </Stack>
        </GridItem>
      </Grid>
      <Stack p={{ base: 4, md: 16 }} spacing="10">
        <Text fontWeight="bold" fontSize="xl" mb="2">
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
    </>
  );
};

export default SinglePostPage;
