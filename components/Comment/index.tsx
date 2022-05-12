import React from 'react';
import { IconButton, Menu, MenuItem, Typography } from '@material-ui/core';
import styles from './Comment.module.scss';
import MoreIcon from '@material-ui/icons/MoreHorizOutlined';

interface CommentProps {
  user: {
    fullName: string;
  };
  text: string;
}

const Comment: React.FC<CommentProps> = ({ user, text }) => {
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
        <img
          src="https://leonardo.osnova.io/d82f0984-e1f1-559c-b85c-09cfb5edd5bd/-/format/webp/"
          alt="avatar"
          style={{}}
        />
        <b>Master Yoda</b>
      </div>
      <Typography className={styles.text}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi
        assumenda dignissimos ducimus earum eligendi facere, hic laborum
        provident quia voluptas!
      </Typography>
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
