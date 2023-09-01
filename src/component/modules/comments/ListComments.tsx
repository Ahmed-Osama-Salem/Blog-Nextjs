import { Avatar, Badge, Box, Flex, Stack, Text } from '@chakra-ui/react';

import type { CommentList } from '@/apps/interface/DataTypes';

const ListComments = ({ comments }: { comments: CommentList[] }) => {
  return (
    <Stack p={{ base: 4, md: 16 }} spacing="10">
      <Text fontWeight="bold" fontSize="xl" mb="2">
        {`${comments.length} Comments`}
      </Text>
      {comments.map((el: any) => {
        return (
          <Flex key={el.id}>
            <Avatar src="https://ionicframework.com/docs/img/demos/avatar.svg" />
            <Box ml="3">
              <Text fontWeight="bold">
                {el.name}
                <Badge ml="1" colorScheme="green">
                  @Rolling
                </Badge>
                <Text color="gray.400" fontWeight="normal" fontSize="md">
                  2 days
                </Text>
              </Text>
              <Text fontSize="sm">{el.body}</Text>
            </Box>
          </Flex>
        );
      })}
    </Stack>
  );
};

export default ListComments;
