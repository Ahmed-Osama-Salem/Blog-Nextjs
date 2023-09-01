import {
  Button,
  Divider,
  Flex,
  Heading,
  SimpleGrid,
  VStack,
} from '@chakra-ui/react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Link from 'next/link';
import { useRef } from 'react';

import type { PostProps } from '@/pages';

import ListPostCard from '../modules/ListPostCard';
import SecondPostCard from '../modules/posts/SecondPostCard';

const HomePage = ({ posts }: { posts: PostProps[] }) => {
  const text = 'THE  BLOG';

  const cardRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: cardRef,
    offset: ['start end', 'end start'],
  });

  const opacity = useTransform(scrollYProgress, [0, 1.2], [0.1, 3]);
  const y = useTransform(scrollYProgress, [0.2, 2.3], [0, -100]);
  return (
    <VStack spacing={8} align="stretch">
      <Divider />
      <Flex justifyContent="center" align="center">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
          <Heading
            as="h1"
            fontSize={{ base: '6xl', md: '8xl', lg: '260px' }}
            fontWeight="bold"
          >
            {text.split('').map((char, index) => (
              <motion.span
                key={index as number}
                style={{ display: 'inline-block' }}
                animate={{ opacity: 1, y: 10 }}
                initial={{ opacity: 0, y: 0 }}
                transition={{ delay: index / 6 }}
              >
                {char}
              </motion.span>
            ))}
          </Heading>
        </motion.div>
      </Flex>
      <Divider />

      <VStack spacing={8} align="stretch">
        <Heading as="h2" fontSize="2xl" fontWeight="semibold">
          Recent blog posts
        </Heading>
        <motion.div ref={cardRef} style={{ opacity, y }}>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            <ListPostCard
              author="J. K. Rowling"
              brif="How do you create compelling presentations that wow your colleagues and impress your managers?"
              date=" 1 Jan 2023"
              image="/assets/images/Image.png"
              title="UX review presentations"
            />
            <VStack spacing={5} align="stretch">
              <SecondPostCard
                author="J. K. Rowling"
                brif="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
                date=" 1 Jan 2023"
                image="/assets/images/Image.png"
                title="UX review presentations"
              />
              <SecondPostCard
                author="J. K. Rowling"
                brif="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and managing them."
                date=" 1 Jan 2023"
                image="/assets/images/Image.png"
                title="UX review presentations"
              />
            </VStack>
          </SimpleGrid>
        </motion.div>
        <SecondPostCard
          author="J. K. Rowling"
          brif="A grid system is a design tool used to arrange content on a webpage. It helps create a consistent and visually appealing layout."
          date=" 1 Jan 2023"
          image="/assets/images/Image.png"
          title="UX review presentations"
        />
        <Heading as="h2" fontSize="2xl" fontWeight="semibold">
          All blog posts
        </Heading>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3 }} spacing={4}>
          {posts &&
            posts.slice(0, 10).map((post: PostProps) => (
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
      </VStack>
      <Flex justifyContent="center">
        <Link href="/posts">
          <Button
            color="white"
            variant="solid"
            style={{ backgroundColor: 'purple' }}
          >
            See more
          </Button>
        </Link>
      </Flex>
    </VStack>
  );
};

export default HomePage;
