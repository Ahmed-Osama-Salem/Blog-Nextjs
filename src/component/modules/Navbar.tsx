import { Link } from '@chakra-ui/next-js';
import { Button, Heading } from '@chakra-ui/react';
// import Link from 'next/link';

const Navbar = () => {
  return (
    <nav className="flex w-full items-center justify-between py-8">
      <Heading size="md">Ahmed osama Blog</Heading>
      <div className="flex items-center gap-4">
        <Link href="/" color="main.900" _hover={{ color: 'blue.500' }}>
          Home
        </Link>
        <Link href="/posts" color="main.900" _hover={{ color: 'blue.500' }}>
          Blog
        </Link>
        <Link href="/newpost">
          <Button colorScheme="purple" color="main.900">
            New post
          </Button>
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
