import { Button, Divider, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';
import Link from 'next/link';

import type { PostProps } from '@/pages';

import ListPostCard from '../modules/ListPostCard';
import SecondPostCard from '../modules/posts/SecondPostCard';

const HomePage = ({ posts }: { posts: PostProps[] }) => {
  const text = 'THE BLOG';

  return (
    <div className="flex flex-col gap-8">
      <Divider />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
        <Heading as="h1" fontSize="230px" fontWeight="bold" color="black">
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
      <Divider />

      <div className="flex flex-col gap-8">
        <h2 className="text-2xl font-semibold">All blog posts</h2>
        <div className="flex h-[30rem] gap-8 ">
          <div className="w-1/2">
            <ListPostCard
              author="J. K. Rowling"
              brif="How do you create compelling presentations that wow your colleagues and impress your managers?"
              date=" 1 Jan 2023"
              image="/assets/images/Image.png"
              title="UX review presentations"
            />
          </div>

          <div className="w-1/2">
            <div className="flex flex-col   gap-5">
              <SecondPostCard
                author="J. K. Rowling"
                brif="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag...."
                date=" 1 Jan 2023"
                image="/assets/images/Image.png"
                title="UX review presentations"
              />
              <SecondPostCard
                author="J. K. Rowling"
                brif="The rise of RESTful APIs has been met by a rise in tools for creating, testing, and manag..."
                date=" 1 Jan 2023"
                image="/assets/images/Image.png"
                title="UX review presentations"
              />
            </div>
          </div>
        </div>
        <div className="h-[290px] ">
          <SecondPostCard
            author="J. K. Rowling"
            brif="A grid system is a design tool used to arrange content on a webpage. It is a series of vertical and horizontal lines that create a matrix of intersecting points, which can be used to align and organize page elements. Grid systems are used to create a consistent look and feel across a website, and can help to make the layout more visually appealing and easier to navigate."
            date=" 1 Jan 2023"
            image="/assets/images/Image.png"
            title="UX review presentations"
          />
        </div>
        <h2 className="text-2xl font-semibold">All blog posts</h2>
        <div className="grid grid-cols-3 gap-4">
          {posts &&
            posts.slice(0, 10).map((post: PostProps) => {
              return (
                <div key={post.id} className="mb-3 min-h-[475px] w-[380px]">
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
              );
            })}
        </div>
      </div>
      <Link href="/posts">
        <Button colorScheme="cyan">See more</Button>
      </Link>
    </div>
  );
};

export default HomePage;
