// pages/404.js
import { Box, Button, Heading, Link, Text } from '@chakra-ui/react';

import BlogLayout from '@/component/layouts/BlogLayout';

const Custom404 = () => {
  return (
    <BlogLayout>
      <Box
        textAlign="center"
        mt="20vh"
        mx="auto"
        maxW="400px"
        p={4}
        borderWidth={1}
        borderRadius="md"
        boxShadow="lg"
      >
        <Heading as="h1" fontSize="2xl" mb={4}>
          Oops! Page not found
        </Heading>
        <Text fontSize="lg" mb={4}>
          The page you are looking for does not exist or has been moved.
        </Text>
        <Link href="/" _hover={{ textDecoration: 'none' }}>
          <Button
            colorScheme="teal"
            size="md"
            mt={4}
            style={{ backgroundColor: 'teal' }}
          >
            Go back to home
          </Button>
        </Link>
      </Box>
    </BlogLayout>
  );
};

export default Custom404;
