import React from 'react';
import { Button } from '@material-ui/core';

import styles from './FollowButton.module.scss';
import AddIcon from '@material-ui/icons/AddOutlined';
import CheckIcon from '@material-ui/icons/CheckOutlined';

const FollowButton: React.FC = () => {
  const [followed, setFollowed] = React.useState(false);

  return (
    <Button
      className={styles.followButton}
      onClick={() => setFollowed(!followed)}
      variant="contained"
    >
      {!followed ? (
        <AddIcon />
      ) : (
        <CheckIcon style={{ fontSize: 20, color: '#2ea83a' }} />
      )}
    </Button>
  );
};

export default FollowButton;
