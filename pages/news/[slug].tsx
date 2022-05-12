import MainLayout from '../../layouts/MainLayout';
import { Divider, Paper, Tab, Tabs, Typography } from '@material-ui/core';
import FullPost from '../../components/FullPost';
import Comment from '../../components/Comment';

export default function Home() {
  return (
    // @ts-ignore
    <MainLayout className="mb-50" contentFullWidth>
      <FullPost />
      <Paper elevation={0} className="mt-40 p-30">
        <Typography variant="h6" className="mb-30">
          42 комментария
        </Typography>
        <Tabs
          className="mt-20"
          value={0}
          indicatorColor="primary"
          textColor="primary"
        >
          <Tab label="Популярные" />
          <Tab label="По порядку" />
        </Tabs>
        <Divider />
        <div className="mb-20" />
        <Comment />
        <Comment />
        <Comment />
      </Paper>
    </MainLayout>
  );
}
