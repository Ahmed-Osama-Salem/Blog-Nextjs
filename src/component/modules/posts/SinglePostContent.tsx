import { Heading, Image, Stack, Text } from '@chakra-ui/react';

import type { SinglePostData } from '@/apps/interface/DataTypes';

const SinglePostContent = ({ posts }: { posts: SinglePostData }) => {
  return (
    <>
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
            <Text key={i} color="gray.400" fontWeight="normal" fontSize="md">
              If you’ve been to New York City and have walked the streets, it is
              easy to figure out how to get from one place to another because of
              the grid system that the city is built on. Just as the
              predictability of a city grid helps locals and tourists get around
              easily, so do webpage grids provide a structure that guides users
              and designers alike. Because of their consistent reference point,
              grids improve page readability and scannability and allow people
              to quickly get where they need to go.
            </Text>
          );
        })}

        <Text color="gray.400" fontWeight="normal" fontSize="md">
          {posts.body}
        </Text>
      </Stack>
    </>
  );
};

export default SinglePostContent;
