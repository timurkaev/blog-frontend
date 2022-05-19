import Post from '../components/Post';
import MainLayout from '../layouts/MainLayout';

export default function Home() {
  return (
    // @ts-ignore
    <MainLayout>
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
      <Post />
    </MainLayout>
  );
}
