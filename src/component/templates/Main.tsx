import type { ReactNode } from 'react';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
};

const Main = (props: IMainProps) => (
  <div className="">
    {props.meta}
    <div>{props.children}</div>
  </div>
);

export { Main };
