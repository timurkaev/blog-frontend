import Post from '../components/Post';
import MainLayout from '../layouts/MainLayout';
import { GetServerSideProps } from 'next';
import { wrapper } from '../redux/store';
import { parseCookies } from 'nookies';
import { UserApi } from '../utils/api';
import { setUserData } from '../redux/slices/user';

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

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { authToken } = parseCookies(ctx);
    try {
      const userData = await UserApi.getMe(authToken);
      store.dispatch(setUserData(userData));
    } catch (err) {
      console.log(err);
      return { props: {} };
    }
    return { props: {} };
  });
