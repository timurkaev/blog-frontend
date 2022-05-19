import MainLayout from '../../layouts/MainLayout';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import FullPost from '../../components/FullPost';
import Comment from '../../components/Comment';
import PostComments from '../../components/PostComments';

export default function Post() {
  return (
    // @ts-ignore
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <PostComments />
    </MainLayout>
  );
}
