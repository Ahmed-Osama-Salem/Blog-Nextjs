import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

interface PostCardProps {
  image: string;
  title: string;
  author: string;
  brif: string;
  date: string;
}

const ListPostCard = (props: PostCardProps) => {
  const { author, brif, image, title, date } = props;

  return (
    <Box display="flex" flexDirection="column" gap={8}>
      <Box flex="1" width="100%">
        <Image
          src={image}
          alt=""
          objectFit="cover"
          width="100%"
          height="100%"
        />
      </Box>
      <VStack spacing={6}>
        <Flex direction="column" alignItems="flex-start">
          <Text fontSize="sm" fontWeight="semibold" color="#6941C6">
            {author} • {date}
          </Text>
          <Heading as="h2" fontSize="2xl" fontWeight="semibold">
            {title}
          </Heading>
          <Text fontSize="sm" fontWeight="semibold" color="#21D188">
            {author}
          </Text>
          <Text fontSize="base" fontWeight="normal" color="#667085">
            {brif}
          </Text>
        </Flex>
        <Flex>
          <Stack direction="row" spacing={2}>
            <Badge colorScheme="green" rounded="full" p={1} px={2}>
              Presentation
            </Badge>
            <Badge colorScheme="red" rounded="full" p={1} px={2}>
              Research
            </Badge>
            <Badge colorScheme="purple" rounded="full" p={1} px={2}>
              Design
            </Badge>
          </Stack>
        </Flex>
      </VStack>
    </Box>
  );
};

export default ListPostCard;
