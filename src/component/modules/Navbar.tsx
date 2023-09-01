import { Button, Flex, Heading, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

const Navbar = () => {
  const router = useRouter();

  return (
    <Flex
      direction={{ base: 'column', md: 'row' }}
      align="center"
      justify="space-between"
      py={8}
      px={{ base: 4, md: 0 }}
    >
      <Heading size="md">Ahmed Osama Blog</Heading>
      <Flex gap={4} mt={{ base: 4, md: 0 }} align="center">
        <Link
          href="/"
          color={router.pathname === '/' ? 'blue.500' : 'main.900'}
          _hover={{ color: 'blue.500' }}
        >
          Home
        </Link>
        <Link
          href="/posts"
          color={router.pathname === '/posts' ? 'blue.500' : 'main.900'}
          _hover={{ color: 'blue.500' }}
        >
          Blog
        </Link>
        <Link href="/newpost">
          <Button colorScheme="purple" color="main.900">
            New post
          </Button>
        </Link>
      </Flex>
    </Flex>
  );
};

export default Navbar;
