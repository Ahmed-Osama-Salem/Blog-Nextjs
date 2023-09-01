/* eslint-disable import/no-extraneous-dependencies */
import { Button } from '@chakra-ui/button';
import { Flex, Heading, Link } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import ToggleColorMode from '../elements/ToggleColorMode';

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
          color={router.pathname === '/' ? 'blue.500' : 'brand.500'}
          _hover={{ color: 'blue.500' }}
        >
          Home
        </Link>
        <Link
          href="/posts"
          color={router.pathname === '/posts' ? 'blue.500' : 'brand.500'}
          _hover={{ color: 'blue.500' }}
        >
          Blog
        </Link>
        <Button
          colorScheme="blackAlpha"
          color="white"
          variant="solid"
          style={{ backgroundColor: 'purple' }}
          onClick={() => {
            router.push('/newpost');
          }}
        >
          New post
        </Button>

        <ToggleColorMode />
      </Flex>
    </Flex>
  );
};

export default Navbar;
