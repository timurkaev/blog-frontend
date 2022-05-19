import React from 'react';
import ArrowRightIcon from '@material-ui/icons/NavigateNextOutlined';

import styles from './SideComments.module.scss';
import data from '../../data';
import CommentItem from './CommentItem';
import clsx from 'clsx';

export const SideComments = () => {
  const [vissible, setVissible] = React.useState<boolean>(true);

  const toggleVissible = () => {
    setVissible(!vissible);
  };

  return (
    <div className={clsx(styles.root, !vissible && styles.rotated)}>
      <h3 onClick={toggleVissible}>
        Комментарии <ArrowRightIcon />
      </h3>
      {vissible &&
        data.comments.popular.map((obj) => (
          <CommentItem key={obj.id} {...obj} />
        ))}
    </div>
  );
};
