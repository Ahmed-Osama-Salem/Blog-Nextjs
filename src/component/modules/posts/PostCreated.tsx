import { Button } from '@chakra-ui/button';
import { Heading, VStack } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import type { UseMutationResult } from 'react-query';

import type { CreatePostValues } from '@/apps/forms/createPostForm';
import BlogLayout from '@/component/layouts/BlogLayout';

import SecondPostCard from './SecondPostCard';

const PostCreated = ({
  mutation,
}: {
  mutation: UseMutationResult<void, unknown, CreatePostValues, unknown>;
}) => {
  const date = new Date().toDateString();
  const router = useRouter();

  return (
    <BlogLayout>
      <VStack spacing={20} align="center" p="10" maxW="1280" mx="auto">
        <Heading as="h2" fontSize="4xl" fontWeight="semibold">
          Your Post created successfully
        </Heading>
        <SecondPostCard
          author={mutation.variables?.author as string}
          title={mutation.variables?.blogTitle as string}
          date={date}
          brif={mutation.variables?.blogBody as string}
          image="https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2020&q=80"
        />
        <Button
          color="white"
          variant="solid"
          style={{ backgroundColor: 'purple' }}
          onClick={() => {
            router.push('/');
          }}
        >
          back to home
        </Button>
      </VStack>
    </BlogLayout>
  );
};

export default PostCreated;
