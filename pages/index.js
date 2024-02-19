import PostCard from "@/component/PostCard";
import Head from 'next/head';

import axios from 'axios';

export default function Home({ users, posts, comments }) {
  return (
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24  `} >
      <Head>
        <title>Social Media Platform</title>
      </Head>
      <PostCard users={users} posts={posts} comments={comments} />
    </main>
  );
}
export async function getStaticProps() {
  try {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;

    const usersRes = await axios.get(`${apiUrl}/users`);
    const users = usersRes.data;

    const postsRes = await axios.get(`${apiUrl}/posts`);
    const posts = postsRes.data;

    const commentsRes = await axios.get(`${apiUrl}/comments`);
    const comments = commentsRes.data;

    return {
      props: {
        users,
        posts,
        comments
      },
    };
  } catch (error) {
    console.error('Error fetching data:', error);
    return {
      props: {
        users: [],
        posts: [],
        comments: [],

      },
    };
  }
}

