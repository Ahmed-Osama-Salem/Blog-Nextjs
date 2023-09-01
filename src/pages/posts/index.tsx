// eslint-disable-next-line import/no-extraneous-dependencies

import axios from 'axios';
import Link from 'next/link';

import BlogLayout from '@/component/layouts/BlogLayout';
import { Meta } from '@/component/layouts/Meta';
import ListPostCard from '@/component/modules/ListPostCard';
import { Main } from '@/component/templates/Main';

interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}
const Index = ({ posts }: { posts: PostProps[] }) => {
  return (
    <Main meta={<Meta title="BitsByets" description="BitsByets." />}>
      <BlogLayout>
        <div className="flex flex-col gap-8">
          <h1 className="text-2xl font-semibold">All blog posts</h1>
          {/* <Text fontSize="2xl" >(2xl) In love with React & Next</Text> */}
          {/* <div className="flex h-[29rem] gap-8 ">
            <div className="w-1/2">
              <PostCard
                author="J. K. Rowling"
                brif="How do you create compelling presentations that wow your colleagues and impress your managers?"
                date=" 1 Jan 2023"
                image="/assets/images/Image.png"
                title="UX review presentations"
              />
            </div>

            <div className="w-1/2">right</div>
          </div> */}
          <div className="grid grid-cols-3 gap-4">
            {posts.map((post) => {
              return (
                <div
                  key={post.id}
                  className=" mb-3 h-auto min-h-[428px] w-[380px]"
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
                </div>
              );
            })}
          </div>
        </div>
      </BlogLayout>
    </Main>
  );
};

export default Index;
export async function getStaticProps() {
  const getPosts = async () => {
    return axios
      .get('https://jsonplaceholder.typicode.com/posts')
      .then((res) => res.data);
  };
  const postsData = await getPosts();
  console.log(postsData);
  return {
    props: {
      posts: postsData,
    },
  };
}
