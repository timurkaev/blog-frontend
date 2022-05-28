import React from 'react';
import { Button } from '@material-ui/core';
import { useForm, FormProvider } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { RegisterFormSchema } from '../../../utils/validations';
import FormField from '../../FormField';

interface RegisterFormProps {
  onOpenLogin: () => void;
}

const RegisterForm: React.FC<RegisterFormProps> = ({ onOpenLogin }) => {
  const form = useForm({
    mode: 'onChange',
    resolver: yupResolver(RegisterFormSchema),
  });

  const onSubmit = (data) => console.log(data);

  return (
    <div>
      <FormProvider {...form}>
        <FormField name="fullname" label="Имя и фамилия" />
        <FormField name="email" label="Почта" />
        <FormField name="password" label="Пароль" />
        <form onSubmit={form.handleSubmit(onSubmit)}>
          <div className="d-flex justify-between">
            <Button
              disabled={!form.formState.isValid}
              type="submit"
              className="mt-30"
              color="primary"
              variant="contained"
            >
              Зарегистрироваться
            </Button>
            <Button
              onClick={onOpenLogin}
              className="mt-30"
              color="primary"
              variant="text"
            >
              Войти
            </Button>
          </div>
        </form>
      </FormProvider>
    </div>
  );
};

export default RegisterForm;
