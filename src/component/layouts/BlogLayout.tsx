import type { ReactNode } from 'react';

import Navbar from '../modules/Navbar';

interface BlogLayoutProps {
  children: ReactNode;
}

const BlogLayout = (props: BlogLayoutProps) => {
  return (
    <section className="flex w-full flex-col items-center">
      <div className="w-full max-w-[1280px] ">
        <Navbar /> {props.children}
      </div>
    </section>
  );
};

export default BlogLayout;
