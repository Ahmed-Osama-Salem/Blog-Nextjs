import { Grid, GridItem, Stack } from '@chakra-ui/react';

import type { CommentList, SinglePostData } from '@/apps/interface/DataTypes';

import ListComments from '../modules/comments/ListComments';
import PostCard from '../modules/posts/PostCard';
import SinglePostContent from '../modules/posts/SinglePostContent';

const SinglePostPage = ({
  posts,
  comments,
}: {
  posts: SinglePostData;
  comments: CommentList[];
}) => {
  return (
    <>
      <Grid
        h="full"
        templateRows="repeat(2, 1fr)"
        templateColumns={{ base: 'repeat(2, 1fr)', md: 'repeat(6, 1fr)' }}
        gap={2}
      >
        <GridItem
          rowSpan={3}
          colSpan={{ base: 2, md: 2 }}
          py={{ base: 4, md: 90 }}
        >
          <Stack spacing="24" py="4">
            {[1, 2].map((el) => {
              return <PostCard key={el} post={posts} />;
            })}
          </Stack>
        </GridItem>
        <GridItem colSpan={{ base: 2, md: 4 }} rowSpan={2}>
          <SinglePostContent posts={posts} />
        </GridItem>
      </Grid>
      <ListComments comments={comments} />
    </>
  );
};

export default SinglePostPage;
