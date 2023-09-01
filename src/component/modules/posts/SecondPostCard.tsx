import { Badge, Box, Flex, Image, Stack, Text } from '@chakra-ui/react';
import React from 'react';

interface SecondPostCardProps {
  image: string;
  title: string;
  author: string;
  brif: string;
  date: string;
}

const SecondPostCard = (props: SecondPostCardProps) => {
  const { author, brif, image, title, date } = props;

  return (
    <Flex direction={{ base: 'column', lg: 'row' }} gap={8}>
      <Box flex={{ base: 'none', lg: 1 / 2 }}>
        <Image src={image} className="h-full w-full object-cover" alt="" />
      </Box>
      <Flex direction="column" flex={{ base: 'none', lg: 1 / 2 }} gap={6}>
        <Stack spacing={3}>
          <Text fontSize="sm" fontWeight="semibold" color="#6941C6">
            {author} • {date}
          </Text>
          <Text fontSize="2xl" fontWeight="semibold">
            {title}
          </Text>
          <Text fontSize="sm" fontWeight="semibold" color="#21D188">
            {author}
          </Text>
          <Text
            fontSize="base"
            fontWeight="normal"
            color="#667085"
            maxW="200px"
          >
            {brif}
          </Text>
        </Stack>
        <Stack direction="row">
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
    </Flex>
  );
};

export default SecondPostCard;
