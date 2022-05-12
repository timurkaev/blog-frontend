import React from 'react';
import Link from 'next/link';
import styles from './LeftMenu.module.scss';
import { Button } from '@material-ui/core';
import FireIcon from '@material-ui/icons/WhatshotOutlined';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import TrendingIcon from '@material-ui/icons/TrendingUpOutlined';
import ListIcon from '@material-ui/icons/FormatListBulletedOutlined';

const menu = [
  { text: 'Лента', icon: <FireIcon />, path: '/' },
  { text: 'Сообщения', icon: <MessageIcon />, path: '/messages' },
  { text: 'Рейтинг RJ', icon: <TrendingIcon />, path: '/rating' },
  { text: 'Подписки', icon: <ListIcon />, path: '/follows' },
];

const LeftMenu = () => {
  return (
    <div className={styles.menu}>
      <ul>
        {menu.map((obj) => (
          <li key={obj.path}>
            <Link href={obj.path}>
              <Button>
                {obj.icon}
                {obj.text}
              </Button>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LeftMenu;
