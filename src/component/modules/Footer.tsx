/* eslint-disable import/no-extraneous-dependencies */
import { Box, Flex, Icon, Link, Text } from '@chakra-ui/react';
import { FaFacebook, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bgColor="gray.900" color="white" py={10}>
      <Flex
        direction={{ base: 'column', md: 'row' }}
        align={{ base: 'center', md: 'space-between' }}
        justify={{ base: 'center', md: 'space-between' }}
        maxW="1200px"
        mx="auto"
        px={4}
      >
        <Box>
          <Text fontSize="lg" fontWeight="bold">
            Ahmed Osama Blog
          </Text>
          <Text mt={2} fontSize="sm">
            A blog about something interesting.
          </Text>
        </Box>

        <Box mt={{ base: 4, md: 0 }}>
          <Text fontSize="lg" mb={2}>
            Connect with us
          </Text>
          <Flex>
            <Link href="/" isExternal mr={2}>
              <Icon as={FaTwitter} fontSize="20px" />
            </Link>
            <Link href="/" isExternal mr={2}>
              <Icon as={FaFacebook} fontSize="20px" />
            </Link>
            <Link href="/" isExternal>
              <Icon as={FaInstagram} fontSize="20px" />
            </Link>
          </Flex>
        </Box>
      </Flex>

      <Box
        mt={6}
        borderTop="1px solid"
        borderColor="gray.700"
        textAlign="center"
        py={2}
      >
        <Text fontSize="sm">
          &copy; {new Date().getFullYear()} Your Blog. All rights reserved.
        </Text>
      </Box>
    </Box>
  );
};

export default Footer;
