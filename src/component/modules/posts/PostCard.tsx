import { Container, Image, Stack, Text } from '@chakra-ui/react';

const PostCard = ({ post }: { post: any }) => {
  console.log(post);

  if (!post) {
    return <div>Loading...</div>;
  }
  return (
    <Container>
      <Image
        src="https://images.unsplash.com/photo-1488190211105-8b0e65b80b4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt="Green double couch with wooden legs"
      />
      <Stack mt="6" spacing="3" p="3">
        <Text color="purple.500" fontWeight="bold" fontSize="md">
          Sunday , 1 Jan 2023
        </Text>
      </Stack>
      <Stack mt="6" spacing="3" p="3">
        <Text color="green.300" fontSize="xl">
          J. K. Rowling
        </Text>
        <Text>
          Linear helps streamline software projects, sprints, tasks, and bug
          tracking. Here’s how to get...
        </Text>
      </Stack>
    </Container>
  );
};

export default PostCard;
