import React from 'react';
import { Button, TextField } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { LoginFormSchema } from '../../../utils/validations';
import FormField from '../../FormField';

interface LoginFormProps {
  onOpenRegister: () => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onOpenRegister }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(LoginFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <FormField name="email" label="Почта" />
          <FormField name="password" label="Пароль" />
          <div className="d-flex justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="mt-30"
              color="primary"
              variant="contained"
            >
              Войти
            </Button>
            <Button
              onClick={onOpenRegister}
              className="mt-30"
              color="primary"
              variant="text"
            >
              Регистрация
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default LoginForm;
