import React, { CSSProperties } from 'react';
import { IconButton } from '@material-ui/core';
import CommentsIcon from '@material-ui/icons/ModeCommentOutlined';
import RepeatIcon from '@material-ui/icons/RepeatOutlined';
import BookmarkIcon from '@material-ui/icons/BookmarkBorderOutlined';
import ShareIcon from '@material-ui/icons/ShareOutlined';

const styles: CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  position: 'relative',
  top: 5,
  listStyle: 'none',
  padding: 0,
  margin: 0,
};

const PostActions: React.FC = () => {
  return (
    <ul style={styles}>
      <li>
        <IconButton>
          <CommentsIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <RepeatIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <BookmarkIcon />
        </IconButton>
      </li>
      <li>
        <IconButton>
          <ShareIcon />
        </IconButton>
      </li>
    </ul>
  );
};

export default PostActions;
