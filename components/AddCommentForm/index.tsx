import React from 'react';
import { Button, Input } from '@material-ui/core';
import styles from './AddCommentForm.module.scss';

const AddCommentForm = () => {
  const [clicked, setClicked] = React.useState<boolean>(false);
  const [text, setText] = React.useState<string>('');

  const onAddComment = () => {
    setClicked(false);
    setText('');
  };

  return (
    <div className={styles.form}>
      <Input
        onChange={(e) => setText(e.target.value)}
        value={text}
        onFocus={() => setClicked(true)}
        classes={{ root: styles.fieldRoot }}
        minRows={clicked ? 5 : 1}
        placeholder="Написать комментрарий..."
        fullWidth
        multiline
      />
      {clicked && (
        <Button
          onClick={onAddComment}
          className={styles.addButton}
          variant="contained"
          color="primary"
        >
          Отправить
        </Button>
      )}
    </div>
  );
};

export default AddCommentForm;
