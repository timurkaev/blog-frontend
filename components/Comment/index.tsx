import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import styles from './Comment.module.scss';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

interface CommentProps {
  user: {
    fullname: string;
    avatarUrl: string;
  };
  text: string;
  createdAt: string;
}

const Comment: React.FC<CommentProps> = ({ user, text, createdAt }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className={styles.comment}>
      <div className={styles.userInfo}>
        <img src={user.avatarUrl} alt="avatar" />
        <b>{user.fullname}</b>
      </div>
      <Typography className={styles.text}>{text}</Typography>
      <span className={styles.replyBtn}>Ответить</span>
      <IconButton onClick={handleClick}>
        <MoreIcon />
      </IconButton>

      <Menu
        id="simple-menu"
        anchorEl={anchorEl}
        elevation={2}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={handleClose}>Удалить</MenuItem>
        <MenuItem onClick={handleClose}>Редактировать</MenuItem>
      </Menu>
    </div>
  );
};

export default Comment;
