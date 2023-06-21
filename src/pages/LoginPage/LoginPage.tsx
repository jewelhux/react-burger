import {
  Button,
  EmailInput,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './LoginPage.module.css';

const LoginPage = () => {
  const [emailValue, setEmailValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');

  return (
    <div className={styles.mainContainer}>
      <h2>Вход</h2>
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
      <Button htmlType="button">Войти</Button>
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
