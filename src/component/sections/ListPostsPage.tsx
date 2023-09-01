import { Heading, SimpleGrid } from '@chakra-ui/react';
import Link from 'next/link';

import type { PostProps } from '@/pages';

import ListPostCard from '../modules/ListPostCard';

const ListPostsPage = ({ posts }: { posts: PostProps[] }) => {
  return (
    <>
      <Heading as="h2" fontSize="2xl" fontWeight="semibold" mb="7">
        All blog posts
      </Heading>
      <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
        {posts &&
          posts.map((post: PostProps) => (
            <div key={post.id} className="mb-3">
              <Link href={`/posts/${post.id}`}>
                <ListPostCard
                  author="J. K. Rowling"
                  brif={post.body}
                  date=" 1 Jan 2023"
                  image="/assets/images/Image.png"
                  title={post.title}
                />
              </Link>
            </div>
          ))}
      </SimpleGrid>
    </>
  );
};

export default ListPostsPage;
