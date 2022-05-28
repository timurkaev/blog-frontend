import React from 'react';
import {
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  Divider,
  TextField,
  Typography,
} from '@material-ui/core';
import ArrowBackIcon from '@material-ui/icons/ArrowBackOutlined';

import styles from './AuthDialog.module.scss';
import MainForm from './forms/Main';
import LoginForm from './forms/Login';
import RegisterForm from './forms/Register';

interface AuthDialogProps {
  onClose: () => void;
  visible: boolean;
}

const AuthDialog: React.FC<AuthDialogProps> = ({ onClose, visible }) => {
  const [formType, setFormType] = React.useState<'main' | 'login' | 'register'>(
    'main',
  );

  return (
    <Dialog
      maxWidth="xs"
      fullWidth
      open={visible}
      onClose={onClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogContent>
        <DialogContentText>
          <div className={styles.content}>
            <Typography className={styles.title}>
              {formType === 'main' ? (
                'Вход в TJ'
              ) : (
                <p
                  onClick={() => setFormType('main')}
                  className={styles.backTitle}
                >
                  <ArrowBackIcon /> К авторизации
                </p>
              )}
            </Typography>
            {formType === 'main' && (
              <MainForm onOpenLogin={() => setFormType('login')} />
            )}
            {formType === 'login' && (
              <LoginForm onOpenRegister={() => setFormType('register')} />
            )}
            {formType === 'register' && (
              <RegisterForm onOpenLogin={() => setFormType('login')} />
            )}
          </div>
        </DialogContentText>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
