import React from 'react';
import { Paper, Typography } from '@material-ui/core';
import Image from 'next/image';
import Link from 'next/link';

import styles from './Post.module.scss';
import PostActions from '../PostActions';

const Post: React.FC = () => {
  return (
    <Paper elevation={0} className="p-20" classes={{ root: styles.paper }}>
      <Typography variant="h5" className={styles.title}>
        <Link href={'/news/test-123'}>
          Кейс GigAnt: CRM и процессы для масштабирования проекта в HR-Tech
        </Link>
      </Typography>
      <Typography className="mt-10 mb-15">
        Команда Интроверта расскажет о том, как с помощью автоматизации
        процессов в amoCRM удалось сократить процесс вывода кандидата на
        подработку в 2 раза, а конверсию в квалификацию лида увеличить на 25%,
        подключив все каналы обращений в CRM 🤘
      </Typography>
      <Image
        width={600}
        height={400}
        src="https://leonardo.osnova.io/4a0174fd-44b3-5cfe-9671-f2ff2b610f97"
      />

      <PostActions />
    </Paper>
  );
};

export default Post;
