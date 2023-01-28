import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: string;
  reactions: number;
  tags: string[];
}

export const getServerSideProps: GetServerSideProps<{ posts: Post[] }> = async () => {
  const { posts }: { posts: Post[] } = await (await fetch('https://dummyjson.com/posts')).json();

  return {
    props: {
      posts,
    },
  };
};

export const PostsPage = ({ posts }: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  return (
    <div>
      <h1>Post Page</h1>
      <pre>{JSON.stringify(posts, null, 2)}</pre>
    </div>
  );
};

export default PostsPage;
