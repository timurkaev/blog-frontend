import { Paper, Typography } from '@material-ui/core';
import Head from 'next/head';
import Header from '../components/Header';
import Image from 'next/image';
import Post from '../components/Post';
import LeftMenu from '../components/LeftMenu';
import { SideComments } from '../components/SideComments';
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
