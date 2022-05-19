import React from 'react';
import { NextPage } from 'next';
import MainLayout from '../layouts/MainLayout';
import WriteForm from '../components/WriteForm';

const WritePage: NextPage = () => {
  return (
    // @ts-ignore
    <MainLayout className="main-layout-white" hideMenu hideComments>
      <WriteForm />
    </MainLayout>
  );
};

export default WritePage;
