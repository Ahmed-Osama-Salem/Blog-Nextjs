import { Box, Flex } from '@chakra-ui/react';
import type { ReactNode } from 'react';

import Footer from '../modules/Footer';
import Navbar from '../modules/Navbar';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = (props: BlogLayoutProps) => {
  return (
    <>
      <Flex direction="column" alignItems="center" w="100%" px="10" pb="10">
        <Box maxW="1280px" w="100%">
          <Navbar />
          {props.children}
        </Box>
      </Flex>
      <Footer />
    </>
  );
};

export default BlogLayout;
