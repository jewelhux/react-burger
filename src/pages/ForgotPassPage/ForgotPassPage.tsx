import React from 'react';
import { Button, EmailInput } from '@ya.praktikum/react-developer-burger-ui-components';
import { Link } from 'react-router-dom';
import styles from './ForgotPassPage.module.css';

const ForgotPassPage = () => {
  const [emailValue, setEmailValue] = React.useState('');

  return (
    <div className={styles.mainContainer}>
      <h2>Восстановление пароля</h2>
      <EmailInput
        onChange={(e) => setEmailValue(e.target.value)}
        value={emailValue}
        name={'email'}
        placeholder="E-mail"
      />
      <Button htmlType="button">Восстановить</Button>
      <div className={styles.linkContainer}>
        <p>Вспомнили пароль?</p>
        <Link className={styles.link} to="/">
          Войти
        </Link>
      </div>
    </div>
  );
};

export default ForgotPassPage;
