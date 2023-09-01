import Link from 'next/link';

import type { PostProps } from '@/pages';

import ListPostCard from '../modules/ListPostCard';

const ListPostsPage = ({ posts }: { posts: PostProps[] }) => {
  return (
    <div className="flex flex-col gap-8">
      <h1 className="text-2xl font-semibold">All blog posts</h1>
      <div className="grid grid-cols-3 gap-4">
        {posts &&
          posts.map((post: PostProps) => {
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
  );
};

export default ListPostsPage;
