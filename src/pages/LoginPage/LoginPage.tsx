import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import { loginUser } from '../../services/actions';
import { useAppDispatch } from '../../services/store';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const dispatch = useAppDispatch();
  const [emailValue, setEmailValue] = React.useState<string>('');
  const [passValue, setPassValue] = React.useState<string>('');

  const handleSubmitForm = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    dispatch(loginUser({ email: emailValue, password: passValue }));
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Вход</h2>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          placeholder="E-mail"
        />
        <PasswordInput
          onChange={(e) => setPassValue(e.target.value)}
          value={passValue}
          name={'password'}
        />
        <Button htmlType="submit">Войти</Button>
      </form>
      <div className={styles.linkContainer}>
        <p>Вы — новый пользователь?</p>
        <Link className={styles.link} to="/register">
          Зарегестрироваться
        </Link>
      </div>
      <div className={styles.linkContainer}>
        <p>Забыли пароль?</p>
        <Link className={styles.link} to="/forgot-password">
          Восстановить пароль
        </Link>
      </div>
    </div>
  );
};

export default LoginPage;
