interface SinglePostData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

interface CommentList {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
}

export type { CommentList, SinglePostData };
