import React from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link, Navigate } from 'react-router-dom';
import styles from './ForgotPassPage.module.css';
import { api } from '../../utils/api';

const ForgotPassPage = () => {
  const [emailValue, setEmailValue] = React.useState('');

  const handleSubmitForm = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    await api.resetPass(emailValue).then(() => {
      localStorage.setItem('validEmail', 'true');
      console.log('123');
    });

    <Navigate to="/reset-password" />;
  };

  return (
    <div className={styles.mainContainer}>
      <h2>Восстановление пароля</h2>
      <form className={styles.formContainer} onSubmit={handleSubmitForm}>
        <EmailInput
          onChange={(e) => setEmailValue(e.target.value)}
          value={emailValue}
          name={'email'}
          placeholder="E-mail"
        />
        <Button htmlType="submit">Восстановить</Button>
      </form>
      <div className={styles.linkContainer}>
        <p>Вспомнили пароль?</p>
        <Link className={styles.link} to="/login">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassPage;
