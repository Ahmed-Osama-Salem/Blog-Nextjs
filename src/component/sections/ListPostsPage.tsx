import { Heading, SimpleGrid } from '@chakra-ui/react';
import { motion } from 'framer-motion';
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
          posts.map((post: PostProps, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                type: 'spring',
                delay: idx / 170,
                duration: 0.5,
                damping: 10,
                stiffness: 200,
              }}
              key={post.id}
              className="mb-3"
            >
              <Link href={`/posts/${post.id}`}>
                <ListPostCard
                  author="J. K. Rowling"
                  brif={post.body}
                  date=" 1 Jan 2023"
                  image="/assets/images/Image.png"
                  title={post.title}
                />
              </Link>
            </motion.div>
          ))}
      </SimpleGrid>
    </>
  );
};

export default ListPostsPage;
