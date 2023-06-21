import React from 'react';
import {
  Button,
  EmailInput,
  Input,
  PasswordInput,
} from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './RegisterPage.module.css';

const RegisterPage = () => {
  const [nameValue, setNameValue] = React.useState('');
  const [emailValue, setEmailValue] = React.useState('');
  const [passValue, setPassValue] = React.useState('');

  return (
    <div className={styles.mainContainer}>
      <h2>Регистрация</h2>
      <Input
        type={'text'}
        placeholder={'Имя'}
        onChange={(e) => setNameValue(e.target.value)}
        value={nameValue}
        error={false}
        errorText={'Ошибка'}
      />
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
      <Button htmlType="button">Зарегестрироваться</Button>
      <div className={styles.linkContainer}>
        <p>Уже зарегестрированы?</p>
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default RegisterPage;
