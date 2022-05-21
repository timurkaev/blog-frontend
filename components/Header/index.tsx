import React from 'react';
import Link from 'next/link';
import {
  Paper,
  Button,
  IconButton,
  Avatar,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Typography,
} from '@material-ui/core';

import styles from './Header.module.scss';

import SearchIcon from '@material-ui/icons/Search';
import MessageIcon from '@material-ui/icons/SmsOutlined';
import NotificationIcon from '@material-ui/icons/NotificationsNoneOutlined';
import MenuIcon from '@material-ui/icons/Menu';
import ExpandIcon from '@material-ui/icons/ExpandMoreOutlined';
import AuthDialog from '../AuthDialog';
import UserIcon from '@material-ui/icons/AccountCircleOutlined';

const Header: React.FC = () => {
  const [authVisible, setAuthVisible] = React.useState(false);

  const openAuthDialog = () => {
    setAuthVisible(true);
  };

  const closeAuthDialog = () => {
    setAuthVisible(false);
  };

  return (
    <Paper classes={{ root: styles.root }} elevation={0}>
      <div className="d-flex align-center">
        <IconButton>
          <MenuIcon />
        </IconButton>
        <div className={styles.logo}>
          <Link href="/">
            <img height={40} src="/static/img/logo.svg" alt="Logo" />
          </Link>
        </div>
        <div className={styles.searchBlock}>
          <SearchIcon />
          <input placeholder={'Поиск'} />
        </div>

        <Link href="/write">
          <a>
            <Button className={styles.penButton} variant="contained">
              Новая запись
            </Button>
          </a>
        </Link>
      </div>
      <div className="d-flex align-center">
        <IconButton>
          <MessageIcon />
        </IconButton>
        <IconButton>
          <NotificationIcon />
        </IconButton>
        {/*<Link href="/profile/1">*/}
        {/*  <a className="d-flex align-center">*/}
        {/*    <Avatar*/}
        {/*      className={styles.avatar}*/}
        {/*      alt="Remy Sharp"*/}
        {/*      src="/static/images/avatar/1.jpg"*/}
        {/*    />*/}
        {/*    <ExpandIcon />*/}
        {/*  </a>*/}
        {/*</Link>*/}

        <div onClick={openAuthDialog} className={styles.loginButton}>
          <UserIcon />
          Войти
        </div>
      </div>
      <AuthDialog onClose={closeAuthDialog} visible={authVisible} />
    </Paper>
  );
};

export default Header;
